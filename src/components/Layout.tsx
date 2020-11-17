/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "@material-ui/core"
import CustomThemeProvider from "./theme/CustomThemeProvider"
import "../assets/scss/custom-theme.scss"

import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: any
}

const Layout = ({ children }: Props) => {
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
      <Container maxWidth={false} className="main-container">
        {children}
      </Container>
      <Footer />
    </CustomThemeProvider>
  )
}

export default Layout
