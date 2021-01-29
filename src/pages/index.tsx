import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import { FeaturedProperties } from "../components/FeaturedProperties";
import { useRepository } from "../context/repository";
import { useQuery } from "react-query";
import { Property } from "../models/Property";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <MainSlider properties={properties} /> */}
      <FeaturedProperties />
    </Layout>
  );
};

export default IndexPage;
