import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

const BuyProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.buy");

  return (
    <Layout>
      <SEO title={title} />
      <Properties contract={2} disableContract title={t("properties.sell")} />
    </Layout>
  );
};

export default BuyProperties;
