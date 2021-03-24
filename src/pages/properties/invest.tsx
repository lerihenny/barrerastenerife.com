import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";
import SEO from "components/SEO";
import { Properties } from "components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

const BuyProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.invest");

  return (
    <Layout>
      <SEO title={title} />
      <Properties kind="building" disableKind title={t("header.link.invest")} />
    </Layout>
  );
};

export default BuyProperties;
