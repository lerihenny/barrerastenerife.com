import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { PromotionContainer } from "../../components/promotion/PromotionContainer";

const NewProperties: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const title = t("header.link.promotion");

  return (
    <Layout>
      <SEO title={title} />
      <PromotionContainer />
    </Layout>
  );
};

export default NewProperties;
