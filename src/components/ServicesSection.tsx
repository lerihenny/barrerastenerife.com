import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Grid } from "@material-ui/core";
import { Service } from "./Service";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();
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

  return (
    <Container>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        <Service
          to="/properties/buy"
          image={images.buy.publicURL}
          title={t("services.buy.title")}
          description={t("services.buy.description")}
        />
        <Service
          to="/properties/buy"
          image={images.sell.publicURL}
          title={t("services.sell.title")}
          description={t("services.sell.description")}
        />
        <Service
          to="/properties/rent"
          image={images.rent.publicURL}
          title={t("services.rent.title")}
          description={t("services.rent.description")}
        />
      </Grid>
    </Container>
  );
};
