import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  Button,
  Container,
  TextField,
  Hidden,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "./Select";
import * as constants from "../constants";

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
  `);

  const SearchForm = () => {
    const [state, setState] = React.useState({
      tipo: 0,
      contrato: 0,
      precio: 0,
      zonas: 0,
    });

    const handleChange = (event: any) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <Select
            label="Tipo"
            items={constants.type}
            value={state.tipo}
            onChange={handleChange}
          />
          <Select
            label="Contrato"
            items={constants.contract}
            value={state.contrato}
            onChange={handleChange}
          />
          <Select
            label="Precio"
            items={constants.price}
            value={state.precio}
            onChange={handleChange}
          />
          <Select
            label="Zonas"
            items={constants.zones}
            value={state.zonas}
            onChange={handleChange}
          />
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
    );
  };

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
    );
  };

  return (
    <section className="main-slider">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt=""
        className="img-responsive crop-center"
      />
      <Container className="main-slider-container">
        <Hidden xsDown>
          <SearchForm />
        </Hidden>
        <PropertyData />
      </Container>
    </section>
  );
};

export default MainSlider;
