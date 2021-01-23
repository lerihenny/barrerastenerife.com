import { CardContent, Chip, Typography } from "@material-ui/core";
import React from "react";
import { formatPrice } from "../../utils";

interface Props {
  price: number;
  title: string;
  address: string;
}

const PropertyDescription: React.FC<Props> = ({ price, title, address }) => {
  return (
    <CardContent classes={{ root: "property-card-content" }}>
      <Chip
        label={formatPrice(price)}
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
