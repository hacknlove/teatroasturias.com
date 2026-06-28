import { getSearchDocuments } from "../lib/events";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(getSearchDocuments()), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
