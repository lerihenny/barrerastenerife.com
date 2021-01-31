import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "../Select";
import * as constants from "../../constants";
import { Search } from "../../models/Search";

interface Props {
  tipo?: number;
  contrato?: number;
  habitaciones?: number;
  baños?: number;
  tags?: number;
  municipio?: number;
  localidad?: number;
  disableContract?: boolean;
  setFilter: Dispatch<SetStateAction<Search>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const SearchForm: React.FC<Props> = ({
  tipo = 0,
  contrato = 0,
  habitaciones = 0,
  baños = 0,
  tags = 0,
  municipio = 0,
  localidad = 0,
  disableContract = false,
  setFilter,
  setPage,
}) => {
  const [state, setState] = React.useState({
    tipo,
    contrato,
    habitaciones,
    baños,
    tags,
    municipio,
    localidad,
    "ordenar-por": 0,
    "identifier": "",
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    let data: Search = {};

    if (state.identifier !== "") {
      setPage(1);

      setFilter({
        identifier: state.identifier,
        page: 1,
      });

      return;
    }

    data.kind = constants.types[state.tipo].value;
    data.buyop = constants.contract[state.contrato].value;
    data.bedrooms_min = constants.rooms[state.habitaciones].value;
    data.bedrooms_max = constants.rooms[state.habitaciones].value;
    data.bathrooms_min = constants.baths[state.baños].value;
    data.bathrooms_max = constants.baths[state.baños].value;
    data.sort_by = constants.sort_by[state["ordenar-por"]].value;

    if (state.tags !== 0) {
      data.tags = constants.tags[state.tags].value;
    }

    if (state.habitaciones === 8) {
      data.bedrooms_min = "8";
      data.bedrooms_max = "20";
    }

    if (state.baños === 8) {
      data.bathrooms_min = "8";
      data.bathrooms_max = "20";
    }

    if (state.municipio !== 0) {
      data.town = constants.municipios[state.municipio].value;
    }

    if (state.localidad !== 0) {
      data.zone = constants.localidades[state.localidad].value;
    }

    setPage(1);

    setFilter({
      ...data,
      page: 1,
    });
  };

  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Grid container spacing={2}>
            {!disableContract && (
              <Grid item xs={12} sm={4}>
                <Select
                  disabled={disableContract}
                  label="Contrato"
                  items={constants.contract}
                  value={state.contrato}
                  onChange={handleChange}
                />
              </Grid>
            )}
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
                label="Ordenar por"
                items={constants.sort_by}
                value={state["ordenar-por"]}
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
            <Grid item xs={12} sm={4}>
              <Select
                label="Tags"
                items={constants.tags}
                value={state.tags}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputLabel
                shrink
                htmlFor="identifier"
                classes={{ root: "mb-3 mt-3" }}
              >
                {"ID de referencia"}
              </InputLabel>
              <TextField
                fullWidth
                id="identifier"
                name="identifier"
                size="small"
                variant="filled"
                value={state.identifier}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                label="Municipios"
                items={constants.municipios}
                value={state.municipio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                label="Localidades"
                items={constants.localidades}
                value={state.localidad}
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
