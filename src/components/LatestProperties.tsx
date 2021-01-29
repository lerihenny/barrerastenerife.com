import React from "react";
import { Link } from "gatsby";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { useQuery } from "react-query";
import { getPropertyList } from "../utils";

const LatestProperties = () => {
  const { status, data } = useQuery("properties", () => getPropertyList({}));

  return (
    <Grid container spacing={2}>
      {status === "loading" && (
        <Container className="text-center p-5">
          <CircularProgress />
        </Container>
      )}
      {status !== "loading" &&
        data?.data?.results.slice(0, 4).map(property => (
          <Grid key={`latest-properties-${property.id}`} item xs={3}>
            <Link to={`/property/?id=${property.identifier}`}>
              <img
                src={property.pictures[0]}
                className="img-responsive crop-center"
              />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default LatestProperties;
