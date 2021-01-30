import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";

const SearchProperties: React.FC<PageProps> = ({ location }) => {
  const title = "Propiedades";
  const { tipo, contrato, zonas } = location.state;

  return (
    <Layout>
      <SEO title={title} />
      <Properties tipo={tipo} contrato={contrato} zonas={zonas} />
    </Layout>
  );
};

export default SearchProperties;
