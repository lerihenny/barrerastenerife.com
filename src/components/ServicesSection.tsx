import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Grid } from "@material-ui/core";
import { Service } from "./Service";
import { Link } from "gatsby-plugin-react-i18next";

export const ServicesSection = () => {
  const images = useStaticQuery(graphql`
    query {
      buy: file(relativePath: { eq: "svg/buy.svg" }) {
        publicURL
      }
      sell: file(relativePath: { eq: "svg/sell.svg" }) {
        publicURL
      }
      rent: file(relativePath: { eq: "svg/rent.svg" }) {
        publicURL
      }
    }
  `);

  console.log(images);

  return (
    <Container>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        <Service
          to="properties/buy"
          image={images.buy.publicURL}
          title="Buy your property with us"
          description="Buying a home is a big step and there can be a lot to consider. At Harcourts we believe it should be one of the most fulfilling experiences of your life."
        />
        <Service
          to="properties/buy"
          image={images.sell.publicURL}
          title="Sell your property with us"
          description="Whether you're selling for the first time or have sold up and moved on before, we want to make sure that you’re well informed and know exactly what to expect every step of the way."
        />
        <Service
          to="properties/rent"
          image={images.rent.publicURL}
          title="Rent your property with us"
          description="Whether you are looking to rent your first home, or seeking a property management service, we will help you understand the process, and get all the facts!"
        />
      </Grid>
    </Container>
  );
};
