import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

const AboutBanner = () => {
  const { t } = useTranslation();

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="about-container">
      <div className="about-overlay" />
      <Img
        fluid={image.banner.childImageSharp.fluid}
        className="about-image crop-center"
      />
      <div className="about-text">
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t("about.banner.p1")}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {t("about.banner.p2")}
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default AboutBanner;
