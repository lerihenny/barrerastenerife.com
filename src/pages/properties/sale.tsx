import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import List from "../../components/properties/List";
import SearchForm from "../../components/properties/SearchForm";
import { useRepository } from "../../context/repository";

const Properties: React.FC<PageProps> = () => {
  const title = "Propiedades en venta";
  const { properties } = useRepository();

  return (
    <Layout>
      <SEO title={title} />
      <SearchForm />
      <List title={title} properties={properties} />
    </Layout>
  );
};

export default Properties;
