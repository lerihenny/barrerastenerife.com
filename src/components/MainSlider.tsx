import React from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import Img from "gatsby-image";
import { Button, Container, Hidden } from "@material-ui/core";
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
      municipio: 0,
      localidad: 0,
    });

    const handleChange = (event: any) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSearch = () => {
      navigate("/properties/search", { state });
    };

    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <Select
            label="Tipo"
            items={constants.types}
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
            label="Municipio"
            items={constants.municipios}
            value={state.municipio}
            onChange={handleChange}
          />
          <Select
            label="Localidad"
            items={constants.localidades}
            value={state.localidad}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </form>
      </div>
    );
  };

  const PropertyData = () => {
    return (
      <div className="main-slider-property-data">
        <h2 className="">Where Dreams Come Home</h2>
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
