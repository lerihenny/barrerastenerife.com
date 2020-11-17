import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import MainSlider from "../components/MainSlider"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <MainSlider />
  </Layout>
)

export default IndexPage
