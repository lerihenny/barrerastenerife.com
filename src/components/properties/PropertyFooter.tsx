import React from "react";
import { CardActions, Grid } from "@material-ui/core";
import CropFreeIcon from "@material-ui/icons/CropFree";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import FooterItem from "./PropertyFooterItem";

interface Props {
  detail?: boolean;
  area: number;
  bedrooms: number;
  bathrooms: number;
}

const PropertyFooter: React.FC<Props> = ({
  detail = false,
  area,
  bedrooms,
  bathrooms,
}) => {
  return (
    <CardActions
      classes={{ root: `property-card-actions${detail ? "--detail" : ""}` }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FooterItem
            detail={detail}
            title="Área"
            value={area}
            component={CropFreeIcon}
          />
        </Grid>
        <Grid item xs={4}>
          <FooterItem
            detail={detail}
            title="Habitaciones"
            value={bedrooms}
            component={HotelIcon}
          />
        </Grid>
        <Grid item xs={4}>
          <FooterItem
            detail={detail}
            title="Baños"
            value={bathrooms}
            component={BathtubIcon}
          />
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default PropertyFooter;
