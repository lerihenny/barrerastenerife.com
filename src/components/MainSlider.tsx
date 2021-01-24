import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Button, CircularProgress, Container, Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "./Select";
import * as constants from "../constants";
import { Property } from "../models/Property";
import { formatPrice } from "../utils";

interface Props {
  properties: Property[];
}

const MainSlider: React.FC<Props> = ({ properties }) => {
  const property =
    properties[Math.floor(Math.random() * Math.floor(properties.length))];

  console.log(property);

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
        <h2 className="property-data-price">
          {formatPrice(
            property.selling ? property.selling_cost : property.renting_cost
          )}
        </h2>
        <hr />
        <h2 className="property-data-title">{property.street}</h2>
        <h3 className="property-data-address">{property.town}</h3>
      </div>
    );
  };

  return (
    <section className="main-slider">
      {properties.length === 0 ? (
        <Container className="text-center p-5">
          <CircularProgress />
        </Container>
      ) : (
        <>
          <img
            src={property.pictures[0]}
            className="img-responsive crop-center"
          />
          <Container className="main-slider-container">
            <Hidden xsDown>
              <SearchForm />
            </Hidden>
            <PropertyData />
          </Container>
        </>
      )}
    </section>
  );
};

export default MainSlider;
