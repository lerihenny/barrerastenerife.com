import { Property } from "./Property";

export type Response = {
  count: number;
  next?: string;
  previous?: string;
  results: Property[];
};
