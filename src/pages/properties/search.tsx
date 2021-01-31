import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";

const SearchProperties: React.FC<PageProps> = ({ location }) => {
  const title = "Propiedades";

  return (
    <Layout>
      <SEO title={title} />
      <Properties
        tipo={location?.state?.tipo}
        contrato={location?.state?.contrato}
        zonas={location?.state?.zonas}
      />
    </Layout>
  );
};

export default SearchProperties;
