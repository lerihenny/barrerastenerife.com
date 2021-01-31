type Types = {
  name: string;
  value:
    | "flat"
    | "chalet"
    | "country_house"
    | "bungalow"
    | "room"
    | "parking"
    | "shop"
    | "industrial"
    | "office"
    | "land"
    | "storage"
    | "building";
};

export const types: Types[] = [
  {
    name: "Piso",
    value: "flat",
  },
  {
    name: "Casa / Chalet",
    value: "chalet",
  },
  {
    name: "Casa Rústica",
    value: "country_house",
  },
  // {
  //   name: "bungalow",
  //   value: "bungalow",
  // },
  {
    name: "Hotel",
    value: "room",
  },
  {
    name: "Garaje",
    value: "parking",
  },
  {
    name: "Local",
    value: "shop",
  },
  {
    name: "Nave Industrial",
    value: "industrial",
  },
  {
    name: "Oficina",
    value: "office",
  },
  {
    name: "Terreno",
    value: "land",
  },
  {
    name: "Trastero",
    value: "storage",
  },
  {
    name: "Edificio",
    value: "building",
  },
];

type Contracts = {
  name: string;
  value: "rent" | "sell" | "vacation" | "";
};

export const contract: Contracts[] = [
  { name: "Todos", value: "" },
  { name: "Alquiler", value: "rent" },
  { name: "Compra", value: "sell" },
];

type Rooms = {
  name: string;
  value: string;
};

export const rooms: Rooms[] = [
  {
    name: "Todos",
    value: "",
  },
  {
    name: "1",
    value: "1",
  },
  {
    name: "2",
    value: "2",
  },
  {
    name: "3",
    value: "3",
  },
  {
    name: "4",
    value: "4",
  },
  {
    name: "5",
    value: "5",
  },
  {
    name: "6",
    value: "6",
  },
  {
    name: "7",
    value: "7",
  },
  {
    name: "Más de 7",
    value: "10",
  },
];

type Baths = {
  name: string;
  value: string;
};

export const baths: Baths[] = [
  {
    name: "Todos",
    value: "",
  },
  {
    name: "1",
    value: "1",
  },
  {
    name: "2",
    value: "2",
  },
  {
    name: "3",
    value: "3",
  },
  {
    name: "4",
    value: "4",
  },
  {
    name: "5",
    value: "5",
  },
  {
    name: "6",
    value: "6",
  },
  {
    name: "7",
    value: "7",
  },
  {
    name: "Más de 7",
    value: "10",
  },
];

type Sort = {
  name: string;
  value:
    | "creation_date_desc"
    | "creation_date_asc"
    | "price_desc"
    | "price_asc";
};

export const sort_by: Sort[] = [
  {
    name: "Recientes",
    value: "creation_date_desc",
  },
  {
    name: "Precio más alto",
    value: "price_desc",
  },
  {
    name: "Precio más bajo",
    value: "price_asc",
  },
  // {
  //   name: "Antiguas",
  //   value: "creation_date_asc",
  // },
];

export const zones = [
  {
    name: "Todas las zonas",
    value: "",
  },
  {
    name: "Adeje",
    value: "Adeje",
  },
  {
    name: "Alcalá",
    value: "Alcalá",
  },
  {
    name: "Arafo",
    value: "Arafo",
  },
  {
    name: "Arico",
    value: "Arico",
  },
  {
    name: "Amarilla Golf",
    value: "Amarilla Golf",
  },
  {
    name: "Armeñime",
    value: "Armeñime",
  },
  {
    name: "Arona",
    value: "Arona",
  },
  {
    name: "Buenavista del Norte",
    value: "Buenavista del Norte",
  },
  {
    name: "Candelaria",
    value: "Candelaria",
  },
  {
    name: "Chayofa",
    value: "Chayofa",
  },
  {
    name: "El Rosario",
    value: "El Rosario",
  },
  {
    name: "El Sauzal",
    value: "El Sauzal",
  },
  {
    name: "Fasnia",
    value: "Fasnia",
  },
  {
    name: "Garachico",
    value: "Garachico",
  },
  {
    name: "Granadilla de Abona",
    value: "Granadilla de Abona",
  },
  {
    name: "Guía de Isora",
    value: "Guía de Isora",
  },
  {
    name: "Guimar",
    value: "Guimar",
  },
  {
    name: "Icod de los Vinos",
    value: "Icod de los Vinos",
  },
  {
    name: "La Matanza de Acentejo",
    value: "La Matanza de Acentejo",
  },
  {
    name: "La Orotava",
    value: "La Orotava",
  },
  {
    name: "Los Abrigos",
    value: "Los Abrigos",
  },
  {
    name: "Los Realejos",
    value: "Los Realejos",
  },
  {
    name: "Los Silos",
    value: "Los Silos",
  },
  {
    name: "La Tejita",
    value: "La Tejita",
  },
  {
    name: "Norte",
    value: "Norte",
  },
  {
    name: "Otros Islas Canarias",
    value: "Otros Islas Canarias",
  },
  {
    name: "Puerto de la Cruz",
    value: "Puerto de la Cruz",
  },
  {
    name: "Puerto de Santiago",
    value: "Puerto de Santiago",
  },
  {
    name: "San Cristobal de La Laguna",
    value: "San Cristobal de La Laguna",
  },
  {
    name: "San Juan de la Rambla",
    value: "San Juan de la Rambla",
  },
  {
    name: "San Miguel de Abona",
    value: "San Miguel de Abona",
  },
  {
    name: "San Miguel de Tajao",
    value: "San Miguel de Tajao",
  },
  {
    name: "Santa Cruz de Tenerife",
    value: "Santa Cruz de Tenerife",
  },
  {
    name: "Santa Ursula",
    value: "Santa Ursula",
  },
  {
    name: "Santiago del Teide",
    value: "Santiago del Teide",
  },
  {
    name: "Tegueste",
    value: "Tegueste",
  },
  {
    name: "Vilaflor",
    value: "Vilaflor",
  },
];

export const municipios = [
  {
    name: "Todos los municipios",
    value: "",
  },
  {
    value: "Adeje",
    name: "Adeje",
  },
  {
    value: "Arico",
    name: "Arico",
  },
  {
    value: "Arona",
    name: "Arona",
  },
  {
    value: "Candelaria",
    name: "Candelaria",
  },
  {
    value: "Fasnia",
    name: "Fasnia",
  },
  {
    value: "Granadilla De Abona",
    name: "Granadilla De Abona",
  },
  {
    value: "Guía De Isora",
    name: "Guía De Isora",
  },
  {
    value: "Guimar",
    name: "Guimar",
  },
  {
    value: "La Laguna",
    name: "La Laguna",
  },
  {
    value: "Puerto De La Cruz",
    name: "Puerto De La Cruz",
  },
  {
    value: "San Miguel De Abona",
    name: "San Miguel De Abona",
  },
  {
    value: "Santa Cruz De Tenerife",
    name: "Santa Cruz De Tenerife",
  },
  {
    value: "Santiago Del Teide",
    name: "Santiago Del Teide",
  },
];

export const localidades = [
  {
    name: "Todas las localidades",
    value: "",
  },
  {
    value: "Acantilados de Los Gigantes",
    name: "Acantilados de Los Gigantes",
  },
  {
    value: "Alcalá",
    name: "Alcalá",
  },
  {
    value: "Aldea Blanca-Las Zocas",
    name: "Aldea Blanca-Las Zocas",
  },
  {
    value: "Callao Salvaje - Playa Paraíso",
    name: "Callao Salvaje - Playa Paraíso",
  },
  {
    value: "Chayofa",
    name: "Chayofa",
  },
  {
    value: "Cho-Guaza",
    name: "Cho-Guaza",
  },
  {
    value: "El Médano",
    name: "El Médano",
  },
  {
    value: "Golf del Sur-Amarilla Golf",
    name: "Golf del Sur-Amarilla Golf",
  },
  {
    value: "Las Chafiras",
    name: "Las Chafiras",
  },
  {
    value: "Los Abrigos",
    name: "Los Abrigos",
  },
  {
    value: "Los Cristianos",
    name: "Los Cristianos",
  },
  {
    value: "Palm Mar",
    name: "Palm Mar",
  },
  {
    value: "Playa San Juan",
    name: "Playa San Juan",
  },
  {
    value: "Playa de Fañabé Alto",
    name: "Playa de Fañabé Alto",
  },
  {
    value: "Puerto de Santiago",
    name: "Puerto de Santiago",
  },
  {
    value: "San Eugenio Bajo",
    name: "San Eugenio Bajo",
  },
];

export const tags = [
  { value: "", name: "Todas" },
  // { value: "access from street", name: "" },
  // { value: "air conditioner", name: "" },
  // { value: "alarm", name: "" },
  // { value: "aluminum windows", name: "" },
  // { value: "apartment", name: "" },
  // { value: "attached", name: "" },
  // { value: "automated doors", name: "" },
  // { value: "balcony", name: "" },
  // { value: "barbecue", name: "" },
  // { value: "basement", name: "" },
  // { value: "bohemian", name: "" },
  // { value: "bright", name: "" },
  // { value: "buildable", name: "" },
  // { value: "built-in wardrobes", name: "" },
  // { value: "bungalow", name: "" },
  // { value: "butane gas", name: "" },
  // { value: "caretaker", name: "" },
  // { value: "central heating", name: "" },
  // { value: "chimney", name: "" },
  // { value: "clothes line", name: "" },
  // { value: "communal swimming pool", name: "" },
  // { value: "community garden", name: "" },
  // { value: "concrete structure", name: "" },
  // { value: "condominium", name: "" },
  // { value: "corner", name: "" },
  // { value: "country estate", name: "" },
  // { value: "disabled access", name: "" },
  // { value: "dishwasher", name: "" },
  // { value: "doorman", name: "" },
  // { value: "double glazing", name: "" },
  // { value: "downtown", name: "" },
  // { value: "duplex", name: "" },
  // { value: "east", name: "" },
  // { value: "electric heating", name: "" },
  { value: "elevator", name: "Ascensor" },
  // { value: "emblematic building", name: "" },
  // { value: "emergency exit", name: "" },
  // { value: "equipped kitchen", name: "" },
  // { value: "extinguisher", name: "" },
  // { value: "false ceiling", name: "" },
  // { value: "farmhouse", name: "" },
  // { value: "floating floor", name: "" },
  // { value: "floor tiles", name: "" },
  // { value: "from a bank", name: "" },
  // { value: "furnished", name: "" },
  // { value: "furnished kitchen", name: "" },
  { value: "garage", name: "Garaje" },
  // { value: "garage included", name: "" },
  { value: "garden", name: "Jardín" },
  // { value: "golf views", name: "" },
  // { value: "green area", name: "" },
  // { value: "gym", name: "" },
  // { value: "half bathroom", name: "" },
  // { value: "heating oil", name: "" },
  // { value: "historic", name: "" },
  // { value: "hotel", name: "" },
  // { value: "hotel industry", name: "" },
  // { value: "individual heating", name: "" },
  // { value: "industrial area", name: "" },
  // { value: "inner courtyard", name: "" },
  // { value: "insurance", name: "" },
  // { value: "interior", name: "" },
  // { value: "internet", name: "" },
  // { value: "large lightwell", name: "" },
  // { value: "laundry", name: "" },
  // { value: "lightwell", name: "" },
  // { value: "loft", name: "" },
  // { value: "low house", name: "" },
  // { value: "luggage storage room", name: "" },
  // { value: "luxury", name: "" },
  // { value: "mansion", name: "" },
  // { value: "marble floor", name: "" },
  // { value: "metallic structure", name: "" },
  // { value: "mountain views", name: "" },
  // { value: "natural gas", name: "" },
  // { value: "new", name: "" },
  // { value: "new construction", name: "" },
  // { value: "north", name: "" },
  // { value: "open kitchen", name: "" },
  // { value: "open space", name: "" },
  { value: "outdoor", name: "Exterior" },
  // { value: "paddle tennis court", name: "" },
  // { value: "pantry", name: "" },
  // { value: "parking", name: "" },
  // { value: "parquet floor", name: "" },
  // { value: "patio", name: "" },
  // { value: "penthouse", name: "" },
  // { value: "permanent ford", name: "" },
  // { value: "pets", name: "" },
  // { value: "playground", name: "" },
  // { value: "plot", name: "" },
  // { value: "porch", name: "" },
  // { value: "private urbanization", name: "" },
  // { value: "protected building", name: "" },
  // { value: "radiating floor", name: "" },
  // { value: "raised floor", name: "" },
  // { value: "reformed", name: "" },
  // { value: "reinforced door", name: "" },
  { value: "rooftop terrace", name: "Ático" },
  // { value: "sauna", name: "" },
  { value: "sea views", name: "Vista Mar" },
  // { value: "security 24h", name: "" },
  // { value: "security cameras", name: "" },
  // { value: "security door", name: "" },
  // { value: "semidetached", name: "" },
  // { value: "service bedroom", name: "" },
  // { value: "service elevator", name: "" },
  // { value: "singular", name: "" },
  // { value: "smoke detector", name: "" },
  // { value: "smoke extractor", name: "" },
  // { value: "smooth walls", name: "" },
  // { value: "solarium", name: "" },
  // { value: "south", name: "" },
  // { value: "squash court", name: "" },
  // { value: "stairs", name: "" },
  // { value: "stippled walls", name: "" },
  { value: "storage room", name: "Trastero" },
  // { value: "storage room included", name: "" },
  // { value: "students", name: "" },
  // { value: "studio", name: "" },
  // { value: "subsidised housing", name: "" },
  // { value: "sunny", name: "" },
  { value: "swimming pool", name: "Piscina" },
  // { value: "tennis court", name: "" },
  { value: "terrace", name: "Terraza" },
  // { value: "terrazzo floor", name: "" },
  // { value: "to reform", name: "" },
  // { value: "tourist", name: "" },
  // { value: "townhouse", name: "" },
  // { value: "transfer", name: "" },
  // { value: "triplex", name: "" },
  // { value: "TV antenna", name: "" },
  // { value: "unfurnished", name: "" },
  // { value: "vent", name: "" },
  // { value: "video intercom", name: "" },
  // { value: "villa", name: "" },
  // { value: "warehouse", name: "" },
  // { value: "west", name: "" },
  // { value: "wifi", name: "" },
  // { value: "wooden structure", name: "" },
  // { value: "wooden windows", name: "" },
];
