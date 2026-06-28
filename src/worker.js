const CANONICAL_HOST = "teatroasturias.com";
const PUBLIC_HOSTS = new Set([CANONICAL_HOST, "www.teatroasturias.com"]);

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (PUBLIC_HOSTS.has(url.hostname) && (url.protocol !== "https:" || url.hostname !== CANONICAL_HOST)) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (!PUBLIC_HOSTS.has(url.hostname) && url.protocol === "http:") {
      url.protocol = "https:";
      return env.ASSETS.fetch(new Request(url.href, request));
    }

    return env.ASSETS.fetch(request);
  },
};
