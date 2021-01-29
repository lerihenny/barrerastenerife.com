import React, { Dispatch, SetStateAction } from "react";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "../Select";
import * as constants from "../../constants";
import { Search } from "../../models/Search";

interface Props {
  contrato?: number;
  setFilter: Dispatch<SetStateAction<Search>>;
}

const SearchForm: React.FC<Props> = ({ contrato = 0, setFilter }) => {
  const [state, setState] = React.useState({
    tipo: 0,
    contrato,
    // precio: 0,
    // tamaño: 0,
    habitaciones: 0,
    baños: 0,
    zonas: 0,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    let data: Search = {};

    if (state.tipo === 1) {
      data.kind = "flat";
    }

    if (state.tipo === 2) {
      data.kind = "chalet";
    }

    if (state.contrato === 1) {
      data.buyop = "rent";
    }

    if (state.contrato === 2) {
      data.buyop = "sell";
    }

    if (state.habitaciones > 0) {
      data.bedrooms_min = state.habitaciones;
      data.bedrooms_max = state.habitaciones;
    }

    if (state.baños > 0) {
      data.bathrooms_min = state.baños;
      data.bathrooms_max = state.baños;
    }

    if (state.zonas > 0) {
      data.town = constants.zones[state.zonas];
    }

    setFilter(data);
  };

  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Select
                label="Tipo"
                items={constants.type}
                value={state.tipo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Contrato"
                items={constants.contract}
                value={state.contrato}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Select
                label="Precio"
                items={constants.price}
                value={state.precio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Tamaño"
                items={constants.size}
                value={state.tamaño}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={4}>
              <Select
                label="Habitaciones"
                items={constants.rooms}
                value={state.habitaciones}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Baños"
                items={constants.baths}
                value={state.baños}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                label="Zonas"
                items={constants.zones}
                value={state.zonas}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchForm;
