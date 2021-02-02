import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SearchProperties: React.FC<PageProps> = ({ location }) => {
  const { t } = useTranslation();
  const title = t("properties.title");

  return (
    <Layout>
      <SEO title={title} />
      <Properties
        title={t("properties.title")}
        tipo={location?.state?.tipo}
        contrato={location?.state?.contrato}
        municipio={location?.state?.municipio}
        localidad={location?.state?.localidad}
      />
    </Layout>
  );
};

export default SearchProperties;
