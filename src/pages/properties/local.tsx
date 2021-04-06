import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";
import SEO from "components/SEO";
import { Properties } from "components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import PropertiesBanner from "components/properties/PropertiesBanner";

const LocalProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.local");

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
    <Layout>
      <SEO title={title} />
      <PropertiesBanner
        image={image.banner.childImageSharp.fluid}
        title={t("header.link.local")}
      />
      <Properties search={false} tags={["commercial"]} />
    </Layout>
  );
};

export default LocalProperties;
