import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/layout";
import SEO from "components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Properties } from "components/properties/Properties";
import { promotions } from "../../constants";
import { useStaticQuery, graphql } from "gatsby";
import PropertiesBanner from "components/properties/PropertiesBanner";

const NewPropertiesList: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();

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

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  const title = promotions.find(promotion => promotion.type === tag);

  return (
    <Layout>
      <SEO title={t("header.link.promotion")} />
      <PropertiesBanner
        image={image.banner.childImageSharp.fluid}
        title={title?.name}
      />
      <Properties tags={["promotion", tag!]} search={false} />
    </Layout>
  );
};

export default NewPropertiesList;
