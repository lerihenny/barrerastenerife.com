import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import { Properties } from "../components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("home")} />
      <MainSlider />
      <Properties
        title={t("properties.recent")}
        pagination={false}
        search={false}
      />
    </Layout>
  );
};

export default IndexPage;
