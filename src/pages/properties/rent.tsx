import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

const RentProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.rent");

  return (
    <Layout>
      <SEO title={title} />
      <Properties
        contrato={1}
        disableContract={true}
        title={t("properties.rent")}
      />
    </Layout>
  );
};

export default RentProperties;
