import React, { useContext } from "react";
import { propertyImages } from "../qraphql/queries";

const RepositoryContext = React.createContext([]);

export const RepositoryProvider: React.FC<any> = ({ value, children }) => {
  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepository = () => {
  const context = useContext(RepositoryContext);

  // TODO: Fetch Properties via repository (propertyImages must be used within a hook)
  const images = propertyImages();

  const findImage = (image: string) =>
    Object.values(images).find(srcImage =>
      srcImage.childImageSharp.fluid.src.endsWith(image)
    ).childImageSharp.fluid;

  const properties = [
    {
      id: 0,
      price: "€ 100.000",
      title: "Propiedad Bonita",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property1.jpg"),
    },
    {
      id: 1,
      price: "€ 200.000",
      title: "Casa Grande",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property2.jpg"),
    },
    {
      id: 2,
      price: "€ 500.000",
      title: "Piso Cómodo",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property3.jpg"),
    },
    {
      id: 3,
      price: "€ 350.000",
      title: "Ático Espacioso",
      address: "Los Abrigos - Granadilla de Abona",
      image: findImage("property4.jpg"),
    },
  ];

  if (context === null) {
    throw new Error("useRepository must be used within an RepositoryProvider");
  }

  return {
    ...context,
    properties,
    images,
  };
};
