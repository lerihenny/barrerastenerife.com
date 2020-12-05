import React from "react"
import { PageProps } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { default as PropertiesComponent } from "../../components/properties/Properties"

const Properties: React.FC<PageProps> = () => {
  const title = "Propiedades en alquiler"

  return (
    <Layout>
      <SEO title={title} />
      <PropertiesComponent title={title} />
    </Layout>
  )
}

export default Properties
