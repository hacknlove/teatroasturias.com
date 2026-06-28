# teatroasturias.com

Landing estática con Astro para el grupo de WhatsApp Teatro Asturias.

## Desarrollo

```bash
npm install
npm run dev
```

El puerto local del proyecto es siempre `34021`:

```text
http://127.0.0.1:34021/
```

## Build local

```bash
npm run build
npm run cf:dev
```

`wrangler.jsonc` sirve `./dist` con Workers Assets.
`npm run cf:dev` también escucha en `127.0.0.1:34021`.

## Despliegue

El despliegue de producción debe hacerlo Cloudflare Workers Builds desde `main`.

- Producción: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Dominio: `teatroasturias.com`

No hay flujo de despliegue por GitHub Actions ni comando local de publicación.
