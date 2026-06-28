# teatroasturias.com

Web estática con Astro 6 preparada para desplegar en Cloudflare Workers como assets estáticos.

## Desarrollo

```bash
npm install
npm run dev
```

El puerto local del proyecto es siempre `34021`:

```text
http://127.0.0.1:34021/
```

## Contenido

Los eventos viven en `src/data/events.ts`. Cada evento requiere:

- `title`
- `date`
- `poster`
- `venue.name`
- `venue.address`
- `venue.city`
- `venue.mapsUrl`

`allDay`, `company`, `ticketUrl`, `sourceName` y `sourceUrl` son opcionales.

Los carteles se guardan en `public/posters/` y se referencian con rutas absolutas, por ejemplo `/posters/luz-de-invierno.svg`.

## Importar cartelera de FETEAS

FETEAS publica su cartelera en una API pública de The Events Calendar. El importador lee esa API, descarga carteles y genera contenido estático:

```bash
npm run scrape:feteas
```

Por defecto importa desde el 1 de enero del año actual hasta el 31 de diciembre de dentro de dos años. Puede acotarse:

```bash
npm run scrape:feteas -- --from=2026-01-01 --to=2026-12-31
```

El script escribe:

- `src/data/events.generated.ts`: eventos generados para Astro.
- `public/posters/feteas/`: carteles descargados.
- `data/imports/feteas.review.json`: informe con eventos importados, descartados y avisos.

Los eventos sin título, fecha, cartel o lugar suficiente se descartan. Si FETEAS no trae calle exacta para una sede, se usa la localidad como dirección y queda marcado en el informe de revisión.

## Build y despliegue

```bash
npm run build
npm run cf:dev
npm run deploy
```

`wrangler.jsonc` sirve `./dist` con Workers Assets.
`npm run cf:dev` también escucha en `127.0.0.1:34021`.
