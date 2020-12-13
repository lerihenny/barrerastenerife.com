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
    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <Select label="Tipo" items={["Todos", "Piso", "Casa"]} value={0} />
          <Select
            label="Contrato"
            items={["Todos", "Alquiler", "Venta"]}
            value={0}
          />
          <Select
            label="Precio"
            items={[
              "Todos",
              "Menos de € 500",
              "€ 500 - € 600",
              "€ 600 - € 700",
              "€ 700 - € 800",
              "€ 800 - € 900",
              "€ 900 - € 1000",
              "Más de € 1000",
            ]}
            value={0}
          />
          <Select label="Zona" items={["Todas las zonas"]} value={0} />
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
