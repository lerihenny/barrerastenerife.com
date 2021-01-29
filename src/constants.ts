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
export const zones = [
  {
    name: "Todas las zonas",
    value: "Todas las zonas",
  },
  {
    name: "Adeje",
    value: "Adeje",
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
    name: "Guia de Isora",
    value: "Guia de Isora",
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
    name: "Los Realejos",
    value: "Los Realejos",
  },
  {
    name: "Los Silos",
    value: "Los Silos",
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
