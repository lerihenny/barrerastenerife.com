import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Detail from "../components/properties/Detail";
import { useRepository } from "../context/repository";
import { Property } from "../models/Property";

const PropertyPage: React.FC<PageProps> = ({ location }) => {
  const { id } = location.state
  const { getProperty } = useRepository();

  const property: Property = getProperty({identifier: id})
  
  if (!property) return null;

  return (
    <Layout>
      <SEO title="Property" />
      <Detail property={property} />
    </Layout>
  );
};

export default PropertyPage;
