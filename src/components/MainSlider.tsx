import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Button,
  Container,
  TextField,
  Hidden,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

interface Form {
  type: string
  contract: string
}

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "properties/property1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const SearchForm = () => {
    const [state, setState] = useState<Form>({
      type: "",
      contract: "",
    })

    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <FormControl fullWidth variant="filled">
            <InputLabel id="search-type-label">Tipo</InputLabel>
            <Select
              labelId="search-type-label"
              id="search-type"
              label="Tipo"
              name="type"
              classes={{ root: "main-search-select" }}
              // onChange={handleChange}
              value=""
            >
              <MenuItem value={0}>
                <em>Todos</em>
              </MenuItem>
              <MenuItem value={10}>Piso</MenuItem>
              <MenuItem value={20}>Casa</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel id="search-contract-label">Contrato</InputLabel>
            <Select
              labelId="search-contract-label"
              id="search-contract"
              label="Contrato"
              name="contract"
              classes={{ root: "main-search-select" }}
              // onChange={handleChange}
              value=""
            >
              <MenuItem value={0}>
                <em>Todos</em>
              </MenuItem>
              <MenuItem value={10}>Alquiler</MenuItem>
              <MenuItem value={20}>Venta</MenuItem>
            </Select>
          </FormControl>
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
      <div className="main-slider-property-data property-data MuiPaper-elevation5">
        <h2 className="property-data-price">€ 100.000</h2>
        <hr />
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
      <Container>
        <Hidden xsDown>
          <SearchForm />
        </Hidden>
        <PropertyData />
      </Container>
    </section>
  )
}

export default MainSlider
