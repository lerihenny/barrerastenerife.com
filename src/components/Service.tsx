import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby-plugin-react-i18next";

type Props = {
  title: string;
  description: string;
  image: string;
  to: string;
};

export const Service: FC<Props> = ({ title, description, image, to }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Link to={to} className="service-container">
        <img src={image} alt={title} />
        <Typography variant="h5" align="center" className="service-title">
          {title}
        </Typography>
        <Typography align="center" className="service-description">
          {description}
        </Typography>
      </Link>
    </Grid>
  );
};
