import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "react-query";
import { Search } from "../models/Search";
import { getPropertyList } from "../utils";
import List from "./properties/List";
import SearchForm from "./properties/SearchForm";

export const BuyProperties = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    buyop: "sell",
    page,
  });
  const { status, data } = useQuery(["properties", [page, filter]], () =>
    getPropertyList({ ...filter, page })
  );

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <SearchForm contrato={2} setFilter={setFilter} />
      <List featured properties={data?.data?.results} status={status} />
      <Grid container spacing={2}>
        <Grid item xs={12} className="text-center">
          {status !== "loading" && page > 1 && (
            <Button onClick={handlePrevious} className="p-5">
              Anterior
            </Button>
          )}
          {status !== "loading" && data?.data?.results.length === 12 && (
            <Button onClick={handleNext} className="p-5">
              Siguiente
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
