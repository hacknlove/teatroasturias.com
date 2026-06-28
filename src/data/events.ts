import generatedEvents from "./events.generated";

export type Venue = {
  name: string;
  address: string;
  city: string;
  mapsUrl: string;
};

export type TheatreEvent = {
  id: string;
  title: string;
  date: string;
  poster: string;
  venue: Venue;
  allDay?: boolean;
  company?: string;
  ticketUrl?: string;
  sourceName?: string;
  sourceUrl?: string;
};

// Datos de muestra para validar el formato. Sustituir por carteles reales antes de publicar.
const manualEvents = [
  {
    id: "luz-de-invierno",
    title: "Luz de invierno",
    date: "2026-06-29T20:00:00+02:00",
    poster: "/posters/luz-de-invierno.svg",
    venue: {
      name: "Teatro Campoamor",
      address: "Calle Pelayo, s/n",
      city: "Oviedo",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Teatro%20Campoamor%2C%20Calle%20Pelayo%2C%20Oviedo",
    },
    company: "Compañía Norte",
    ticketUrl: "https://example.com/entradas/luz-de-invierno",
  },
  {
    id: "el-gesto-minimo",
    title: "El gesto mínimo",
    date: "2026-07-05T19:30:00+02:00",
    poster: "/posters/el-gesto-minimo.svg",
    venue: {
      name: "Teatro Jovellanos",
      address: "Paseo de Begoña, 11",
      city: "Gijón",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Teatro%20Jovellanos%2C%20Paseo%20de%20Bego%C3%B1a%2011%2C%20Gij%C3%B3n",
    },
    company: "Teatro del Umbral",
    ticketUrl: "https://example.com/entradas/el-gesto-minimo",
  },
  {
    id: "la-sala-vacia",
    title: "La sala vacía",
    date: "2026-07-18T20:30:00+02:00",
    poster: "/posters/la-sala-vacia.svg",
    venue: {
      name: "Teatro Palacio Valdés",
      address: "Calle Palacio Valdés, 3",
      city: "Avilés",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Teatro%20Palacio%20Vald%C3%A9s%2C%20Calle%20Palacio%20Vald%C3%A9s%203%2C%20Avil%C3%A9s",
    },
    company: "Escena Abierta",
  },
  {
    id: "noche-de-tablas",
    title: "Noche de tablas",
    date: "2026-08-02T21:00:00+02:00",
    poster: "/posters/noche-de-tablas.svg",
    venue: {
      name: "Casa de Cultura Teodoro Cuesta",
      address: "Calle Manuel Llaneza, 8",
      city: "Mieres",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Casa%20de%20Cultura%20Teodoro%20Cuesta%2C%20Mieres",
    },
    ticketUrl: "https://example.com/entradas/noche-de-tablas",
  },
  {
    id: "donde-acaba-la-niebla",
    title: "Donde acaba la niebla",
    date: "2026-05-12T20:00:00+02:00",
    poster: "/posters/donde-acaba-la-niebla.svg",
    venue: {
      name: "Teatro Filarmónica",
      address: "Calle Mendizábal, 3",
      city: "Oviedo",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Teatro%20Filarm%C3%B3nica%2C%20Calle%20Mendiz%C3%A1bal%203%2C%20Oviedo",
    },
    company: "Compañía Norte",
  },
  {
    id: "ensayo-para-una-fuga",
    title: "Ensayo para una fuga",
    date: "2026-04-25T19:00:00+02:00",
    poster: "/posters/ensayo-para-una-fuga.svg",
    venue: {
      name: "Laboral Ciudad de la Cultura",
      address: "Calle Luis Moya Blanco, 261",
      city: "Gijón",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Laboral%20Ciudad%20de%20la%20Cultura%2C%20Gij%C3%B3n",
    },
    company: "Teatro del Umbral",
    ticketUrl: "https://example.com/entradas/ensayo-para-una-fuga",
  },
] as const satisfies readonly TheatreEvent[];

const events = [...generatedEvents, ...manualEvents] as const satisfies readonly TheatreEvent[];

export default events;
