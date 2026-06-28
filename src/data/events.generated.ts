import type { TheatreEvent } from "./events";

const generatedEvents = [
  {
    "id": "feteas-11018",
    "title": "SELENA SOLIDARIA «GALA INOCENTE» DE SOTO DEL BARCO 💕💕💕💕",
    "date": "2026-01-09T18:00:00Z",
    "poster": "/posters/feteas/selena-solidaria-gala-inocente-de-soto-del-barco-11018.jpeg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/selena-solidaria-en-la-gala-inocente-de-soto-del-barco/"
  },
  {
    "id": "feteas-11029",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en CASTROPOL",
    "date": "2026-01-10T19:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-castropol-11029.jpeg",
    "venue": {
      "name": "CASA CULTURA DE CASTROPOL",
      "address": "CASTROPOL",
      "city": "CASTROPOL",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20CASTROPOL"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-castropol/"
  },
  {
    "id": "feteas-10948",
    "title": "Hay xente pa too",
    "date": "2026-01-17T19:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-10948.jpg",
    "venue": {
      "name": "CASA CULTURA DE CASTROPOL",
      "address": "CASTROPOL",
      "city": "CASTROPOL",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20CASTROPOL"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too/"
  },
  {
    "id": "feteas-11039",
    "title": "TARTUFO PLAY en Langreo",
    "date": "2026-01-17T19:15:00Z",
    "poster": "/posters/feteas/tartufo-play-en-langreo-11039.jpg",
    "venue": {
      "name": "JOSE LEON DELESTAL",
      "address": "Langreo",
      "city": "Langreo",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=JOSE%20LEON%20DELESTAL"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-en-langreo-2/"
  },
  {
    "id": "feteas-10708",
    "title": "AL LORO",
    "date": "2026-01-23T19:00:00Z",
    "poster": "/posters/feteas/al-loro-10708.jpg",
    "venue": {
      "name": "AUDITORIO LA POLA SIERO",
      "address": "33510 LA POLA SIERO ASTURIAS",
      "city": "LA POLA SIERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AUDITORIO%20LA%20POLA%20SIERO%2C%20LA%20POLA%20SIERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-2/"
  },
  {
    "id": "feteas-11031",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en LA FELGUERA",
    "date": "2026-01-24T19:15:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-la-felguera-11031.png",
    "venue": {
      "name": "NUEVO TEATRO DE LA FELGUERA (LANGREO)",
      "address": "LANGREO",
      "city": "LANGREO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=NUEVO%20TEATRO%20DE%20LA%20FELGUERA%20(LANGREO)"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-la-felguera/"
  },
  {
    "id": "feteas-11048",
    "title": "VECINOS de Teatro Kumen en Luanco",
    "date": "2026-01-30T18:00:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-luanco-11048.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE LUANCO",
      "address": "CULTURA DE LUANCO",
      "city": "CULTURA DE LUANCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20LUANCO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-de-teatro-kumen-en-luanco/"
  },
  {
    "id": "feteas-10950",
    "title": "Hay xente pa too",
    "date": "2026-02-01T17:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-10950.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too-2/"
  },
  {
    "id": "feteas-11250",
    "title": "TRES SAINETES",
    "date": "2026-02-07T19:00:00Z",
    "poster": "/posters/feteas/tres-sainetes-11250.jpg",
    "venue": {
      "name": "Teatro José León Delestal",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Jos%C3%A9%20Le%C3%B3n%20Delestal"
    },
    "allDay": false,
    "company": "COMPAÑIA ASTURIANA DE COMEDIAS",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tres-sainetes-2/"
  },
  {
    "id": "feteas-11052",
    "title": "LOS CUERNOS DE DON FRIOLERA de teatro kumen en Vegadeo",
    "date": "2026-02-08T17:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-vegadeo-11052.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-vegadeo/"
  },
  {
    "id": "feteas-11231",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRRO en BUEÑO",
    "date": "2026-02-08T17:30:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horro-en-bueno-11231.png",
    "venue": {
      "name": "CASA DE CULTURA DE BUEÑO",
      "address": "CL. BUEÑO, 22A",
      "city": "BUEÑO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20BUE%C3%91O%2C%20CL.%20BUE%C3%91O%2C%2022A%2C%20BUE%C3%91O%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horro-en-bueno/"
  },
  {
    "id": "feteas-10953",
    "title": "Hay xente pa too",
    "date": "2026-02-12T18:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-10953.jpg",
    "venue": {
      "name": "Centro Municipal del Llano",
      "address": "Llano",
      "city": "Llano",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Centro%20Municipal%20del%20Llano"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too-3/"
  },
  {
    "id": "feteas-11349",
    "title": "TEATRO CARBAYIN: «RIFIFÍ A L&#8217;ASTURIANA»",
    "date": "2026-02-13T19:30:00Z",
    "poster": "/posters/feteas/teatro-carbayin-rififi-a-l-8217-asturiana-11349.jpg",
    "venue": {
      "name": "CENTRO CULTURAL DE LA FRESNEDA",
      "address": "AVDA PRINCIPAL S/N",
      "city": "POLA SIERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20DE%20LA%20FRESNEDA%2C%20AVDA%20PRINCIPAL%20S%2FN%2C%20POLA%20SIERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-rififi-a-lasturiana-2/"
  },
  {
    "id": "feteas-11237",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en BIESCAS",
    "date": "2026-02-14T18:30:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-biescas-11237.jpg",
    "venue": {
      "name": "CENTRO CULTURAL PABLO NERUDA",
      "address": "CL. RAMÓN Y CAJAL, 5",
      "city": "BIESCAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20PABLO%20NERUDA%2C%20CL.%20RAM%C3%93N%20Y%20CAJAL%2C%205%2C%20BIESCAS%2C%20HUESCA"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-biescas/"
  },
  {
    "id": "feteas-10957",
    "title": "Conceyu Familiar",
    "date": "2026-02-14T19:00:00Z",
    "poster": "/posters/feteas/conceyu-familiar-10957.jpg",
    "venue": {
      "name": "NUEVO TEATRO DE LA FELGUERA (LANGREO)",
      "address": "LANGREO",
      "city": "LANGREO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=NUEVO%20TEATRO%20DE%20LA%20FELGUERA%20(LANGREO)"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/conceyu-familiar/"
  },
  {
    "id": "feteas-11197",
    "title": "CRÓNIQUES DE VALDESOTO",
    "date": "2026-02-20T18:30:00Z",
    "poster": "/posters/feteas/croniques-de-valdesoto-11197.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/croniques-de-valdesoto-5/"
  },
  {
    "id": "feteas-11243",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en MIERES",
    "date": "2026-02-21T19:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-mieres-11243.png",
    "venue": {
      "name": "CASA DE CULTURA TEODORO CUESTA DE MIERES",
      "address": "CL. MANUEL LLANEZA, 8",
      "city": "MIERES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20TEODORO%20CUESTA%20DE%20MIERES%2C%20CL.%20MANUEL%20LLANEZA%2C%208%2C%20MIERES%2C%20MIERES"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-mieres/"
  },
  {
    "id": "feteas-10864",
    "title": "AL LORO",
    "date": "2026-02-21T19:15:00Z",
    "poster": "/posters/feteas/al-loro-10864.jpg",
    "venue": {
      "name": "Teatro José León Delestal",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Jos%C3%A9%20Le%C3%B3n%20Delestal"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-3/"
  },
  {
    "id": "feteas-10897",
    "title": "CIAO AMORE O ADIÓS BABAYO 🐄💕🐄💕🐄🪄🪄🪄🪄",
    "date": "2026-02-26T18:00:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-10897.jpg",
    "venue": {
      "name": "ATENEO JOVELLANOS",
      "address": "Francisco Tomás y Valiente, 1- 2ª planta Edificio » Escuela de Comercio»",
      "city": "GIJÓN",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ATENEO%20JOVELLANOS%2C%20Francisco%20Tom%C3%A1s%20y%20Valiente%2C%201-%202%C2%AA%20planta%20Edificio%20%C2%BB%20Escuela%20de%20Comercio%C2%BB%2C%20GIJ%C3%93N%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-2/"
  },
  {
    "id": "feteas-11394",
    "title": "CRÓNIQUES DE VALDESOTO",
    "date": "2026-02-27T18:30:00Z",
    "poster": "/posters/feteas/croniques-de-valdesoto-11394.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE MUROS DEL NALON",
      "address": "CULTURA DE MUROS DEL NALON",
      "city": "CULTURA DE MUROS DEL NALON",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20MUROS%20DEL%20NALON"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/la-fonda-16/"
  },
  {
    "id": "feteas-11056",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Pola de Laviana",
    "date": "2026-02-27T19:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-pola-de-laviana-11056.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-pola-de-laviana/"
  },
  {
    "id": "feteas-11438",
    "title": "Hay xente pa too",
    "date": "2026-02-28T18:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-11438.jpg",
    "venue": {
      "name": "casa cultura ribadesella",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=casa%20cultura%20ribadesella"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too-4/"
  },
  {
    "id": "feteas-11383",
    "title": "TEATRO CARBAYIN: «POR UN PUÑÁU DE CASTAÑES»",
    "date": "2026-02-28T19:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-por-un-punau-de-castanes-11383.jpg",
    "venue": {
      "name": "MUÑAS (Valdés)",
      "address": "Valdés",
      "city": "Valdés",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=MU%C3%91AS%20(Vald%C3%A9s)"
    },
    "allDay": false,
    "company": "Teatru Carbayín",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-por-un-punau-de-castanes-2/"
  },
  {
    "id": "feteas-11407",
    "title": "Santa Bárbara Teatro &#8211; «CAMÍN DE SANTIAGO»",
    "date": "2026-02-28T19:15:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-camin-de-santiago-11407.jpg",
    "venue": {
      "name": "Teatro José León Delestal",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Jos%C3%A9%20Le%C3%B3n%20Delestal"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-camin-de-santiago-3/"
  },
  {
    "id": "feteas-11396",
    "title": "CRONIQUES DE VALDESOTO",
    "date": "2026-03-07T17:30:00Z",
    "poster": "/posters/feteas/croniques-de-valdesoto-11396.jpg",
    "venue": {
      "name": "RESTAURANTE LUPA",
      "address": "CUDILLERO",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=RESTAURANTE%20LUPA%2C%20CUDILLERO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/croniques-de-valdesoto-7/"
  },
  {
    "id": "feteas-11417",
    "title": "«DE DOLORES A LOLA» (5ª Temporada) G.T. SELENA en Santiago de Ambiedes",
    "date": "2026-03-07T18:00:00Z",
    "poster": "/posters/feteas/de-dolores-a-lola-5-temporada-g-t-selena-en-santiago-de-ambiedes-11417.jpeg",
    "venue": {
      "name": "CENTRO SOCIAL DE SANTIGO DE AMBIEDES",
      "address": "EL VALLE ,6 33490",
      "city": "GOZÓN(LUANCO)",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20SOCIAL%20DE%20SANTIGO%20DE%20AMBIEDES%2C%20EL%20VALLE%20%2C6%2033490%2C%20GOZ%C3%93N(LUANCO)%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/de-dolores-a-lola-5a-temporada/"
  },
  {
    "id": "feteas-11480",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en HERRERA DE PISUERGA",
    "date": "2026-03-07T18:30:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-herrera-de-pisuerga-11480.jpeg",
    "venue": {
      "name": "CASA DE CULTURA DE HERRERA DE PISUERGA",
      "address": "CULTURA DE HERRERA DE PISUERGA",
      "city": "CULTURA DE HERRERA DE PISUERGA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20HERRERA%20DE%20PISUERGA"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-herrera-de-pisuerga/"
  },
  {
    "id": "feteas-11059",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Mieres",
    "date": "2026-03-07T19:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-mieres-11059.jpg",
    "venue": {
      "name": "CASA CULTURA DE MIERES",
      "address": "MIERES",
      "city": "MIERES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20MIERES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-mieres/"
  },
  {
    "id": "feteas-11581",
    "title": "TRES SAINETES",
    "date": "2026-03-08T17:00:00Z",
    "poster": "/posters/feteas/tres-sainetes-11581.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "company": "COMPAÑIA ASTURIANA DE COMEDIAS",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tres-sainetes-2-2/"
  },
  {
    "id": "feteas-11485",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en CANGAS DE ONÍS",
    "date": "2026-03-12T18:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-cangas-de-onis-11485.png",
    "venue": {
      "name": "CASA DE CULTURA DE CANGAS DE ONIS",
      "address": "CULTURA DE CANGAS DE ONIS",
      "city": "CULTURA DE CANGAS DE ONIS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20CANGAS%20DE%20ONIS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-cangas-de-onis/"
  },
  {
    "id": "feteas-11524",
    "title": "SAXFEM &#8211; Comedia del Grupo de Teatro La Galerna en CMI El Coto. Gijón",
    "date": "2026-03-12T18:00:00Z",
    "poster": "/posters/feteas/saxfem-8211-comedia-del-grupo-de-teatro-la-galerna-en-cmi-el-coto-gijo-11524.jpg",
    "venue": {
      "name": "CMI EL COTO",
      "address": "33210 CMI El Coto. Gijón ASTURIAS",
      "city": "CMI El Coto. Gijón",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CMI%20EL%20COTO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "La Galerna",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/saxfem-5/"
  },
  {
    "id": "feteas-11586",
    "title": "TRES SAINETES",
    "date": "2026-03-13T18:00:00Z",
    "poster": "/posters/feteas/tres-sainetes-11586.jpg",
    "venue": {
      "name": "Teatro El Llar de Corvera",
      "address": "Avenida Principado nº1",
      "city": "Las Vegas - Corvera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20El%20Llar%20de%20Corvera%2C%20Avenida%20Principado%20n%C2%BA1%2C%20Las%20Vegas%20-%20Corvera%2C%20Asturias"
    },
    "allDay": false,
    "company": "COMPAÑÍA ASTURIANA DE COMEDIAS",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tres-sainetes-3/"
  },
  {
    "id": "feteas-11140",
    "title": "TARTUFO PLAY de Teatro Kumen en Arriondas",
    "date": "2026-03-13T18:30:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-arriondas-11140.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE ARRIONDAS",
      "address": "CULTURA DE ARRIONDAS",
      "city": "CULTURA DE ARRIONDAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20ARRIONDAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-arriondas/"
  },
  {
    "id": "feteas-11487",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HORREO en POSADA DE LLANERA",
    "date": "2026-03-14T18:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-posada-de-llanera-11487.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LA HABANA de Posada de Llanera",
      "address": "Posada de Llanera",
      "city": "Posada de Llanera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LA%20HABANA%20de%20Posada%20de%20Llanera"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-posada-de-llanera/"
  },
  {
    "id": "feteas-11570",
    "title": "AL LORO",
    "date": "2026-03-15T17:30:00Z",
    "poster": "/posters/feteas/al-loro-11570.png",
    "venue": {
      "name": "ESCUELA HOGAR DE MORCIN",
      "address": "MORCIN ASTURIAS",
      "city": "MORCIN",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ESCUELA%20HOGAR%20DE%20MORCIN%2C%20MORCIN%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-8/"
  },
  {
    "id": "feteas-11700",
    "title": "Solo Tengo Lo Que Di",
    "date": "2026-03-19T18:00:00Z",
    "poster": "/posters/feteas/solo-tengo-lo-que-di-11700.jpg",
    "venue": {
      "name": "Centro Municipal Integrado Gijón Sur",
      "address": "c/ Ramón Areces, 7",
      "city": "Gijón",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Centro%20Municipal%20Integrado%20Gij%C3%B3n%20Sur%2C%20c%2F%20Ram%C3%B3n%20Areces%2C%207%2C%20Gij%C3%B3n%2C%20Asturias"
    },
    "allDay": false,
    "company": "SYNTEXTO TEATRO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/solo-tengo-lo-que-di/"
  },
  {
    "id": "feteas-11278",
    "title": "Redescubriendo Fuenteovejuna",
    "date": "2026-03-21T18:00:00Z",
    "poster": "/posters/feteas/redescubriendo-fuenteovejuna-11278.jpg",
    "venue": {
      "name": "Casa Cultura de Ribadesella",
      "address": "Ribadesella",
      "city": "Ribadesella",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Casa%20Cultura%20de%20Ribadesella"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/redescubriendo-fuenteovejuna-4/"
  },
  {
    "id": "feteas-11558",
    "title": "Teatro Padre coll ¨Caxigalines nuestres",
    "date": "2026-03-21T19:15:00Z",
    "poster": "/posters/feteas/teatro-padre-coll-caxigalines-nuestres-11558.jpg",
    "venue": {
      "name": "Teatro José León Delestal",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Jos%C3%A9%20Le%C3%B3n%20Delestal"
    },
    "allDay": false,
    "company": "TEATRO PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/caxigalines-nuestres-2/"
  },
  {
    "id": "feteas-11372",
    "title": "TEATRO CARBAYIN: «EL DISPARATE»",
    "date": "2026-03-21T20:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-el-disparate-11372.jpg",
    "venue": {
      "name": "Sariego",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Sariego"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-el-disparate-8/"
  },
  {
    "id": "feteas-11491",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en VEGADEO",
    "date": "2026-03-22T17:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-vegadeo-11491.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-vegadeo/"
  },
  {
    "id": "feteas-11351",
    "title": "TEATRO CARBAYIN: «POR UN PUÑÁU DE CASTAÑES»",
    "date": "2026-03-27T19:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-por-un-punau-de-castanes-11351.jpg",
    "venue": {
      "name": "CENTRO POLIVALENTE DE CARBAYIN",
      "address": "CARBAYIN",
      "city": "CARBAYIN",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20POLIVALENTE%20DE%20CARBAYIN"
    },
    "allDay": false,
    "company": "Teatru Carbayín",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-por-un-punau-de-castanes/"
  },
  {
    "id": "feteas-11353",
    "title": "TEATRO CARBAYÍN: «UNA DE MATRIMONIOS»",
    "date": "2026-04-08T18:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-una-de-matrimonios-11353.jpg",
    "venue": {
      "name": "AUDITORIO LA POLA SIERO",
      "address": "33510 LA POLA SIERO ASTURIAS",
      "city": "LA POLA SIERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AUDITORIO%20LA%20POLA%20SIERO%2C%20LA%20POLA%20SIERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-una-de-matrimonios/"
  },
  {
    "id": "feteas-11799",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en SANTIPONCE (SEVILLA)",
    "date": "2026-04-10T17:30:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-santiponce-sevilla-11799.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE SANTIPONCE",
      "address": "Cl. la Almendra s/n",
      "city": "SANTIPONCE - SEVILLA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20SANTIPONCE%2C%20Cl.%20la%20Almendra%20s%2Fn%2C%20SANTIPONCE%20-%20SEVILLA%2C%20SEVILLA"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-santiponce-sevilla/"
  },
  {
    "id": "feteas-11812",
    "title": "Los colores del miedo",
    "date": "2026-04-10T17:30:00Z",
    "poster": "/posters/feteas/los-colores-del-miedo-11812.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE MUROS DEL NALON",
      "address": "CULTURA DE MUROS DEL NALON",
      "city": "CULTURA DE MUROS DEL NALON",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20MUROS%20DEL%20NALON"
    },
    "allDay": false,
    "company": "Maliayo Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-colores-del-miedo-6/"
  },
  {
    "id": "feteas-11357",
    "title": "RADIO CARBAYÍN",
    "date": "2026-04-10T19:30:00Z",
    "poster": "/posters/feteas/radio-carbayin-11357.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/radio-carbayin-2/"
  },
  {
    "id": "feteas-11360",
    "title": "TEATRO CARBAYIN: «LA MAXA DE LA PRIMER VEZ»",
    "date": "2026-04-12T18:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-la-maxa-de-la-primer-vez-11360.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-la-maxa-de-la-primer-vez/"
  },
  {
    "id": "feteas-11802",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en QUERÚAS",
    "date": "2026-04-12T18:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-queruas-11802.jpg",
    "venue": {
      "name": "QUERUAS",
      "address": "QUERÚAS",
      "city": "QUERÚAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=QUERUAS%2C%20QUER%C3%9AAS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-queruas/"
  },
  {
    "id": "feteas-11280",
    "title": "Redescubriendo Fuenteovejuna",
    "date": "2026-04-16T17:30:00Z",
    "poster": "/posters/feteas/redescubriendo-fuenteovejuna-11280.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE CANGAS DE ONIS",
      "address": "CULTURA DE CANGAS DE ONIS",
      "city": "CULTURA DE CANGAS DE ONIS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20CANGAS%20DE%20ONIS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/redescubriendo-fuenteovejuna-5/"
  },
  {
    "id": "feteas-11750",
    "title": "¨MÁS P´ALLÁ QUE P´ACA¨TEATRO PADRE COLL, CASA CULTURA LUANCO",
    "date": "2026-04-17T17:00:00Z",
    "poster": "/posters/feteas/mas-p-alla-que-p-aca-teatro-padre-coll-casa-cultura-luanco-11750.jpg",
    "venue": {
      "name": "CASA CULTURA DE LUANCO",
      "address": "LUANCO",
      "city": "LUANCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20LUANCO"
    },
    "allDay": false,
    "company": "TEATRO PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/%c2%a8mas-palla-que-paca%c2%a8teatro-padre-coll-casa-cultura-luanco/"
  },
  {
    "id": "feteas-11827",
    "title": "SANTA BÁRBARA TEATRO &#8211; ESPÉROTE NEL PUERTU",
    "date": "2026-04-17T17:00:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-esperote-nel-puertu-11827.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-esperote-nel-puertu-7/"
  },
  {
    "id": "feteas-11062",
    "title": "VECINOS de Teatro Kumen en Driebes (Guadalajara) por DINAMIZ-ARTj",
    "date": "2026-04-18T16:30:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-driebes-guadalajara-por-dinamiz-artj-11062.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE DRIEBES",
      "address": "CULTURA DE DRIEBES",
      "city": "CULTURA DE DRIEBES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20DRIEBES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-de-teatro-kumen-en-driebes-guadalajara-por-dinamiz-artj/"
  },
  {
    "id": "feteas-11807",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en CENTRO SOCIAL DE MAYORES de LUARCA",
    "date": "2026-04-18T17:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-centro-social-de-mayores-de-l-11807.jpg",
    "venue": {
      "name": "CENTRO SOCIAL DE PERSONAS MAYORES DE LUARCA",
      "address": "CL. EL PILARÍN",
      "city": "LUARCA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20SOCIAL%20DE%20PERSONAS%20MAYORES%20DE%20LUARCA%2C%20CL.%20EL%20PILAR%C3%8DN%2C%20LUARCA%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-centro-social-de-mayores-de-luarca/"
  },
  {
    "id": "feteas-11703",
    "title": "La Casa de B. Alba",
    "date": "2026-04-18T17:30:00Z",
    "poster": "/posters/feteas/la-casa-de-b-alba-11703.jpg",
    "venue": {
      "name": "RONDA POR CARREÑO (PERVERA)",
      "address": "PERVERA",
      "city": "CARREÑO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=RONDA%20POR%20CARRE%C3%91O%20(PERVERA)%2C%20PERVERA%2C%20CARRE%C3%91O"
    },
    "allDay": false,
    "company": "SYNTEXTO TEATRO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/la-casa-de-b-alba-3/"
  },
  {
    "id": "feteas-11460",
    "title": "TEATRO BALUARTE- DELICADAS de Alfredo Sanzol",
    "date": "2026-04-19T16:00:00Z",
    "poster": "/posters/feteas/teatro-baluarte-delicadas-de-alfredo-sanzol-11460.jpg",
    "venue": {
      "name": "CASA CULTURA DE VEGADEO",
      "address": "VEGADEO",
      "city": "VEGADEO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20VEGADEO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/delicadas-de-alfredo-sanzol/"
  },
  {
    "id": "feteas-11147",
    "title": "TARTUFO PLAY de Teatro Kumen en Cangas de Narcea",
    "date": "2026-04-20T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-cangas-de-narcea-11147.jpg",
    "venue": {
      "name": "TEATRO TORENO",
      "address": "Cangas de Narcea",
      "city": "Cangas de Narcea",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20TORENO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-cangas-de-narcea/"
  },
  {
    "id": "feteas-11754",
    "title": "¨MÁS P´ALLÁ QUE P´ACA¨ TEATRO PADRE COLL TEATRO DE MOREDA",
    "date": "2026-04-23T17:00:00Z",
    "poster": "/posters/feteas/mas-p-alla-que-p-aca-teatro-padre-coll-teatro-de-moreda-11754.jpg",
    "venue": {
      "name": "TEATRO DE MOREDA",
      "address": "MOREDA",
      "city": "MOREDA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20DE%20MOREDA"
    },
    "allDay": false,
    "company": "TEATRO PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/%c2%a8mas-palla-que-paca%c2%a8-teatro-padre-col-teatro-de-moreda/"
  },
  {
    "id": "feteas-12026",
    "title": "Los colores del miedo",
    "date": "2026-04-24T18:00:00Z",
    "poster": "/posters/feteas/los-colores-del-miedo-12026.jpg",
    "venue": {
      "name": "LA LECHERA de CANCIENES",
      "address": "Ctra. Comarcal 634, 3",
      "city": "CANCIENES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=LA%20LECHERA%20de%20CANCIENES%2C%20Ctra.%20Comarcal%20634%2C%203%2C%20CANCIENES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-colores-del-miedo-7/"
  },
  {
    "id": "feteas-11065",
    "title": "VECINOS de Teatro Kumen en Salinas del Pisuerga (DINAMIZ-ARTj)",
    "date": "2026-04-24T18:30:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-salinas-del-pisuerga-dinamiz-artj-11065.jpg",
    "venue": {
      "name": "ANTIGUAS ESCUELAS DE SALINAS DEL PISUERGA",
      "address": "SALINAS DEL PISUERGA",
      "city": "SALINAS DEL PISUERGA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ANTIGUAS%20ESCUELAS%20DE%20SALINAS%20DEL%20PISUERGA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-de-teatro-kumen-en-salinas-del-pisuerga-dinamiz-artj/"
  },
  {
    "id": "feteas-12020",
    "title": "Hay xente pa too",
    "date": "2026-04-25T17:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-12020.png",
    "venue": {
      "name": "casa cultura de viella",
      "address": "viella",
      "city": "viella",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=casa%20cultura%20de%20viella"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too-5/"
  },
  {
    "id": "feteas-12030",
    "title": "Los colores del miedo",
    "date": "2026-04-25T18:00:00Z",
    "poster": "/posters/feteas/los-colores-del-miedo-12030.jpg",
    "venue": {
      "name": "TEATRO MUNICIPAL DE SAN MARTIN DEL REY AURELIO",
      "address": "SAN MARTIN DEL REY AURELIO",
      "city": "SAN MARTIN DEL REY AURELIO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20MUNICIPAL%20DE%20SAN%20MARTIN%20DEL%20REY%20AURELIO"
    },
    "allDay": false,
    "company": "Maliayo Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-colores-del-miedo-8/"
  },
  {
    "id": "feteas-12040",
    "title": "DERRABE de Teatro Kumen",
    "date": "2026-04-26T17:00:00Z",
    "poster": "/posters/feteas/derrabe-de-teatro-kumen-12040.jpg",
    "venue": {
      "name": "TEATRO JOSE LEON DELESTAL de La Felguera",
      "address": "Felguera",
      "city": "Felguera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20JOSE%20LEON%20DELESTAL%20de%20La%20Felguera"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/derrabe-de-teatro-kumen/"
  },
  {
    "id": "feteas-11200",
    "title": "AL LORO",
    "date": "2026-05-01T17:30:00Z",
    "poster": "/posters/feteas/al-loro-11200.jpg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-4/"
  },
  {
    "id": "feteas-12064",
    "title": "«CIAO AMORE O ADIÓS BABAYO » EN LA FELGUERA",
    "date": "2026-05-02T06:00:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-en-la-felguera-12064.jpeg",
    "venue": {
      "name": "TEATRO JOSE LEÓN DELESTAL LA FELGUERA",
      "address": "LA FELGUERA",
      "city": "LA FELGUERA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20JOSE%20LE%C3%93N%20DELESTAL%20LA%20FELGUERA"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-en-la-felguera-2/"
  },
  {
    "id": "feteas-12058",
    "title": "Tres sainetes",
    "date": "2026-05-02T17:00:00Z",
    "poster": "/posters/feteas/tres-sainetes-12058.jpg",
    "venue": {
      "name": "Parroquia de San Martín de Cardo",
      "address": "Gozón Asturias",
      "city": "Gozón",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parroquia%20de%20San%20Mart%C3%ADn%20de%20Cardo%2C%20Goz%C3%B3n%2C%20Asturias"
    },
    "allDay": false,
    "company": "Compañía Asturiana de comedias",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tres-sainetes-5/"
  },
  {
    "id": "feteas-11398",
    "title": "Al loro",
    "date": "2026-05-02T18:00:00Z",
    "poster": "/posters/feteas/al-loro-11398.png",
    "venue": {
      "name": "Teatro del Entrego",
      "address": "C. Saturnino Menendez, 0,",
      "city": "El Entrego",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20del%20Entrego%2C%20C.%20Saturnino%20Menendez%2C%200%2C%2C%20El%20Entrego%2C%20Asturias"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-7/"
  },
  {
    "id": "feteas-12046",
    "title": "TEATRO BALUARTE- DELICADAS de Alfredo Sanzol",
    "date": "2026-05-02T18:00:00Z",
    "poster": "/posters/feteas/teatro-baluarte-delicadas-de-alfredo-sanzol-12046.jpg",
    "venue": {
      "name": "CASA DE CULTURA TEODORO CUESTA DE MIERES",
      "address": "CL. MANUEL LLANEZA, 8",
      "city": "MIERES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20TEODORO%20CUESTA%20DE%20MIERES%2C%20CL.%20MANUEL%20LLANEZA%2C%208%2C%20MIERES%2C%20MIERES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-baluarte-delicadas-de-alfredo-sanzol-3/"
  },
  {
    "id": "feteas-12087",
    "title": "Santa Bárbara Teatro &#8211; «CAMÍN DE SANTIAGO»",
    "date": "2026-05-04T17:00:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-camin-de-santiago-12087.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-camin-de-santiago-4/"
  },
  {
    "id": "feteas-12091",
    "title": "Alcuerdu amistosu",
    "date": "2026-05-04T17:00:00Z",
    "poster": "/posters/feteas/alcuerdu-amistosu-12091.jpg",
    "venue": {
      "name": "cine Felgueroso",
      "address": "c/ Dorado, 28",
      "city": "Sama",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=cine%20Felgueroso%2C%20c%2F%20Dorado%2C%2028%2C%20Sama%2C%20Asturias"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/alcuerdu-amistosu/"
  },
  {
    "id": "feteas-12012",
    "title": "«COMUNICANDO» en La Felguera",
    "date": "2026-05-04T17:30:00Z",
    "poster": "/posters/feteas/comunicando-en-la-felguera-12012.jpg",
    "venue": {
      "name": "NUEVO TEATRO LA FELGUERA",
      "address": "C/INMOBILIARIA SETSA",
      "city": "LANGREO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=NUEVO%20TEATRO%20LA%20FELGUERA%2C%20C%2FINMOBILIARIA%20SETSA%2C%20LANGREO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/comunicando-en-la-felguera/"
  },
  {
    "id": "feteas-11400",
    "title": "La fonda",
    "date": "2026-05-07T17:00:00Z",
    "poster": "/posters/feteas/la-fonda-11400.jpg",
    "venue": {
      "name": "TEATRO CARMEN de Aller",
      "address": "MOREDA ASTURIAS",
      "city": "MOREDA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CARMEN%20de%20Aller%2C%20MOREDA%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/la-fonda-17/"
  },
  {
    "id": "feteas-11159",
    "title": "TARTUFO PLAY de Teatro Kumen en Soto del Barco",
    "date": "2026-05-08T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-soto-del-barco-11159.jpg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-soto-del-barco/"
  },
  {
    "id": "feteas-11402",
    "title": "Cróniques de Valdesoto",
    "date": "2026-05-09T15:00:00Z",
    "poster": "/posters/feteas/croniques-de-valdesoto-11402.jpg",
    "venue": {
      "name": "Poreñu",
      "address": "Villaviciosa Asturias",
      "city": "Villaviciosa",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Pore%C3%B1u%2C%20Villaviciosa%2C%20Asturias"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/croniques-de-valdesoto-8/"
  },
  {
    "id": "feteas-11331",
    "title": "TARTUFO PLAY de Teatro Kumen en el Teatro Municipal de San Martin del Rey Aurelio",
    "date": "2026-05-09T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-el-teatro-municipal-de-san-martin-del--11331.jpg",
    "venue": {
      "name": "TEATRO MUNICIPAL DE SAN MARTIN DEL REY AURELIO",
      "address": "SAN MARTIN DEL REY AURELIO",
      "city": "SAN MARTIN DEL REY AURELIO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20MUNICIPAL%20DE%20SAN%20MARTIN%20DEL%20REY%20AURELIO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-el-teatro-municipal-de-san-martin-del-rey-aurelio/"
  },
  {
    "id": "feteas-11202",
    "title": "AL LORO",
    "date": "2026-05-11T17:00:00Z",
    "poster": "/posters/feteas/al-loro-11202.png",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-5/"
  },
  {
    "id": "feteas-12121",
    "title": "TEATRO BALUARTE &#8211; La calle del infierno de Antonio Onetti",
    "date": "2026-05-14T17:00:00Z",
    "poster": "/posters/feteas/teatro-baluarte-8211-la-calle-del-infierno-de-antonio-onetti-12121.png",
    "venue": {
      "name": "CMI EL COTO",
      "address": "33210 ASTURIAS ASTURIAS",
      "city": "ASTURIAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CMI%20EL%20COTO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-baluarte-la-calle-del-infierno-antonio-onetti/"
  },
  {
    "id": "feteas-11649",
    "title": "QUE ME PASA DOCTO?",
    "date": "2026-05-14T22:00:00Z",
    "poster": "/posters/feteas/que-me-pasa-docto-11649.jpeg",
    "venue": {
      "name": "PARRES",
      "address": "ARRIONDAS Asturias",
      "city": "ARRIONDAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=PARRES%2C%20ARRIONDAS%2C%20Asturias"
    },
    "allDay": true,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-me-pasa-docto-4/"
  },
  {
    "id": "feteas-11761",
    "title": "¨VAYA PAR DE DOS¨ TEATRO PADRE COL TEATRO SOTO DEL BARCO",
    "date": "2026-05-15T17:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-dos-teatro-padre-col-teatro-soto-del-barco-11761.jpg",
    "venue": {
      "name": "teatro soto del barco",
      "address": "barco",
      "city": "barco",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=teatro%20soto%20del%20barco"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/%c2%a8vaya-par-de-dos%c2%a8-teatro-padre-col-teatro-soto-del-barco/"
  },
  {
    "id": "feteas-12141",
    "title": "Santa Bárbara Teatro &#8211; «CAMÍN DE SANTIAGO»",
    "date": "2026-05-15T18:00:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-camin-de-santiago-12141.jpg",
    "venue": {
      "name": "CASA DE CULTURA JUAN SELGAS",
      "address": "C/ JUAN ANTONIO BRAVO",
      "city": "CUDILLERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20JUAN%20SELGAS%2C%20C%2F%20JUAN%20ANTONIO%20BRAVO%2C%20CUDILLERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-camin-de-santiago-5/"
  },
  {
    "id": "feteas-11655",
    "title": "QUE ME PASA DOCTO?",
    "date": "2026-05-15T22:00:00Z",
    "poster": "/posters/feteas/que-me-pasa-docto-11655.jpeg",
    "venue": {
      "name": "AMBÁS",
      "address": "CARREÑO",
      "city": "CARREÑO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AMB%C3%81S%2C%20CARRE%C3%91O"
    },
    "allDay": true,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-me-pasa-docto-6/"
  },
  {
    "id": "feteas-12128",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en EL ENTREGO",
    "date": "2026-05-16T18:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-el-entrego-12128.png",
    "venue": {
      "name": "TEATRO MUNICIPAL NUBERU",
      "address": "CL. SATURNINO MENÉNDEZ",
      "city": "EL ENTREGO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20MUNICIPAL%20NUBERU%2C%20CL.%20SATURNINO%20MEN%C3%89NDEZ%2C%20EL%20ENTREGO%2C%20SAN%20MART%C3%8DN%20DEL%20REY%20AUREIO"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-el-entrego/"
  },
  {
    "id": "feteas-11161",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Gijón Sur",
    "date": "2026-05-21T17:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-gijon-sur-11161.jpg",
    "venue": {
      "name": "CMI GIJON SUR (PUMARIN)",
      "address": "PUMARIN",
      "city": "PUMARIN",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CMI%20GIJON%20SUR%20(PUMARIN)"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-gijon-sur/"
  },
  {
    "id": "feteas-12197",
    "title": "Los colores del miedo",
    "date": "2026-05-22T17:30:00Z",
    "poster": "/posters/feteas/los-colores-del-miedo-12197.jpg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "Maliayo Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-colores-del-miedo-9/"
  },
  {
    "id": "feteas-11984",
    "title": "VAYA PAR DE SINVERGÜENZAS",
    "date": "2026-05-22T18:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-sinverguenzas-11984.jpeg",
    "venue": {
      "name": "AVV COVADONGA Antiguo CINE DE ROCES Gijon",
      "address": "C/ Fontaneros",
      "city": "Gijon",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AVV%20COVADONGA%20Antiguo%20CINE%20DE%20ROCES%20Gijon%2C%20C%2F%20Fontaneros%2C%20Gijon%2C%20Asturias"
    },
    "allDay": false,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vaya-par-de-sinverguenzas-3/"
  },
  {
    "id": "feteas-11362",
    "title": "RADIO CARBAYÍN",
    "date": "2026-05-22T19:30:00Z",
    "poster": "/posters/feteas/radio-carbayin-11362.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE CUDILLERO",
      "address": "CULTURA DE CUDILLERO",
      "city": "CULTURA DE CUDILLERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20CUDILLERO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/radio-carbayin-3/"
  },
  {
    "id": "feteas-12204",
    "title": "Conceyu Familiar",
    "date": "2026-05-25T17:00:00Z",
    "poster": "/posters/feteas/conceyu-familiar-12204.jpg",
    "venue": {
      "name": "CASA CULTURA DE LOS CANAPÉS AVILÉS",
      "address": "LOS CANAPÉS AVILÉS",
      "city": "LOS CANAPÉS AVILÉS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20LOS%20CANAP%C3%89S%20AVIL%C3%89S"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/conceyu-familiar-2/"
  },
  {
    "id": "feteas-11164",
    "title": "VECINOS de Teatro Kumen en Casa de Cultura de Cudillero",
    "date": "2026-05-29T17:00:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-casa-de-cultura-de-cudillero-11164.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE CUDILLERO",
      "address": "CULTURA DE CUDILLERO",
      "city": "CULTURA DE CUDILLERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20CUDILLERO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-de-teatro-kumen-en-casa-de-cultura-de-cudillero/"
  },
  {
    "id": "feteas-11658",
    "title": "VAYA PAR DE SINVERGÜENZAS",
    "date": "2026-05-30T17:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-sinverguenzas-11658.jpeg",
    "venue": {
      "name": "LA FERRERA",
      "address": "POLA DE SIEROAS Asturias",
      "city": "POLA DE SIEROAS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=LA%20FERRERA%2C%20POLA%20DE%20SIEROAS%2C%20Asturias"
    },
    "allDay": false,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vaya-par-de-sinverguenzas/"
  },
  {
    "id": "feteas-11644",
    "title": "EL REGRESO DEL BARANDO",
    "date": "2026-05-30T17:30:00Z",
    "poster": "/posters/feteas/el-regreso-del-barando-11644.jpg",
    "venue": {
      "name": "ALBANDI CARREÑO",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ALBANDI%20CARRE%C3%91O"
    },
    "allDay": false,
    "company": "GARAPIELLU",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/el-regreso-del-barando/"
  },
  {
    "id": "feteas-11205",
    "title": "LA FONDA",
    "date": "2026-06-05T17:00:00Z",
    "poster": "/posters/feteas/la-fonda-11205.jpg",
    "venue": {
      "name": "CASA CULTURA DE CUDILLERO",
      "address": "CUDILLERO ASTURIAS",
      "city": "CUDILLERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20CUDILLERO%2C%20CUDILLERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/la-fonda-14/"
  },
  {
    "id": "feteas-12018",
    "title": "«AGUA DE SOTO» SOTO DEL BARCO",
    "date": "2026-06-05T17:00:00Z",
    "poster": "/posters/feteas/agua-de-soto-soto-del-barco-12018.jpeg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/agua-de-soto-soto-del-barco/"
  },
  {
    "id": "feteas-12237",
    "title": "Tarde de Sainetes",
    "date": "2026-06-05T17:00:00Z",
    "poster": "/posters/feteas/tarde-de-sainetes-12237.jpg",
    "venue": {
      "name": "proyecto hombre",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=proyecto%20hombre"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tarde-de-sainetes/"
  },
  {
    "id": "feteas-12220",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en MANZANARES, Ciudad Real",
    "date": "2026-06-06T18:30:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-manzanares-ciudad-real-12220.jpg",
    "venue": {
      "name": "Gran Teatro Manzanares",
      "address": "PZ. DEL GRAN TEATRO",
      "city": "MANZANARES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gran%20Teatro%20Manzanares%2C%20PZ.%20DEL%20GRAN%20TEATRO%2C%20MANZANARES%2C%20CIUDAD%20REAL"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-manzanares-ciudad-real-2/"
  },
  {
    "id": "feteas-11168",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Los Canapes de Aviles",
    "date": "2026-06-08T17:30:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-los-canapes-de-aviles-11168.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-los-canapes-de-aviles/"
  },
  {
    "id": "feteas-12223",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en el C.M.I. ATENEO DE LA CALZADA",
    "date": "2026-06-11T17:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-el-c-m-i-ateneo-de-la-calzada-12223.jpg",
    "venue": {
      "name": "ATENEO DE LA CALZADA &#8211; GIJÓN",
      "address": "CL. Ateneo Obrero de la Calzada",
      "city": "GIJÓN",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=ATENEO%20DE%20LA%20CALZADA%20%26%238211%3B%20GIJ%C3%93N%2C%20CL.%20Ateneo%20Obrero%20de%20la%20Calzada%2C%20GIJ%C3%93N%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/12223/"
  },
  {
    "id": "feteas-12232",
    "title": "«PORQUE LO DIGO YO» de TEATRO EL HÓRREO en LUANCO",
    "date": "2026-06-12T17:00:00Z",
    "poster": "/posters/feteas/porque-lo-digo-yo-de-teatro-el-horreo-en-luanco-12232.png",
    "venue": {
      "name": "IES CRISTO DEL SOCORRO",
      "address": "PZ. VILLA S/N",
      "city": "LUANCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=IES%20CRISTO%20DEL%20SOCORRO%2C%20PZ.%20VILLA%20S%2FN%2C%20LUANCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "TEATRO EL HÓRREO",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/porque-lo-digo-yo-de-teatro-el-horreo-en-luanco/"
  },
  {
    "id": "feteas-11130",
    "title": "«CIAO AMORE O ADIÓS BABAYO» de G.T. Selena en CUDILLERO",
    "date": "2026-06-12T18:00:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-de-g-t-selena-en-cudillero-11130.jpg",
    "venue": {
      "name": "CASA DE CULTURA JUAN SELGAS",
      "address": "C/ JUAN ANTONIO BRAVO",
      "city": "CUDILLERO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20JUAN%20SELGAS%2C%20C%2F%20JUAN%20ANTONIO%20BRAVO%2C%20CUDILLERO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-4/"
  },
  {
    "id": "feteas-12268",
    "title": "Santa Bárbara Teatro &#8211; «SAINETES»",
    "date": "2026-06-13T16:30:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-sainetes-12268.jpg",
    "venue": {
      "name": "Escuelas de San Tirso de Candamo",
      "address": "Carretera AS-38 - 7",
      "city": "Candamo",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Escuelas%20de%20San%20Tirso%20de%20Candamo%2C%20Carretera%20AS-38%20-%207%2C%20Candamo%2C%20Asturias"
    },
    "allDay": false,
    "company": "Santa Bárbara Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-sainetes/"
  },
  {
    "id": "feteas-12147",
    "title": "VECINOS de Teatro Kumen en Teatro Municipal de Tomelloso",
    "date": "2026-06-13T18:00:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-teatro-municipal-de-tomelloso-12147.jpg",
    "venue": {
      "name": "TEATRO MUNICIPAL DE TOMELLOSOS",
      "address": "TOMELLOSOS",
      "city": "TOMELLOSOS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20MUNICIPAL%20DE%20TOMELLOSOS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecisnos-en-teatro-municipal-de-tomelloso/"
  },
  {
    "id": "feteas-12124",
    "title": "TEATRO BALUARTE &#8211; La calle del infierno de Antonio Onetti",
    "date": "2026-06-13T18:30:00Z",
    "poster": "/posters/feteas/teatro-baluarte-8211-la-calle-del-infierno-de-antonio-onetti-12124.png",
    "venue": {
      "name": "Gran Teatro Manzanares",
      "address": "PZ. DEL GRAN TEATRO",
      "city": "MANZANARES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Gran%20Teatro%20Manzanares%2C%20PZ.%20DEL%20GRAN%20TEATRO%2C%20MANZANARES%2C%20CIUDAD%20REAL"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-baluarte-la-calle-del-infierno-antonio-onetti-2/"
  },
  {
    "id": "feteas-12150",
    "title": "VECINOS de Teatro Kumen en Teatro Municipal de Manzanares",
    "date": "2026-06-14T06:00:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-teatro-municipal-de-manzanares-12150.jpg",
    "venue": {
      "name": "TEATRO MUNICIPAL DE MANZANARES",
      "address": "MANZANARES",
      "city": "MANZANARES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20MUNICIPAL%20DE%20MANZANARES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-en-teatro-municipal-de-manzanares/"
  },
  {
    "id": "feteas-11364",
    "title": "TEATRO CARBAYIN: «LA MAXA DE LA PRIMER VEZ»",
    "date": "2026-06-15T19:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-la-maxa-de-la-primer-vez-11364.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-la-maxa-de-la-primer-vez-3/"
  },
  {
    "id": "feteas-12240",
    "title": "AL LORO",
    "date": "2026-06-16T17:00:00Z",
    "poster": "/posters/feteas/al-loro-12240.png",
    "venue": {
      "name": "CASA DE CULTURA TEODORO CUESTA DE MIERES",
      "address": "CL. MANUEL LLANEZA, 8",
      "city": "MIERES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20TEODORO%20CUESTA%20DE%20MIERES%2C%20CL.%20MANUEL%20LLANEZA%2C%208%2C%20MIERES%2C%20MIERES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-11/"
  },
  {
    "id": "feteas-12332",
    "title": "VAYA PAR DE DOS",
    "date": "2026-06-17T17:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-dos-12332.jpg",
    "venue": {
      "name": "CENTRO SOLCIAL EL ALBA LADA &#8211; AYTO LANGREO",
      "address": "LADA",
      "city": "LANGREO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20SOLCIAL%20EL%20ALBA%20LADA%20%26%238211%3B%20AYTO%20LANGREO%2C%20LADA%2C%20LANGREO"
    },
    "allDay": false,
    "company": "PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vaya-par-de-dos/"
  },
  {
    "id": "feteas-11789",
    "title": "AL LORO",
    "date": "2026-06-19T17:00:00Z",
    "poster": "/posters/feteas/al-loro-11789.jpg",
    "venue": {
      "name": "CASA CULTURA DE LUANCO",
      "address": "LUANCO",
      "city": "LUANCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20LUANCO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-9/"
  },
  {
    "id": "feteas-11662",
    "title": "QUE ME PASA DOCTO?",
    "date": "2026-06-19T22:00:00Z",
    "poster": "/posters/feteas/que-me-pasa-docto-11662.jpeg",
    "venue": {
      "name": "POLA DEL PINO",
      "address": "ALLER Asturias",
      "city": "ALLER",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=POLA%20DEL%20PINO%2C%20ALLER%2C%20Asturias"
    },
    "allDay": true,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-me-pasa-docto-5/"
  },
  {
    "id": "feteas-12293",
    "title": "HAY XENTE PA TOO",
    "date": "2026-06-20T17:00:00Z",
    "poster": "/posters/feteas/hay-xente-pa-too-12293.png",
    "venue": {
      "name": "PILLARNO",
      "address": "ANEXO A LA IGLESIA DE PILLARNO",
      "city": "PILLARNO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=PILLARNO%2C%20ANEXO%20A%20LA%20IGLESIA%20DE%20PILLARNO%2C%20PILLARNO%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/hay-xente-pa-too-6/"
  },
  {
    "id": "feteas-12338",
    "title": "DE MACHO A DIVA EN CANGAS DEL NARCEA",
    "date": "2026-06-27T17:00:00Z",
    "poster": "/posters/feteas/de-macho-a-diva-en-cangas-del-narcea-12338.jpeg",
    "venue": {
      "name": "TEATRO TORENO de Cangas de Narcea",
      "address": "CANGAS DE NARCEA ASTURIAS",
      "city": "CANGAS DE NARCEA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20TORENO%20de%20Cangas%20de%20Narcea%2C%20CANGAS%20DE%20NARCEA%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "LA FACTORÍA XPERIENCE",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/de-macho-a-diva-en-cangas-del-narcea/"
  },
  {
    "id": "feteas-11366",
    "title": "TEATRO CARBAYIN: «LA MAXA DE LA PRIMER VEZ»",
    "date": "2026-07-06T20:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-la-maxa-de-la-primer-vez-11366.jpg",
    "venue": {
      "name": "CASA CULTURA DE TAPIA DE CASARIEGO",
      "address": "TAPIA DE CASARIEGO",
      "city": "TAPIA DE CASARIEGO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20TAPIA%20DE%20CASARIEGO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-la-maxa-de-la-primer-vez-copy/"
  },
  {
    "id": "feteas-11320",
    "title": "«CIAO AMORE O ADIÓS BABAYO» de G.T. Selena en AGONES",
    "date": "2026-07-11T17:30:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-de-g-t-selena-en-agones-11320.jpg",
    "venue": {
      "name": "AGONES",
      "address": "AGONES ASTURIAS",
      "city": "AGONES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AGONES%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-5/"
  },
  {
    "id": "feteas-11207",
    "title": "CRÓNIQUES DE VALDESOTO",
    "date": "2026-07-13T18:00:00Z",
    "poster": "/posters/feteas/croniques-de-valdesoto-11207.jpg",
    "venue": {
      "name": "Grao",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Grao"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/croniques-de-valdesoto-6/"
  },
  {
    "id": "feteas-11170",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Grado",
    "date": "2026-07-14T18:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-grado-11170.jpg",
    "venue": {
      "name": "TEATRO DE GRADO",
      "address": "GRADO",
      "city": "GRADO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20DE%20GRADO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-grado/"
  },
  {
    "id": "feteas-12275",
    "title": "Santa Bárbara Teatro: «QUIERO SER ARTISTA»",
    "date": "2026-07-15T21:00:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-quiero-ser-artista-12275.jpg",
    "venue": {
      "name": "NUEVO TEATRO DE GRADO",
      "address": "GRADO",
      "city": "GRADO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=NUEVO%20TEATRO%20DE%20GRADO"
    },
    "allDay": false,
    "company": "Santa Bárbara Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-quiero-ser-artista-2/"
  },
  {
    "id": "feteas-11173",
    "title": "TARTUFO PLAY de Teatro Kumen en el Corral de Comedias de Los Robres(Aragón)",
    "date": "2026-07-18T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-el-corral-de-comedias-de-los-robres-ar-11173.jpg",
    "venue": {
      "name": "CORRAL DE COMEDIAS DE LOS ROBRES",
      "address": "COMEDIAS DE LOS ROBRES",
      "city": "COMEDIAS DE LOS ROBRES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CORRAL%20DE%20COMEDIAS%20DE%20LOS%20ROBRES"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-el-corral-de-comedias-de-los-robresaragon/"
  },
  {
    "id": "feteas-12094",
    "title": "LA FONDA",
    "date": "2026-07-23T18:00:00Z",
    "poster": "/posters/feteas/la-fonda-12094.jpg",
    "venue": {
      "name": "TEATRO FILARMONICA DE OVIEDO",
      "address": "OVIEDO",
      "city": "OVIEDO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FILARMONICA%20DE%20OVIEDO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/la-fonda-18/"
  },
  {
    "id": "feteas-11628",
    "title": "«CIAO AMORE O ADIÓS BABAYO» de G.T. Selena en el Teatro Filarmónica",
    "date": "2026-08-04T18:00:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-de-g-t-selena-en-el-teatro-filarmonica-11628.jpg",
    "venue": {
      "name": "TEATRO FILARMONICA DE OVIEDO",
      "address": "OVIEDO",
      "city": "OVIEDO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FILARMONICA%20DE%20OVIEDO"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-de-g-t-selena-en-el-teatro-filarmonica/"
  },
  {
    "id": "feteas-11770",
    "title": "´mÁS P´ALLÁ QUE P´ACA¨ TEATRO PADRE COLL TEATRO FILARMÓNICA OVIEDO",
    "date": "2026-08-06T18:00:00Z",
    "poster": "/posters/feteas/mas-p-alla-que-p-aca-teatro-padre-coll-teatro-filarmonica-oviedo-11770.jpg",
    "venue": {
      "name": "TEATRO FILARMONICA DE OVIEDO",
      "address": "OVIEDO",
      "city": "OVIEDO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FILARMONICA%20DE%20OVIEDO"
    },
    "allDay": false,
    "company": "TEATRO PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/mas-palla-que-paca%c2%a8-teatro-padre-coll-teatro-filarmonica-oviedo/"
  },
  {
    "id": "feteas-12153",
    "title": "TARTUFO PLAY en A´Coruña",
    "date": "2026-08-08T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-en-a-coruna-12153.jpg",
    "venue": {
      "name": "TEATRO COLON de A´Coruña",
      "address": "Asturias",
      "city": "Asturias",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20COLON%20de%20A%C2%B4Coru%C3%B1a"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-en-acoruna/"
  },
  {
    "id": "feteas-12278",
    "title": "Santa Bárbara Teatro &#8211; «CAMÍN DE SANTIAGO»",
    "date": "2026-08-11T17:00:00Z",
    "poster": "/posters/feteas/santa-barbara-teatro-8211-camin-de-santiago-12278.jpg",
    "venue": {
      "name": "TEATRO FILARMONICA DE OVIEDO",
      "address": "OVIEDO",
      "city": "OVIEDO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FILARMONICA%20DE%20OVIEDO"
    },
    "allDay": false,
    "company": "Santa Bárbara Teatro",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/santa-barbara-teatro-camin-de-santiago-6/"
  },
  {
    "id": "feteas-11214",
    "title": "«AGUA DE SOTO» de G.T. Selena en el Teatro Prendes de Candás",
    "date": "2026-08-18T18:00:00Z",
    "poster": "/posters/feteas/agua-de-soto-de-g-t-selena-en-el-teatro-prendes-de-candas-11214.jpeg",
    "venue": {
      "name": "TEATRO PRENDES",
      "address": "AVDA FEROCARRIL",
      "city": "CANDÁS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20PRENDES%2C%20AVDA%20FEROCARRIL%2C%20CAND%C3%81S%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/agua-de-soto-3/"
  },
  {
    "id": "feteas-11336",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Teatro Filarmonica de Oviedo",
    "date": "2026-08-27T18:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-teatro-filarmonica-de-o-11336.jpg",
    "venue": {
      "name": "TEATRO FILARMONICA DE OVIEDO",
      "address": "OVIEDO",
      "city": "OVIEDO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FILARMONICA%20DE%20OVIEDO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-teatro-filarmonica-de-oviedo/"
  },
  {
    "id": "feteas-11380",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Pravia",
    "date": "2026-08-28T18:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-pravia-11380.jpg",
    "venue": {
      "name": "AUDITORIO DE PRAVIA",
      "address": "PRAVIA",
      "city": "PRAVIA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AUDITORIO%20DE%20PRAVIA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-pravia/"
  },
  {
    "id": "feteas-11323",
    "title": "«AGUA DE SOTO» de G.T. Selena en PRAVIA",
    "date": "2026-08-30T18:00:00Z",
    "poster": "/posters/feteas/agua-de-soto-de-g-t-selena-en-pravia-11323.jpeg",
    "venue": {
      "name": "CASA CULTURA DE PRAVIA",
      "address": "PRAVIA ASTURIAS",
      "city": "PRAVIA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20PRAVIA%2C%20PRAVIA%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/agua-de-soto-4/"
  },
  {
    "id": "feteas-11176",
    "title": "TARTUFO PLAY de Teatro Kumen en Valladolid",
    "date": "2026-09-06T18:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-valladolid-11176.jpg",
    "venue": {
      "name": "VALLADOLID",
      "address": "Valladolid",
      "city": "Valladolid",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=VALLADOLID"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-valladolid/"
  },
  {
    "id": "feteas-12163",
    "title": "LOS CUERNOS DE DON FRIOLERA de teatro kumen en Auditorio de Luarca",
    "date": "2026-09-08T18:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-auditorio-de-luarca-12163.jpg",
    "venue": {
      "name": "AUDUTORIO DE LUARCA",
      "address": "LUARCA",
      "city": "LUARCA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=AUDUTORIO%20DE%20LUARCA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-auditorio-de-luarca/"
  },
  {
    "id": "feteas-11179",
    "title": "SOLILOQUIO DE GRILLOS de Teatro Kumen en Pola de Laviana",
    "date": "2026-09-25T17:30:00Z",
    "poster": "/posters/feteas/soliloquio-de-grillos-de-teatro-kumen-en-pola-de-laviana-11179.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/soliloquio-de-grillos-de-teatro-kumen-en-pola-de-laviana/"
  },
  {
    "id": "feteas-11742",
    "title": "EL REGRESO DEL BARANDO",
    "date": "2026-09-25T17:30:00Z",
    "poster": "/posters/feteas/el-regreso-del-barando-11742.jpg",
    "venue": {
      "name": "TEATRO CLARÍN DE SOTO DEL BARCO",
      "address": "Plaza de Herminio de la Noval, 2",
      "city": "SOTO DEL BARCO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CLAR%C3%8DN%20DE%20SOTO%20DEL%20BARCO%2C%20Plaza%20de%20Herminio%20de%20la%20Noval%2C%202%2C%20SOTO%20DEL%20BARCO%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "GARAPIELLU",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/el-regreso-del-barando-2/"
  },
  {
    "id": "feteas-12166",
    "title": "VECINOS de Teatro Kumen en La Robla",
    "date": "2026-09-26T18:00:00Z",
    "poster": "/posters/feteas/vecinos-de-teatro-kumen-en-la-robla-12166.jpg",
    "venue": {
      "name": "CASA MUNICIPAL DE CULTURA DE LA ROBLA",
      "address": "CULTURA DE LA ROBLA",
      "city": "CULTURA DE LA ROBLA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20MUNICIPAL%20DE%20CULTURA%20DE%20LA%20ROBLA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vecinos-de-teatro-kumen-en-la-robla/"
  },
  {
    "id": "feteas-11181",
    "title": "¡QUE BROMA DE FUNCIÓN! de Teatro Kumen en teatro José León Delestal",
    "date": "2026-10-03T18:00:00Z",
    "poster": "/posters/feteas/que-broma-de-funcion-de-teatro-kumen-en-teatro-jose-leon-delestal-11181.jpg",
    "venue": {
      "name": "Teatro José León Delestal",
      "address": "teatro José León Delestal",
      "city": "teatro José León Delestal",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Teatro%20Jos%C3%A9%20Le%C3%B3n%20Delestal"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-broma-de-funcion-de-teatro-kumen-en-teatro-jose-leon-delestal/"
  },
  {
    "id": "feteas-11368",
    "title": "TEATRO CARBAYIN: «EL DISPARATE»",
    "date": "2026-10-03T19:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-el-disparate-11368.jpg",
    "venue": {
      "name": "Santa Cruz de Llanera",
      "address": "Llanera",
      "city": "Llanera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Santa%20Cruz%20de%20Llanera"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-el-disparate-copy/"
  },
  {
    "id": "feteas-12169",
    "title": "¡QUE BROMA DE FUNCION! de Teatro Kumen en Navia",
    "date": "2026-10-09T18:00:00Z",
    "poster": "/posters/feteas/que-broma-de-funcion-de-teatro-kumen-en-navia-12169.jpg",
    "venue": {
      "name": "TEATRO FANTASIO de Navia",
      "address": "Navia",
      "city": "Navia",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20FANTASIO%20de%20Navia"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-broma-de-funcion-de-teatro-kumen-en-navia/"
  },
  {
    "id": "feteas-11341",
    "title": "¡QUE BROMA DE FUNCIÓN! de Teatro Kumen en Muros del Nalón",
    "date": "2026-10-16T17:00:00Z",
    "poster": "/posters/feteas/que-broma-de-funcion-de-teatro-kumen-en-muros-del-nalon-11341.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE MUROS DEL NALON",
      "address": "CULTURA DE MUROS DEL NALON",
      "city": "CULTURA DE MUROS DEL NALON",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20MUROS%20DEL%20NALON"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-broma-de-funcion-de-teatro-kumen-en-muros-del-nalon/"
  },
  {
    "id": "feteas-11344",
    "title": "LOS CUERNOS DE DON FRIOLERA de Teatro Kumen en Teatro Prendes (Candas)",
    "date": "2026-10-17T18:00:00Z",
    "poster": "/posters/feteas/los-cuernos-de-don-friolera-de-teatro-kumen-en-teatro-prendes-candas-11344.jpg",
    "venue": {
      "name": "TEATRO PRENDES de Candás",
      "address": "Candás",
      "city": "Candás",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20PRENDES%20de%20Cand%C3%A1s"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/los-cuernos-de-don-friolera-de-teatro-kumen-en-teatro-prendes-candas/"
  },
  {
    "id": "feteas-11376",
    "title": "TEATRO CARBAYIN: «LA MAXA DE LA PRIMER VEZ»",
    "date": "2026-10-17T20:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-la-maxa-de-la-primer-vez-11376.jpg",
    "venue": {
      "name": "TEATRO VITAL AZA de Pola Lena",
      "address": "POLA LENA ASTURIAS",
      "city": "POLA LENA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20VITAL%20AZA%20de%20Pola%20Lena%2C%20POLA%20LENA%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-la-maxa-de-la-primer-vez-4/"
  },
  {
    "id": "feteas-11133",
    "title": "«Agua de Soto» de G.T. Selena en POLA DE LAVIANA",
    "date": "2026-10-23T17:00:00Z",
    "poster": "/posters/feteas/agua-de-soto-de-g-t-selena-en-pola-de-laviana-11133.jpeg",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/agua-de-soto/"
  },
  {
    "id": "feteas-11184",
    "title": "TARTUFO PLAY de Teatro Kumen en el Centro Cultural La Habana de Posada de Llanera",
    "date": "2026-10-24T17:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-el-centro-cultural-la-habana-de-posada-11184.jpg",
    "venue": {
      "name": "CENTRO CULTURAL LA HABANA",
      "address": "el Centro Cultural La Habana de Posada de Llanera",
      "city": "el Centro Cultural La Habana de Posada de Llanera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LA%20HABANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-el-centro-cultural-la-habana-de-posada-de-llanera/"
  },
  {
    "id": "feteas-11775",
    "title": "´VAYA PAR DE DOS¨ TEATRO PADRE COLL CASA DE CULTURA DE LAVIANA",
    "date": "2026-11-06T18:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-dos-teatro-padre-coll-casa-de-cultura-de-laviana-11775.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE LAVIANA",
      "address": "CULTURA DE LAVIANA",
      "city": "CULTURA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20LAVIANA"
    },
    "allDay": false,
    "company": "TEATRO PADRE COLL",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vaya-par-de-dos%c2%a8-teatro-padre-coll-casa-de-cultura-de-laviana/"
  },
  {
    "id": "feteas-12176",
    "title": "TARTUFO PLAY de Teatro Kumen en Tapia de Casariego",
    "date": "2026-11-07T19:00:00Z",
    "poster": "/posters/feteas/tartufo-play-de-teatro-kumen-en-tapia-de-casariego-12176.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE TAPIA DE CASARIEGO",
      "address": "CULTURA DE TAPIA DE CASARIEGO",
      "city": "CULTURA DE TAPIA DE CASARIEGO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20TAPIA%20DE%20CASARIEGO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/tartufo-play-de-teatro-kumen-en-tapia-de-casariego/"
  },
  {
    "id": "feteas-11223",
    "title": "¡QUÉ BROMA DE FUNCIÓN! de Teatro Kumen en Pola Lena",
    "date": "2026-11-08T18:00:00Z",
    "poster": "/posters/feteas/que-broma-de-funcion-de-teatro-kumen-en-pola-lena-11223.jpg",
    "venue": {
      "name": "teatro VITAL AZA",
      "address": "Pola Lena",
      "city": "Pola Lena",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=teatro%20VITAL%20AZA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-broma-de-funcion/"
  },
  {
    "id": "feteas-11136",
    "title": "«AGUA DE SOTO» de G.T. Selena en LOS CANAPÉS de Avilés",
    "date": "2026-11-09T17:00:00Z",
    "poster": "/posters/feteas/agua-de-soto-de-g-t-selena-en-los-canapes-de-aviles-11136.jpeg",
    "venue": {
      "name": "CENTRO CULTURAL LOS CANAPES de Aviles",
      "address": "AVILES ASTURIAS",
      "city": "AVILES",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CENTRO%20CULTURAL%20LOS%20CANAPES%20de%20Aviles%2C%20AVILES%2C%20ASTURIAS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/agua-de-soto-2/"
  },
  {
    "id": "feteas-11378",
    "title": "TEATRO CARBAYIN: «LA MAXA DE LA PRIMER VEZ»",
    "date": "2026-11-19T19:00:00Z",
    "poster": "/posters/feteas/teatro-carbayin-la-maxa-de-la-primer-vez-11378.jpg",
    "venue": {
      "name": "TEATRO CARMEN de Aller",
      "address": "MOREDA ASTURIAS",
      "city": "MOREDA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=TEATRO%20CARMEN%20de%20Aller%2C%20MOREDA%2C%20ASTURIAS"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/teatro-carbayin-la-maxa-de-la-primer-vez-5/"
  },
  {
    "id": "feteas-11666",
    "title": "VAYA PAR DE SINVERGÜENZAS",
    "date": "2026-11-19T23:00:00Z",
    "poster": "/posters/feteas/vaya-par-de-sinverguenzas-11666.jpeg",
    "venue": {
      "name": "POLA DE LA VIANA",
      "address": "POLA DE LA VIANA Asturias",
      "city": "POLA DE LA VIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=POLA%20DE%20LA%20VIANA%2C%20POLA%20DE%20LA%20VIANA%2C%20Asturias"
    },
    "allDay": true,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/vaya-par-de-sinverguenzas-2/"
  },
  {
    "id": "feteas-11225",
    "title": "¡QUÉ BROMA DE FUNCIÓN! de Teatro Kumen en Corvera",
    "date": "2026-11-20T18:00:00Z",
    "poster": "/posters/feteas/que-broma-de-funcion-de-teatro-kumen-en-corvera-11225.jpg",
    "venue": {
      "name": "LA LECHERA de Corvera",
      "address": "Corvera",
      "city": "Corvera",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=LA%20LECHERA%20de%20Corvera"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/que-broma-de-funcion-2/"
  },
  {
    "id": "feteas-12034",
    "title": "VAYA PAR DE SINVERGÜENZAS",
    "date": "2026-11-21T18:30:00Z",
    "poster": "/posters/feteas/vaya-par-de-sinverguenzas-12034.jpeg",
    "venue": {
      "name": "EL BERRON CENTRO DE JUBILADOS",
      "address": "El BERRON",
      "city": "El BERRON",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=EL%20BERRON%20CENTRO%20DE%20JUBILADOS%2C%20El%20BERRON"
    },
    "allDay": false,
    "company": "La Cruz de Ceares",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/12034/"
  },
  {
    "id": "feteas-12100",
    "title": "AL LORO",
    "date": "2026-11-21T19:30:00Z",
    "poster": "/posters/feteas/al-loro-12100.jpg",
    "venue": {
      "name": "CASA CULTURA DE TAPIA DE CASARIEGO",
      "address": "TAPIA DE CASARIEGO",
      "city": "TAPIA DE CASARIEGO",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20CULTURA%20DE%20TAPIA%20DE%20CASARIEGO"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-10/"
  },
  {
    "id": "feteas-11212",
    "title": "AL LORO",
    "date": "2026-11-27T18:30:00Z",
    "poster": "/posters/feteas/al-loro-11212.png",
    "venue": {
      "name": "CASA DE CULTURA DE POLA DE LAVIANA",
      "address": "CULTURA DE POLA DE LAVIANA",
      "city": "CULTURA DE POLA DE LAVIANA",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20POLA%20DE%20LAVIANA"
    },
    "allDay": false,
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/al-loro-6/"
  },
  {
    "id": "feteas-11411",
    "title": "«CIAO AMORE O ADIÓS BABAYO» de G.T. Selena en Cangas de Onís",
    "date": "2026-12-17T18:00:00Z",
    "poster": "/posters/feteas/ciao-amore-o-adios-babayo-de-g-t-selena-en-cangas-de-onis-11411.jpg",
    "venue": {
      "name": "CASA DE CULTURA DE CANGAS DE ONIS",
      "address": "CULTURA DE CANGAS DE ONIS",
      "city": "CULTURA DE CANGAS DE ONIS",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=CASA%20DE%20CULTURA%20DE%20CANGAS%20DE%20ONIS"
    },
    "allDay": false,
    "company": "SELENA",
    "sourceName": "FETEAS",
    "sourceUrl": "https://feteas.org/actividad/ciao-amore-o-adios-babayo-6/"
  }
] as const satisfies readonly TheatreEvent[];

export default generatedEvents;
