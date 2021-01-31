import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";

const BuyProperties: React.FC<PageProps> = () => {
  const title = "Alquiler";

  return (
    <Layout>
      <SEO title={title} />
      <Properties contrato={1} disableContract={true} />
    </Layout>
  );
};

export default BuyProperties;
