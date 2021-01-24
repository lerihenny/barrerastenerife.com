export enum SearchParams {
  PAGE = "page",
  BUYOP = "buyop",
  MIN_PRICE = "min_price",
  MAX_PRICE = "max_price",
  STATUS = "status",
  KIND = "kind",
  PROVINCE = "province",
  TOWN = "town",
  ZONE = "zone",
  DISTRICT = "district",
  IDENTIFIER = "identifier",
  TAGS = "tags",
  AREA_MIN = "area_min",
  AREA_MAX = "area_max",
  BEDROOMS_MIN = "bedrooms_min",
  BEDROOMS_MAX = "bedrooms_max",
  BATHROOMS_MIN = "bathrooms_min",
  BATHROOMS_MAX = "bathrooms_max",
  SORT_BY = "sort_by",
}

export type Search = {
  page?: number;
  buyop?: "sell" | "rent" | "vacation";
  min_price?: number; // buyop must be defined.
  max_price?: number; // buyop must be defined.
  status?:
    | "rentend"
    | "sold"
    | "available"
    | "inactive"
    | "reserved"
    | "prospect";
  kind?:
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
  kind_value?:
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
  province?: string;
  town?: string;
  zone?: string;
  district?: string;
  identifier?: string;
  tags?: [];
  area_min?: number;
  area_max?: number;
  bedrooms_min?: number;
  bedrooms_max?: number;
  bathrooms_min?: number;
  bathrooms_max?: number;
  sort_by?:
    | "creation_date_desc" // most recent
    | "creation_date_asc" // least recent
    | "price_desc" // highest price
    | "price_asc"; // lowest price"
};

const tags = [
  "access from street",
  "air conditioner",
  "alarm",
  "aluminum windows",
  "apartment",
  "attached",
  "automated doors",
  "balcony",
  "barbecue",
  "basement",
  "bohemian",
  "bright",
  "buildable",
  "built-in wardrobes",
  "bungalow",
  "butane gas",
  "caretaker",
  "central heating",
  "chimney",
  "clothes line",
  "communal swimming pool",
  "community garden",
  "concrete structure",
  "condominium",
  "corner",
  "country estate",
  "disabled access",
  "dishwasher",
  "doorman",
  "double glazing",
  "downtown",
  "duplex",
  "east",
  "electric heating",
  "elevator",
  "emblematic building",
  "emergency exit",
  "equipped kitchen",
  "extinguisher",
  "false ceiling",
  "farmhouse",
  "floating floor",
  "floor tiles",
  "from a bank",
  "furnished",
  "furnished kitchen",
  "garage",
  "garage included",
  "garden",
  "golf views",
  "green area",
  "gym",
  "half bathroom",
  "heating oil",
  "historic",
  "hotel",
  "hotel industry",
  "individual heating",
  "industrial area",
  "inner courtyard",
  "insurance",
  "interior",
  "internet",
  "large lightwell",
  "laundry",
  "lightwell",
  "loft",
  "low house",
  "luggage storage room",
  "luxury",
  "mansion",
  "marble floor",
  "metallic structure",
  "mountain views",
  "natural gas",
  "new",
  "new construction",
  "north",
  "open kitchen",
  "open space",
  "outdoor",
  "paddle tennis court",
  "pantry",
  "parking",
  "parquet floor",
  "patio",
  "penthouse",
  "permanent ford",
  "pets",
  "playground",
  "plot",
  "porch",
  "private urbanization",
  "protected building",
  "radiating floor",
  "raised floor",
  "reformed",
  "reinforced door",
  "rooftop terrace",
  "sauna",
  "sea views",
  "security 24h",
  "security cameras",
  "security door",
  "semidetached",
  "service bedroom",
  "service elevator",
  "singular",
  "smoke detector",
  "smoke extractor",
  "smooth walls",
  "solarium",
  "south",
  "squash court",
  "stairs",
  "stippled walls",
  "storage room",
  "storage room included",
  "students",
  "studio",
  "subsidised housing",
  "sunny",
  "swimming pool",
  "tennis court",
  "terrace",
  "terrazzo floor",
  "to reform",
  "tourist",
  "townhouse",
  "transfer",
  "triplex",
  "TV antenna",
  "unfurnished",
  "vent",
  "video intercom",
  "villa",
  "warehouse",
  "west",
  "wifi",
  "wooden structure",
  "wooden windows",
];
