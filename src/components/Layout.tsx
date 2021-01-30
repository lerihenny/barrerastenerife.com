/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container } from "@material-ui/core";
import CustomThemeProvider from "./theme/CustomThemeProvider";
import "../assets/scss/custom-theme.scss";

import Header from "./Header";
import Footer from "./Footer";
import { RepositoryProvider } from "../context/repository";

import { QueryClient, QueryClientProvider } from "react-query";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

interface Props {
  children: any;
}

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/34638418917" target="_blank">
      <div className="whatsapp-button">
        <WhatsAppIcon fontSize="large" />
      </div>
    </a>
  );
};

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const queryClient = new QueryClient();

  return (
    <CustomThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RepositoryProvider>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Container maxWidth={false} className="main-container">
            {children}
            <WhatsAppButton />
          </Container>
          <Footer />
        </RepositoryProvider>
      </QueryClientProvider>
    </CustomThemeProvider>
  );
};

export default Layout;
