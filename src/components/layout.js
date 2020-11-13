/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CustomThemeProvider from "./theme/CustomThemeProvider"
import Header from "./Header"
import Footer from "./Footer"
import "../assets/scss/custom-theme.scss"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <CustomThemeProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container className="main-container">{children}</Container>
      <Footer />
    </CustomThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
