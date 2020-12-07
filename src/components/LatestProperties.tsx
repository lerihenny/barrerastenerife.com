import React from "react";
import { Link } from "gatsby";
import { Grid } from "@material-ui/core";
import Img from "gatsby-image";
import { propertyImages } from "../qraphql/queries";

const LatestProperties = () => {
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

  return (
    <Grid container spacing={2}>
      {properties.map(property => (
        <Grid key={`latest-properties-${property.id}`} item xs={3}>
          <Link to={`/property`}>
            <Img
              fluid={property.image}
              alt={property.title}
              className="img-responsive crop-center"
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestProperties;
