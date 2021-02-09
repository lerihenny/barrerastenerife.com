import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Detail from "../components/properties/Detail";
import { useRepository } from "../context/repository";
import { useTranslation } from "gatsby-plugin-react-i18next";

const PropertyPage: React.FC<PageProps> = ({ location }) => {
  const { getProperty } = useRepository();
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const identifier = searchParams.get("id");
  const property = getProperty({ identifier });

  return (
    <Layout>
      <SEO title={t("property")} />
      <Detail property={property} />
    </Layout>
  );
};

export default PropertyPage;
