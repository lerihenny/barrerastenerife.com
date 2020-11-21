import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import MainSlider from "../components/MainSlider"
import Properties from "../components/properties/Properties"
import { Hidden } from "@material-ui/core"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hidden xsDown>
        <MainSlider />
      </Hidden>
      <Properties featured />
    </Layout>
  )
}

export default IndexPage
