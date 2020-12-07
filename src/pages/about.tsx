import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="About" />
    </Layout>
  );
};

export default AboutPage;
