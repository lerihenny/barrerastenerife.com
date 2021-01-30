import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { RentProperties } from "../../components/RentProperties";

const Properties: React.FC<PageProps> = () => {
  const title = "Alquiler";

  return (
    <Layout>
      <SEO title={title} />
      <RentProperties />
    </Layout>
  );
};

export default Properties;
