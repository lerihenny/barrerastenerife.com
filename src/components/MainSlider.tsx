import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Button, TextField } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const MainSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "property1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const SearchForm = () => {
    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <TextField fullWidth size="small" label="Tipo" variant="filled" />
          <TextField fullWidth size="small" label="Contrato" variant="filled" />
          <TextField fullWidth size="small" label="Zona" variant="filled" />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </form>
      </div>
    )
  }

  const PropertyData = () => {
    return (
      <div className="main-slider-property-data MuiPaper-elevation5">
        <h2 className="property-data-price">€ 100.000</h2>
        <h2 className="property-data-title">Casa bonita</h2>
        <h3 className="property-data-address">
          Los Abrigos - Granadilla de Abona
        </h3>
      </div>
    )
  }

  return (
    <section className="main-slider">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt=""
        className="img-responsive crop-center"
      />
      <SearchForm />
      <PropertyData />
    </section>
  )
}

export default MainSlider
