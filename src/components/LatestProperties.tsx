import React from "react";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { QueryStatus, useQuery } from "react-query";
import { getPropertyList } from "../utils";
import { Property } from "../models/Property";
import { Link } from "gatsby-plugin-react-i18next";

const LatestProperties = () => {
  const {
    status,
    data,
  }: {
    status: QueryStatus;
    data: any;
  } = useQuery("properties", () => getPropertyList({}));

  return (
    <Grid container spacing={2}>
      {status === "loading" && (
        <Container className="text-center p-5">
          <CircularProgress />
        </Container>
      )}
      {status === "success" &&
        data?.data?.results.slice(0, 4).map((property: Property) => (
          <Grid key={`latest-properties-${property.id}`} item xs={3}>
            <Link to={`/property/?id=${property.identifier}`}>
              <img
                src={property?.pictures?.[0]}
                className="img-responsive crop-center"
              />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default LatestProperties;
