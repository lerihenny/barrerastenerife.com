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
      <div className="main-search-form">
        Buscador
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

  return (
    <>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt=""
        className="main-slider"
      />
      <SearchForm />
    </>
  )
}

export default MainSlider
