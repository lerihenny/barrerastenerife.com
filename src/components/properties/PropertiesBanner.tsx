import React, { FC } from "react";
import { Container, Typography } from "@material-ui/core";
import { ParallaxBanner } from "react-scroll-parallax";
import { FluidObject } from "gatsby-image";

type Props = {
  image: FluidObject;
  title?: string;
  subtitle?: string;
};

const PropertiesBanner: FC<Props> = ({ image, title, subtitle }) => {
  return (
    <ParallaxBanner
      className="about-container"
      layers={[{ image: image.src, amount: 0.5 }]}
    >
      <div className="about-overlay" />
      <div className="about-text">
        <Container maxWidth="md">
          {title && (
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h4" gutterBottom>
              {subtitle}
            </Typography>
          )}
        </Container>
      </div>
    </ParallaxBanner>
  );
};

export default PropertiesBanner;
