import rawEvents, { type TheatreEvent } from "../data/events";

const locale = "es-ES";
const timeZone = "Europe/Madrid";

const dateFormatter = new Intl.DateTimeFormat(locale, {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone,
});

const dayFormatter = new Intl.DateTimeFormat(locale, {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone,
});

const dayKeyFormatter = new Intl.DateTimeFormat("sv-SE", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone,
});

export type EventStatus = "upcoming" | "past";

export type EnrichedEvent = TheatreEvent & {
  companySlug?: string;
  dateLabel: string;
  locationLabel: string;
  venueSlug: string;
  calendarUrl: string;
  status: EventStatus;
  timestamp: number;
};

export type EventGroup = {
  slug: string;
  name: string;
  subtitle?: string;
  mapsUrl?: string;
  events: EnrichedEvent[];
  nextEvent?: EnrichedEvent;
};

function requiredText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function assertEvent(event: TheatreEvent): void {
  const missing: string[] = [];

  if (!requiredText(event.id)) missing.push("id");
  if (!requiredText(event.title)) missing.push("title");
  if (!requiredText(event.date)) missing.push("date");
  if (!requiredText(event.poster)) missing.push("poster");
  if (!requiredText(event.venue?.name)) missing.push("venue.name");
  if (!requiredText(event.venue?.address)) missing.push("venue.address");
  if (!requiredText(event.venue?.city)) missing.push("venue.city");
  if (!requiredText(event.venue?.mapsUrl)) missing.push("venue.mapsUrl");
  if (Number.isNaN(new Date(event.date).getTime())) missing.push("valid date");

  if (missing.length > 0) {
    throw new Error(`Evento "${event.id || event.title || "sin id"}" incompleto: ${missing.join(", ")}`);
  }
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function calendarDate(value: string): string {
  return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function calendarDay(value: string): string {
  return dayKeyFormatter.format(new Date(value)).replace(/-/g, "");
}

function calendarUrl(event: TheatreEvent): string {
  const start = new Date(event.date);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const detailsUrl = event.ticketUrl ?? event.sourceUrl;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: event.allDay
      ? `${calendarDay(event.date)}/${calendarDay(new Date(start.getTime() + 24 * 60 * 60 * 1000).toISOString())}`
      : `${calendarDate(start.toISOString())}/${calendarDate(end.toISOString())}`,
    location: `${event.venue.name}, ${event.venue.address}, ${event.venue.city}`,
    details: detailsUrl ? `Más información: ${detailsUrl}` : "Evento teatral en Asturias",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function statusForDate(date: string): EventStatus {
  const eventDay = dayKeyFormatter.format(new Date(date));
  const today = dayKeyFormatter.format(new Date());
  return eventDay < today ? "past" : "upcoming";
}

function enrich(event: TheatreEvent): EnrichedEvent {
  const venueSlug = slugify(`${event.venue.name} ${event.venue.city}`);
  const companySlug = event.company ? slugify(event.company) : undefined;

  return {
    ...event,
    companySlug,
    dateLabel: event.allDay ? dayFormatter.format(new Date(event.date)) : dateFormatter.format(new Date(event.date)),
    locationLabel: `${event.venue.name}, ${event.venue.city}`,
    venueSlug,
    calendarUrl: calendarUrl(event),
    status: statusForDate(event.date),
    timestamp: new Date(event.date).getTime(),
  };
}

function byUpcomingDate(a: EnrichedEvent, b: EnrichedEvent): number {
  return a.timestamp - b.timestamp;
}

function byRecentPast(a: EnrichedEvent, b: EnrichedEvent): number {
  return b.timestamp - a.timestamp;
}

export function getEvents(): EnrichedEvent[] {
  rawEvents.forEach(assertEvent);
  return rawEvents.map(enrich);
}

export function splitEvents(events = getEvents()): {
  upcoming: EnrichedEvent[];
  past: EnrichedEvent[];
} {
  return {
    upcoming: events.filter((event) => event.status === "upcoming").sort(byUpcomingDate),
    past: events.filter((event) => event.status === "past").sort(byRecentPast),
  };
}

export function getLocationGroups(): EventGroup[] {
  const groups = new Map<string, EventGroup>();

  for (const event of getEvents()) {
    const existing = groups.get(event.venueSlug);
    const events = existing?.events ?? [];
    events.push(event);

    groups.set(event.venueSlug, {
      slug: event.venueSlug,
      name: event.venue.name,
      subtitle: `${event.venue.address}, ${event.venue.city}`,
      mapsUrl: event.venue.mapsUrl,
      events,
    });
  }

  return [...groups.values()]
    .map((group) => {
      const split = splitEvents(group.events);
      return {
        ...group,
        events: [...split.upcoming, ...split.past],
        nextEvent: split.upcoming[0] ?? split.past[0],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, locale));
}

export function getCompanyGroups(): EventGroup[] {
  const groups = new Map<string, EventGroup>();

  for (const event of getEvents().filter((event) => event.company && event.companySlug)) {
    const slug = event.companySlug as string;
    const name = event.company as string;
    const events = groups.get(slug)?.events ?? [];
    events.push(event);

    groups.set(slug, {
      slug,
      name,
      events,
    });
  }

  return [...groups.values()]
    .map((group) => {
      const split = splitEvents(group.events);
      return {
        ...group,
        events: [...split.upcoming, ...split.past],
        nextEvent: split.upcoming[0] ?? split.past[0],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, locale));
}

export function getSearchDocuments() {
  return getEvents().map((event) => ({
    id: event.id,
    title: event.title,
    company: event.company ?? "",
    venue: event.locationLabel,
    city: event.venue.city,
    date: event.date,
    dateLabel: event.dateLabel,
    poster: event.poster,
    mapsUrl: event.venue.mapsUrl,
    calendarUrl: event.calendarUrl,
    ticketUrl: event.ticketUrl ?? "",
    sourceName: event.sourceName ?? "",
    sourceUrl: event.sourceUrl ?? "",
    status: event.status,
    href: `/ubicaciones/${event.venueSlug}/`,
  }));
}
