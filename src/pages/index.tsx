import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import { FeaturedProperties } from "../components/FeaturedProperties";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainSlider />
      <FeaturedProperties />
    </Layout>
  );
};

export default IndexPage;
