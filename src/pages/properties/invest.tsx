import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/layout";
import SEO from "components/SEO";
import { Properties } from "components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import PropertiesBanner from "components/properties/PropertiesBanner";

const InvestProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.invest");

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/invest.jpg" }) {
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
        title={t("header.link.invest")}
      />
      <Properties kind="building" disableKind />
    </Layout>
  );
};

export default InvestProperties;
