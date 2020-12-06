import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Detail from "../components/properties/Detail";

const PropertyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Property" />
      <Detail />
    </Layout>
  );
};

export default PropertyPage;
