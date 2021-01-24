import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Detail from "../components/properties/Detail";
import { useRepository } from "../context/repository";
import { Property } from "../models/Property";

const PropertyPage: React.FC<PageProps> = ({ location }) => {
  const { getProperty } = useRepository();

  const searchParams = new URLSearchParams(location.search);
  const identifier = searchParams.get("id");
  const property = getProperty({ identifier });

  return (
    <Layout>
      <SEO title="Property" />
      <Detail property={property} />
    </Layout>
  );
};

export default PropertyPage;
