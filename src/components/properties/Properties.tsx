import { Grid } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject as FluidObjectOriginal } from "gatsby-image"
import React from "react"
import PropertyCard from "./PropertyCard"

interface Props {
  featured: boolean
}

interface Edge {
  node: {
    fluid: FluidObject
  }
}

interface FluidObject extends FluidObjectOriginal {
  originalName: string
}

const Properties = ({ featured }: Props) => {
  const title = featured ? "Propiedades Destacadas" : "Propiedades"

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              aspectRatio
              base64
              src
              sizes
              srcSet
              originalName
            }
          }
        }
      }
    }
  `)

  const property1 = data.allImageSharp.edges.find(
    (edge: Edge) => edge.node.fluid.originalName === "property1.jpg"
  )
  const property2 = data.allImageSharp.edges.find(
    (edge: Edge) => edge.node.fluid.originalName === "property2.jpg"
  )
  const property3 = data.allImageSharp.edges.find(
    (edge: Edge) => edge.node.fluid.originalName === "property3.jpg"
  )
  const property4 = data.allImageSharp.edges.find(
    (edge: Edge) => edge.node.fluid.originalName === "property4.jpg"
  )

  return (
    <Grid container spacing={3} className="properties-container">
      <Grid item xs={12}>
        <h2 className="properties-container-title">{title}</h2>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <PropertyCard
          image={property1.node.fluid}
          price="€ 100.000"
          title="Propiedad Bonita"
          address="Los Abrigos - Granadilla de Abona"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <PropertyCard
          image={property2.node.fluid}
          price="€ 200.000"
          title="Casa Grande"
          address="Los Abrigos - Granadilla de Abona"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <PropertyCard
          image={property3.node.fluid}
          price="€ 500.000"
          title="Piso Cómodo"
          address="Los Abrigos - Granadilla de Abona"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <PropertyCard
          image={property4.node.fluid}
          price="€ 350.000"
          title="Ático Espacioso"
          address="Los Abrigos - Granadilla de Abona"
        />
      </Grid>
    </Grid>
  )
}

export default Properties
