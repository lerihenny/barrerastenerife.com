import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm: React.FC = () => {
  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel id="search-price-label">Precio</InputLabel>
                <Select
                  labelId="search-price-label"
                  id="search-price"
                  label="Precio"
                  name="price"
                  classes={{ root: "main-search-select" }}
                  // onChange={handleChange}
                  value=""
                >
                  <MenuItem value={0}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={10}>Menos de € 500</MenuItem>
                  <MenuItem value={20}>€ 500 - € 600</MenuItem>
                  <MenuItem value={30}>€ 600 - € 700</MenuItem>
                  <MenuItem value={40}>€ 700 - € 800</MenuItem>
                  <MenuItem value={50}>€ 800 - € 900</MenuItem>
                  <MenuItem value={60}>€ 900 - € 1000</MenuItem>
                  <MenuItem value={60}>Más de € 1000</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel id="search-size-label">Tamaño</InputLabel>
                <Select
                  labelId="search-size-label"
                  id="search-size"
                  label="Tamaño"
                  name="size"
                  classes={{ root: "main-search-select" }}
                  // onChange={handleChange}
                  value=""
                >
                  <MenuItem value={0}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={10}>Menos de 50m</MenuItem>
                  <MenuItem value={20}>50m - 100m</MenuItem>
                  <MenuItem value={30}>100m - 150m</MenuItem>
                  <MenuItem value={40}>150m - 200m</MenuItem>
                  <MenuItem value={50}>Más de 200m</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel id="search-rooms-label">Habitaciones</InputLabel>
                <Select
                  labelId="search-rooms-label"
                  id="search-rooms"
                  label="Habitaciones"
                  name="rooms"
                  classes={{ root: "main-search-select" }}
                  // onChange={handleChange}
                  value=""
                >
                  <MenuItem value={0}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>Más de 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel id="search-baths-label">Baños</InputLabel>
                <Select
                  labelId="search-baths-label"
                  id="search-baths"
                  label="Baños"
                  name="baths"
                  classes={{ root: "main-search-select" }}
                  // onChange={handleChange}
                  value=""
                >
                  <MenuItem value={0}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>Más de 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size="small" label="Zona" variant="filled" />
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
