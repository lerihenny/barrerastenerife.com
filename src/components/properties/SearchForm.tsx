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
    habitaciones: 0,
    baños: 0,
    zonas: 0,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    let data: Search = {};

    data.kind = constants.types[state.tipo].value;
    data.buyop = constants.contract[state.contrato].value;
    data.bedrooms_min = constants.rooms[state.habitaciones].value;
    data.bedrooms_max = constants.rooms[state.habitaciones].value;
    data.bathrooms_min = constants.baths[state.baños].value;
    data.bathrooms_max = constants.baths[state.baños].value;

    if (state.habitaciones === 8) {
      data.bedrooms_min = "8";
      data.bedrooms_max = "20";
    }

    if (state.baños === 8) {
      data.bathrooms_min = "8";
      data.bathrooms_max = "20";
    }

    if (state.zonas !== 0) {
      data.town = constants.zones[state.zonas].value;
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
                items={constants.types}
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
