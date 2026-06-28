import MiniSearch from "minisearch";

type SearchDocument = {
  id: string;
  title: string;
  company: string;
  venue: string;
  city: string;
  date: string;
  dateLabel: string;
  poster: string;
  mapsUrl: string;
  calendarUrl: string;
  ticketUrl: string;
  sourceName: string;
  sourceUrl: string;
  status: "upcoming" | "past";
  href: string;
};

const input = document.querySelector<HTMLInputElement>("[data-search-input]");
const form = document.querySelector<HTMLFormElement>("[data-search-form]");
const panel = document.querySelector<HTMLElement>("[data-search-panel]");
const defaultFeed = document.querySelector<HTMLElement>("[data-default-feed]");
const resultList = document.querySelector<HTMLElement>("[data-search-results]");
const count = document.querySelector<HTMLElement>("[data-search-count]");
const summary = document.querySelector<HTMLElement>("[data-search-summary]");

let miniSearch: MiniSearch<SearchDocument> | undefined;
let documents: SearchDocument[] = [];
let documentsById = new Map<string, SearchDocument>();

function normalizeTerm(term: string): string {
  return term
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function setText(element: HTMLElement | null, value: string): void {
  if (element) element.textContent = value;
}

function clearResults(): void {
  if (!panel || !defaultFeed || !resultList) return;
  panel.hidden = true;
  defaultFeed.hidden = false;
  resultList.replaceChildren();
  setText(count, "0");
  setText(summary, "");
}

function appendLink(parent: HTMLElement, className: string, href: string, label: string): void {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noreferrer";
  parent.append(link);
}

function renderResult(doc: SearchDocument): HTMLElement {
  const card = document.createElement("article");
  card.className = "event-card";

  const posterLink = document.createElement("a");
  posterLink.className = "poster-link";
  posterLink.href = doc.poster;
  posterLink.target = "_blank";
  posterLink.rel = "noreferrer";
  posterLink.setAttribute("aria-label", `Ver cartel de ${doc.title}`);

  const image = document.createElement("img");
  image.src = doc.poster;
  image.alt = `Cartel de ${doc.title}`;
  image.loading = "lazy";
  posterLink.append(image);

  const body = document.createElement("div");
  body.className = "event-body";

  const meta = document.createElement("div");
  meta.className = "event-meta";
  appendLink(meta, "event-date", doc.calendarUrl, doc.dateLabel);
  appendLink(meta, "event-venue", doc.mapsUrl, doc.venue);

  const title = document.createElement("h3");
  title.textContent = doc.title;

  body.append(meta, title);

  if (doc.company) {
    const company = document.createElement("p");
    company.className = "event-company";
    company.textContent = doc.company;
    body.append(company);
  }

  const actions = document.createElement("div");
  actions.className = "event-actions";
  const sectionLink = document.createElement("a");
  sectionLink.href = doc.href;
  sectionLink.textContent = "Ver sección";
  actions.append(sectionLink);

  if (doc.ticketUrl) {
    appendLink(actions, "ticket-link", doc.ticketUrl, "Entradas");
  }

  if (doc.sourceUrl && doc.sourceUrl !== doc.ticketUrl) {
    appendLink(actions, "", doc.sourceUrl, "Ficha");
  }

  body.append(actions);
  card.append(posterLink, body);

  return card;
}

async function ensureIndex(): Promise<MiniSearch<SearchDocument>> {
  if (miniSearch) return miniSearch;

  const response = await fetch("/eventos.json");
  documents = await response.json() as SearchDocument[];
  documentsById = new Map(documents.map((document) => [document.id, document]));
  miniSearch = new MiniSearch<SearchDocument>({
    fields: ["title", "company", "venue", "city", "dateLabel"],
    processTerm: normalizeTerm,
    storeFields: [
      "id",
      "title",
      "company",
      "venue",
      "city",
      "date",
      "dateLabel",
      "poster",
      "mapsUrl",
      "calendarUrl",
      "ticketUrl",
      "sourceName",
      "sourceUrl",
      "status",
      "href",
    ],
    searchOptions: {
      boost: { title: 3, company: 2, venue: 1.5 },
      prefix: true,
      fuzzy: 0.2,
    },
  });
  miniSearch.addAll(documents);

  return miniSearch;
}

async function runSearch(query: string): Promise<void> {
  if (!panel || !defaultFeed || !resultList) return;

  const cleanQuery = query.trim();
  if (!cleanQuery) {
    clearResults();
    return;
  }

  panel.hidden = false;
  defaultFeed.hidden = true;
  resultList.replaceChildren();

  try {
    const index = await ensureIndex();
    const results = index
      .search(cleanQuery)
      .map((result) => documentsById.get(String(result.id)))
      .filter((document): document is SearchDocument => Boolean(document));
    setText(count, String(results.length));
    setText(summary, results.length === 1 ? "1 obra encontrada" : `${results.length} obras encontradas`);

    if (results.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No hay resultados para esa búsqueda.";
      resultList.append(empty);
      return;
    }

    for (const result of results) {
      resultList.append(renderResult(result));
    }
  } catch {
    setText(count, "0");
    setText(summary, "No se pudo cargar la búsqueda.");
  }
}

if (input && form) {
  input.addEventListener("input", () => {
    void runSearch(input.value);
  });

  form.addEventListener("reset", () => {
    window.setTimeout(clearResults, 0);
  });
}
