import React from "react"
import { CardActions, Grid, Tooltip } from "@material-ui/core"
import CropFreeIcon from "@material-ui/icons/CropFree"
import HotelIcon from "@material-ui/icons/Hotel"
import BathtubIcon from "@material-ui/icons/Bathtub"

const PropertyFooter: React.FC = () => {
  return (
    <CardActions classes={{ root: "property-card-actions" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Tooltip title="Área" placement="top">
            <span className="flex-center">
              <CropFreeIcon className="mr-3" /> 120m
            </span>
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <Tooltip title="Habitaciones" placement="top">
            <span className="flex-center">
              <HotelIcon className="mr-3" /> 2
            </span>
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <Tooltip title="Baños" placement="top">
            <span className="flex-center">
              <BathtubIcon className="mr-3" /> 1
            </span>
          </Tooltip>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default PropertyFooter
