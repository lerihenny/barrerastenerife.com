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
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "../Select";

const SearchForm: React.FC = () => {
  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Select
                label="Tipo"
                items={["Todos", "Piso", "Casa"]}
                value={0}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Contrato"
                items={["Todos", "Alquiler", "Venta"]}
                value={0}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
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
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Tamaño"
                items={[
                  "Todos",
                  "Menos de 50m",
                  "50m - 100m",
                  "100m - 150m",
                  "150m - 200m",
                  "Más de 200m",
                ]}
                value={0}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Habitaciones"
                items={["Todos", "1", "2", "3", "4", "Más de 4"]}
                value={0}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                label="Baños"
                items={["Todos", "1", "2", "3", "4", "Más de 4"]}
                value={0}
              />
            </Grid>
            <Grid item xs={12}>
              <Select label="Zona" items={["Todas las zonas"]} value={0} />
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
