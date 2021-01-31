import React, { FC, useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { useQuery } from "react-query";
import { Search } from "../../models/Search";
import { getPropertyList } from "../../utils";
import List from "./List";
import SearchForm from "./SearchForm";
import * as constants from "../../constants";

type Props = {
  tipo?: number;
  contrato?: number;
  municipio?: number;
  localidad?: number;
  disableContract?: boolean;
  title?: string;
  pagination?: boolean;
};

export const Properties: FC<Props> = ({
  tipo = 0,
  contrato = 0,
  municipio = 0,
  localidad = 0,
  disableContract = false,
  title = "Propiedades",
  pagination = true,
}) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    kind: constants.types[tipo].value,
    buyop: constants.contract[contrato].value,
    town: constants.municipios[municipio].value,
    zone: constants.localidades[localidad].value,
    page,
  });

  const { status, data } = useQuery(["properties", [page, filter]], () =>
    getPropertyList({ page, ...filter })
  );

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <SearchForm
        disableContract={disableContract}
        tipo={tipo}
        contrato={contrato}
        municipio={municipio}
        localidad={localidad}
        setFilter={setFilter}
        setPage={setPage}
      />
      <List properties={data?.data?.results} status={status} title={title} />
      {pagination && (
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            {status !== "loading" && page > 1 && (
              <Button onClick={handlePrevious} className="p-5">
                {"< Anterior"}
              </Button>
            )}
            {status !== "loading" && data?.data?.results.length === 12 && (
              <Button onClick={handleNext} className="p-5">
                {"Siguiente >"}
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
