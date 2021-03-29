import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

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
    <ParallaxBanner
      className="about-container"
      layers={[{ image: image.banner.childImageSharp.fluid.src, amount: 0.5 }]}
    >
      <div className="about-overlay" />
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
    </ParallaxBanner>
  );
};

export default AboutBanner;
