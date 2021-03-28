import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";
import SEO from "components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Properties } from "components/properties/Properties";
import { promotions } from "../../constants";

const NewPropertiesList: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  const title = promotions.find(promotion => promotion.type === tag);

  return (
    <Layout>
      <SEO title={t("header.link.promotion")} />
      <Properties
        tags={["promotion", tag!]}
        title={title?.name}
        search={false}
      />
    </Layout>
  );
};

export default NewPropertiesList;
