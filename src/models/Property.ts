import { FluidObject } from "gatsby-image";

export interface Property {
  id: number;
  price: string;
  title: string;
  address: string;
  image: FluidObject;
  // image: string;
}
