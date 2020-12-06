import { CardContent, Chip, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  price: string;
  title: string;
  address: string;
}

const PropertyDescription: React.FC<Props> = ({ price, title, address }) => {
  return (
    <CardContent classes={{ root: "property-card-content" }}>
      <Chip
        label={price}
        color="secondary"
        classes={{ root: "property-card-price" }}
      />
      <Typography variant="h6" component="p">
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {address}
      </Typography>
    </CardContent>
  );
};

export default PropertyDescription;
