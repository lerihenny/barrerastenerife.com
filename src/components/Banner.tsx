import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";

type Props = {
  color?: boolean;
  image?: FluidObject;
  children?: any;
  size?: "small" | "medium" | "large";
};

export const Banner: FC<Props> = ({
  color = true,
  image,
  children,
  size = "large",
}) => {
  return (
    <Grid
      container
      className={`banner-root banner-${size} ${
        color ? "banner-primary-color" : ""
      }`}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {image && (
          <Img
            fluid={image}
            alt=""
            className={`img-responsive crop-banner banner-${size}`}
          />
        )}
        <div
          className={`banner-container banner-${size} ${
            color ? "banner-primary-color" : ""
          }`}
        >
          {children}
        </div>
      </Grid>
    </Grid>
  );
};
