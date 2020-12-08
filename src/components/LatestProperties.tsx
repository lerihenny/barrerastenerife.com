import React from "react";
import { Link } from "gatsby";
import { Grid } from "@material-ui/core";
import Img from "gatsby-image";
import { useRepository } from "../context/repository";

const LatestProperties = () => {
  const { properties } = useRepository();

  return (
    <Grid container spacing={2}>
      {properties.map(property => (
        <Grid key={`latest-properties-${property.id}`} item xs={3}>
          <Link to={`/property`}>
            <Img
              fluid={property.image}
              alt={property.title}
              className="img-responsive crop-center"
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestProperties;
