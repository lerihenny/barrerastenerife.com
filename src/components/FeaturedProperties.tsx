import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useQuery } from "react-query";
import { Search } from "../models/Search";
import { getPropertyList } from "../utils";
import List from "./properties/List";

export const FeaturedProperties = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    page,
  });
  const { status, data } = useQuery(["properties", page], () =>
    getPropertyList({ ...filter, page })
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <List featured properties={data?.data?.results} status={status} />
      <Pagination
        count={5}
        color="primary"
        size="large"
        page={page}
        onChange={handleChange}
        className="flex-center p-5"
      />
    </Container>
  );
};
