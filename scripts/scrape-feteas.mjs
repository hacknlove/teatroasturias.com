#!/usr/bin/env node

import { promises as fs } from "node:fs";
import { Buffer } from "node:buffer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const apiUrl = "https://feteas.org/wp-json/tribe/events/v1/events";
const sourceName = "FETEAS";
const userAgent = "teatroasturias.com importer (+https://teatroasturias.com)";

const args = process.argv.slice(2);
const currentYear = new Date().getFullYear();

const options = {
  from: readOption("from", `${currentYear}-01-01`),
  to: readOption("to", `${currentYear + 2}-12-31`),
  perPage: Number(readOption("per-page", "50")),
  pageLimit: readOption("pages", ""),
  reviewOnly: hasFlag("review-only"),
  noDownloadImages: hasFlag("no-download-images"),
};

if (!Number.isInteger(options.perPage) || options.perPage < 1 || options.perPage > 100) {
  throw new Error("--per-page debe ser un número entre 1 y 100");
}

const posterDir = path.join(rootDir, "public", "posters", "feteas");
const generatedFile = path.join(rootDir, "src", "data", "events.generated.ts");
const reviewFile = path.join(rootDir, "data", "imports", "feteas.review.json");

function readOption(name, fallback) {
  const exact = `--${name}`;
  const prefix = `${exact}=`;
  const option = args.find((arg) => arg.startsWith(prefix));
  if (option) return option.slice(prefix.length);

  const index = args.indexOf(exact);
  if (index !== -1) return args[index + 1] ?? fallback;

  return fallback;
}

function hasFlag(name) {
  return args.includes(`--${name}`);
}

function apiDate(value, endOfDay = false) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value} ${endOfDay ? "23:59:59" : "00:00:00"}`;
  }

  return value;
}

function cleanText(value) {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  const slug = cleanText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "evento";
}

function dateToIso(event) {
  const utcStart = cleanText(event.utc_start_date);
  if (utcStart && !utcStart.startsWith("0000-00-00")) {
    return `${utcStart.replace(" ", "T")}Z`;
  }

  const localStart = cleanText(event.start_date);
  if (!localStart) return "";

  return `${localStart.replace(" ", "T")}${event.timezone_abbr === "CEST" ? "+02:00" : "+01:00"}`;
}

function parseSrcset(srcset) {
  return cleanText(srcset)
    .split(",")
    .map((candidate) => {
      const match = candidate.trim().match(/^(\S+)\s+(\d+)w$/);
      if (!match) return undefined;
      return { url: match[1], width: Number(match[2]) };
    })
    .filter(Boolean);
}

function pickResponsiveImage(sizes) {
  if (!sizes || typeof sizes !== "object") return "";

  return (
    sizes.medium_large?.url ||
    sizes.large?.url ||
    sizes.medium?.url ||
    sizes.thumbnail?.url ||
    ""
  );
}

function imageFromDescription(html) {
  if (!html) return "";

  const $ = cheerio.load(html);
  const image = $("img").first();
  const srcset = image.attr("srcset");
  const candidates = parseSrcset(srcset);

  if (candidates.length > 0) {
    const underLimit = candidates
      .filter((candidate) => candidate.width <= 900)
      .sort((a, b) => b.width - a.width);
    if (underLimit[0]) return underLimit[0].url;

    return candidates.sort((a, b) => a.width - b.width)[0]?.url ?? "";
  }

  return image.attr("src") ?? "";
}

function imageUrlForEvent(event) {
  if (event.image && typeof event.image === "object") {
    return pickResponsiveImage(event.image.sizes) || event.image.url || "";
  }

  return imageFromDescription(event.description);
}

function companyForEvent(event) {
  const fields = event.custom_fields;
  if (!fields || Array.isArray(fields)) return "";

  return cleanText(fields._ecp_custom_2?.value);
}

function normalizeLocality(value) {
  return cleanText(value)
    .replace(/\s*\((asturias|cantabria|guadalajara|palencia)\)\s*$/i, "")
    .replace(/\s*,\s*(asturias|cantabria|guadalajara|palencia)\s*$/i, "")
    .trim();
}

function localityFromVenueName(name) {
  const cleanName = cleanText(name);
  if (!cleanName) return "";

  const parenthesized = cleanName.match(/\(([^)]+)\)\s*$/);
  if (parenthesized?.[1]) return normalizeLocality(parenthesized[1]);

  const deMatch = cleanName.match(/\b(?:de|del|d'|da)\s+([A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑa-záéíóúüñ .'-]+)$/i);
  if (deMatch?.[1]) {
    return normalizeLocality(deMatch[1].replace(/^la\s+/i, ""));
  }

  return "";
}

function localityFromTitle(title) {
  const cleanTitle = cleanText(title);
  if (!cleanTitle) return "";

  const enMatch = cleanTitle.match(/\ben\s+([A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑa-záéíóúüñ .'-]+)$/i);
  if (enMatch?.[1]) return normalizeLocality(enMatch[1]);

  const casaCulturaMatch = cleanTitle.match(/\bCASA\s+(?:DE\s+)?CULTURA\s+([A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑa-záéíóúüñ .'-]+)$/i);
  if (casaCulturaMatch?.[1]) return normalizeLocality(casaCulturaMatch[1]);

  return "";
}

function cityForEvent(event) {
  const venue = event.venue;
  const exactCity = cleanText(venue?.city);
  if (exactCity) return { city: exactCity, inferred: false };

  const inferred = localityFromVenueName(venue?.venue) || localityFromTitle(event.title);
  if (inferred) return { city: inferred, inferred: true };

  return {
    city: cleanText(venue?.province || venue?.stateprovince || "Asturias"),
    inferred: false,
  };
}

function mapsUrlFor(venue) {
  const query = [
    cleanText(venue?.venue),
    cleanText(venue?.address),
    cleanText(venue?.city),
    cleanText(venue?.province || venue?.stateprovince),
  ].filter(Boolean).join(", ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function venueForEvent(event) {
  const venue = event.venue;
  const name = cleanText(venue?.venue);
  const cityResult = cityForEvent(event);
  const city = cityResult.city;
  const exactAddress = cleanText(venue?.address);
  const province = cleanText(venue?.province || venue?.stateprovince);
  const address = exactAddress || [cleanText(venue?.zip), city, province]
    .filter(Boolean)
    .join(" ");
  const warnings = [];

  if (!exactAddress) warnings.push("venue.address_missing");
  if (cityResult.inferred) warnings.push("venue.city_inferred");

  return {
    value: {
      name,
      address,
      city,
      mapsUrl: name ? mapsUrlFor(venue) : "",
    },
    warnings,
  };
}

function extensionFromUrl(url) {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)) return ext;
  return ".jpg";
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "user-agent": userAgent,
    },
  });

  if (!response.ok) {
    throw new Error(`FETEAS respondió ${response.status} para ${url}`);
  }

  return response.json();
}

async function downloadPoster(remoteUrl, event) {
  if (options.noDownloadImages) return remoteUrl;

  await fs.mkdir(posterDir, { recursive: true });

  const filename = `${slugify(event.title).slice(0, 70)}-${event.id}${extensionFromUrl(remoteUrl)}`;
  const diskPath = path.join(posterDir, filename);
  const publicPath = `/posters/feteas/${filename}`;

  try {
    await fs.access(diskPath);
    return publicPath;
  } catch {
    // El archivo no existe todavía.
  }

  const response = await fetch(remoteUrl, {
    headers: {
      accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      "user-agent": userAgent,
    },
  });

  if (!response.ok) {
    throw new Error(`No se pudo descargar el cartel ${remoteUrl}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(diskPath, buffer);

  return publicPath;
}

async function fetchEvents() {
  const events = [];
  const review = {
    requestedRange: {
      from: options.from,
      to: options.to,
    },
    pages: [],
  };

  const pageLimit = options.pageLimit ? Number(options.pageLimit) : undefined;
  let page = 1;
  let totalPages = 1;

  do {
    const url = new URL(apiUrl);
    url.searchParams.set("page", String(page));
    url.searchParams.set("per_page", String(options.perPage));
    url.searchParams.set("status", "publish");
    url.searchParams.set("start_date", apiDate(options.from));
    url.searchParams.set("end_date", apiDate(options.to, true));

    const payload = await fetchJson(url);
    totalPages = Number(payload.total_pages || 1);
    const pageEvents = Array.isArray(payload.events) ? payload.events : [];
    events.push(...pageEvents);
    review.pages.push({ page, count: pageEvents.length });
    page += 1;
  } while (page <= totalPages && (!pageLimit || page <= pageLimit));

  return { events, review, totalPages };
}

async function convertEvent(event) {
  const warnings = [];
  const skipped = [];
  const title = cleanText(event.title);
  const date = dateToIso(event);
  const remotePoster = imageUrlForEvent(event);
  const venue = venueForEvent(event);
  const company = companyForEvent(event);

  warnings.push(...venue.warnings);

  if (!event.id) skipped.push("id_missing");
  if (!title) skipped.push("title_missing");
  if (!date || Number.isNaN(new Date(date).getTime())) skipped.push("date_missing");
  if (!remotePoster) skipped.push("poster_missing");
  if (!venue.value.name) skipped.push("venue.name_missing");
  if (!venue.value.address) skipped.push("venue.address_missing");
  if (!venue.value.city) skipped.push("venue.city_missing");
  if (!venue.value.mapsUrl) skipped.push("venue.mapsUrl_missing");

  const reviewItem = {
    sourceId: event.id,
    title,
    sourceUrl: event.url,
    remotePoster,
    venue: venue.value,
    company,
    warnings,
    skipped,
  };

  if (skipped.length > 0) {
    return { event: undefined, reviewItem };
  }

  let poster;
  try {
    poster = await downloadPoster(remotePoster, event);
  } catch (error) {
    reviewItem.skipped.push("poster_download_failed");
    reviewItem.error = error instanceof Error ? error.message : String(error);
    return { event: undefined, reviewItem };
  }

  const ticketUrl = cleanText(event.website);
  const converted = {
    id: `feteas-${event.id}`,
    title,
    date,
    poster,
    venue: venue.value,
    allDay: Boolean(event.all_day),
    ...(company ? { company } : {}),
    ...(ticketUrl ? { ticketUrl } : {}),
    sourceName,
    sourceUrl: event.url,
  };

  return { event: converted, reviewItem };
}

function sortByDate(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

async function writeGenerated(events) {
  const source = `import type { TheatreEvent } from "./events";

const generatedEvents = ${JSON.stringify(events, null, 2)} as const satisfies readonly TheatreEvent[];

export default generatedEvents;
`;

  await fs.writeFile(generatedFile, source);
}

async function main() {
  await fs.mkdir(path.dirname(reviewFile), { recursive: true });

  const { events: sourceEvents, review: fetchReview, totalPages } = await fetchEvents();
  const generated = [];
  const items = [];

  for (const sourceEvent of sourceEvents) {
    const { event, reviewItem } = await convertEvent(sourceEvent);
    items.push(reviewItem);
    if (event) generated.push(event);
  }

  generated.sort(sortByDate);

  const review = {
    sourceName,
    apiUrl,
    generatedAt: new Date().toISOString(),
    options,
    totalPages,
    fetched: sourceEvents.length,
    imported: generated.length,
    skipped: items.filter((item) => item.skipped.length > 0).length,
    ...fetchReview,
    items,
  };

  await fs.writeFile(reviewFile, `${JSON.stringify(review, null, 2)}\n`);

  if (!options.reviewOnly) {
    await writeGenerated(generated);
  }

  console.log(`FETEAS: ${sourceEvents.length} eventos leídos, ${generated.length} importados, ${review.skipped} descartados.`);
  console.log(`Revisión: ${path.relative(rootDir, reviewFile)}`);
  if (!options.reviewOnly) console.log(`Contenido: ${path.relative(rootDir, generatedFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
