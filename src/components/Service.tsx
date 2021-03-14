import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby-plugin-react-i18next";
import Img, { FluidObject } from "gatsby-image";

type Props = {
  circle?: boolean;
  title: string;
  description: string | string[];
  image: string | FluidObject;
  to: string;
};

export const Service: FC<Props> = ({
  circle = false,
  title,
  description,
  image,
  to,
}) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Link to={to} className="service-container">
        {circle ? (
          <Img
            fluid={image as FluidObject}
            alt={title}
            className="service-image"
          />
        ) : (
          <img src={image as string} alt={title} className="small" />
        )}
        <Typography variant="h5" align="center" className="service-title">
          {title}
        </Typography>
        {Array.isArray(description) ? (
          description.map(p => (
            <Typography align="center" className="service-description">
              {p}
            </Typography>
          ))
        ) : (
          <Typography align="center" className="service-description">
            {description}
          </Typography>
        )}
      </Link>
    </Grid>
  );
};
