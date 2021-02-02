import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  Slider,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "../Select";
import * as constants from "../../constants";
import { Search } from "../../models/Search";
import { formatPrice } from "../../utils";
import { useTranslation } from "gatsby-plugin-react-i18next";

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
  const { t } = useTranslation();
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
    "price": contrato === 1 ? [400, 2000] : [50000, 1000000],
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setState({ ...state, price: newValue as number[] });
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
    data.min_price = state.price[0];
    data.max_price = state.price[1];

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
                  tKey="contract"
                  label={t("constants.fields.contract")}
                  items={constants.contract}
                  value={state.contrato}
                  onChange={handleChange}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={4}>
              <Select
                tKey="types"
                label={t("constants.fields.type")}
                items={constants.types}
                value={state.tipo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="sort_by"
                label={t("constants.fields.sort_by")}
                items={constants.sort_by}
                value={state["ordenar-por"]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="bedrooms"
                label={t("constants.fields.bedrooms")}
                items={constants.rooms}
                value={state.habitaciones}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="bathrooms"
                label={t("constants.fields.bathrooms")}
                items={constants.baths}
                value={state.baños}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="tags"
                label={t("constants.fields.tags")}
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
                {t("constants.fields.identifier")}
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
            <Grid item xs={12} sm={4}>
              <Select
                tKey="cities"
                label={t("constants.fields.city")}
                items={constants.municipios}
                value={state.municipio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="zones"
                label={t("constants.fields.zone")}
                items={constants.localidades}
                value={state.localidad}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputLabel
                shrink
                htmlFor="price"
                classes={{ root: "mb-3 mt-3" }}
              >
                {t("constants.fields.price")}
              </InputLabel>
              <Slider
                id="price"
                name="price"
                min={0}
                step={50}
                max={contrato === 1 ? 2000 : 1000000}
                valueLabelDisplay="off"
                value={state.price}
                onChange={handlePriceChange}
                aria-labelledby="range-slider"
                // marks={[
                //   {
                //     value: state.price[0],
                //     label: `${formatPrice(state.price[0])}`,
                //   },
                //   {
                //     value: state.price[1],
                //     label: `${formatPrice(state.price[1])}`,
                //   },
                // ]}
              />
              {`${formatPrice(state.price[0])} - ${formatPrice(
                state.price[1],
              )}`}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                {t("search")}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchForm;
