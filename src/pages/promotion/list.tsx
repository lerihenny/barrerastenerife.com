import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";
import SEO from "components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Properties } from "components/properties/Properties";

const NewPropertiesList: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();
  const title = t("header.link.promotion");

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  return (
    <Layout>
      <SEO title={title} />
      <Properties title={t("properties.sell")} search={false} />
    </Layout>
  );
};

export default NewPropertiesList;
