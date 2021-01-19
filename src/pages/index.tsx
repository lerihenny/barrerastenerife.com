import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainSlider from "../components/MainSlider";
import List from "../components/properties/List";
import { useRepository } from "../context/repository";

const IndexPage: React.FC<PageProps> = () => {
  const { properties } = useRepository();

  if (!properties) return null;

  return (
    <Layout>
      <SEO title="Home" />
      <MainSlider />
      <List featured properties={properties} />
    </Layout>
  );
};

export default IndexPage;
