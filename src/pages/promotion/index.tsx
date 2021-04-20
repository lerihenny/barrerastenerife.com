import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/layout";
import SEO from "components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { PromotionContainer } from "components/promotion/PromotionContainer";
import { useStaticQuery, graphql } from "gatsby";
import PropertiesBanner from "components/properties/PropertiesBanner";

const NewProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.promotion");

  const image = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/developments.jpg" }) {
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
        title={t("folders.promotion.title")}
      />
      <PromotionContainer />
    </Layout>
  );
};

export default NewProperties;
