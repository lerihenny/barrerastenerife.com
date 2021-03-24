export type Property = {
  id: number;
  identifier: string;
  zone: string;
  town: string;
  province: string;
  neighborhood: string;
  street: string;
  street_number: string;
  geo_lat: number;
  geo_lng: number;
  public_address: number;
  renting: boolean;
  selling: boolean;
  transfer: boolean;
  renting_cost: number;
  renting_period: string | null;
  selling_cost: number;
  transfer_cost: number;
  kind: string;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  // pictures: any;
  pictures: any;
  description: string;
  agency: {
    name: string;
    address: string;
    town: string;
    zip_code: string;
    phone_number_1: string;
    phone_number_2: string;
    logo: string;
    currency: string;
    currency_symbol: string;
  };
  status: string;
  is_reserved: boolean;
  zip_code: string;
  show_cost: boolean;
  floor_display: string | null;
  area_util: number;
  area_plot: number;
  energy_certificate_display: string;
  updated: string;
  kind_value: string;
  renting_period_display: string | null;
  tags: string[];
  virtual_visit: string;
  video_url: string;
  description_es: string;
  description_en: string;
  description_ca: string;
  description_fr: string;
  description_ru: string;
  description_nl: string;
  description_nb: string;
  description_fi: string;
  description_de: string;
  description_sv: string;
  is_exclusive: boolean;
  year_built: number;
  title: string;
  published_web: boolean;
  energy_consumption: string | null;
  energy_emission: string | null;
  owner: {
    phone: string;
    email: string;
    id: number;
    name: string;
  };
  second_owner: string | null;
  commercial: string | null;
  creator: {
    username: string;
    id: number;
    name: string;
  };
  contact: {
    phone: string;
    name: string;
    email: string;
  };
  related?: Property[];
};
