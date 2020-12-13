import React from "react";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "../Select";
import * as constants from "../../constants";

interface Props {
  type?: number;
}

const SearchForm: React.FC<Props> = ({ type = 0 }) => {
  const [state, setState] = React.useState({
    tipo: type,
    contrato: 0,
    precio: 0,
    tamaño: 0,
    habitaciones: 0,
    baños: 0,
    zonas: 0,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
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
            <Grid item xs={12} sm={4}>
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
            </Grid>
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
