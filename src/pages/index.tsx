import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { Container, Typography } from "@material-ui/core";

import Layout from "components/layout";
import SEO from "components/SEO";
import MainSlider from "components/MainSlider";

import { ServicesSection } from "components/ServicesSection";
import { PropertiesSection } from "components/PropertiesSection";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Partnerships from "components/Partnerships";
import Testimonials from "components/testimonials/Testimonials";
import { Banner } from "components/Banner";

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

      <Partnerships />

      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
