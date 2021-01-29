import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { BuyProperties } from "../../components/BuyProperties";

const Properties: React.FC<PageProps> = () => {
  const title = "Compra";

  return (
    <Layout>
      <SEO title={title} />
      <BuyProperties />
    </Layout>
  );
};

export default Properties;
