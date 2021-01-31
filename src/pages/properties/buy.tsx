import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Properties } from "../../components/properties/Properties";

const BuyProperties: React.FC<PageProps> = () => {
  const title = "Compra";

  return (
    <Layout>
      <SEO title={title} />
      <Properties contrato={2} disableContract />
    </Layout>
  );
};

export default BuyProperties;
