import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import { Properties } from "../components/properties/Properties";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainSlider />
      <Properties
        title="Propiedades Recientes"
        pagination={false}
        search={false}
      />
    </Layout>
  );
};

export default IndexPage;
