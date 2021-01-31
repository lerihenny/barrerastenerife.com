import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";

const RentProperties: React.FC<PageProps> = () => {
  const title = "Alquiler";

  return (
    <Layout>
      <SEO title={title} />
      <Properties
        contrato={1}
        disableContract={true}
        title="Propiedades en alquiler"
      />
    </Layout>
  );
};

export default RentProperties;
