import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { Container, Hidden, Typography } from "@material-ui/core";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import { Banner } from "../components/Banner";
import { Properties } from "../components/properties/Properties";
import { ServicesSection } from "../components/ServicesSection";
import { PropertiesSection } from "../components/PropertiesSection";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query {
      background1: file(relativePath: { eq: "bg/2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background2: file(relativePath: { eq: "bg/6.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={t("home")} />
      <MainSlider />
      <Banner size="medium" color={false}>
        <Container>
          <Typography
            variant="h5"
            className="text-uppercase source-font"
            align="center"
          >
            {t("about.welcome")}
          </Typography>
        </Container>
      </Banner>

      <Banner image={images.background1.childImageSharp.fluid}>
        <ServicesSection />
      </Banner>

      <PropertiesSection />
      <Banner size="medium" image={images.background2.childImageSharp.fluid} />
    </Layout>
  );
};

export default IndexPage;
