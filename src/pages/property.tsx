import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Property from "../components/properties/Property"

const PropertyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Property" />
      <Property />
    </Layout>
  )
}

export default PropertyPage
