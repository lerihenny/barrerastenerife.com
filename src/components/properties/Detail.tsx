import React from "react";
import {
  CircularProgress,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import PropertyFooter from "./PropertyFooter";
import { formatPrice } from "../../utils";
import MapView from "../maps/MapView";
import { Property } from "../../models/Property";

const Detail = ({ property }: { property: Property | undefined }) => {
  if (!property) {
    return (
      <Container className="text-center p-5">
        <CircularProgress />
      </Container>
    );
  }

  console.log(property);

  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          justify="center"
          className="properties-container"
        >
          <Grid item xs={12}>
            <ImageGallery items={property.pictures} />
          </Grid>
          <Grid item xs={12}>
            <div className="property-data MuiPaper-elevation5">
              <h2 className="property-data-price">
                {formatPrice(
                  property.selling
                    ? property.selling_cost
                    : property.renting_cost
                )}
              </h2>
              <hr />
              <h2 className="property-data-title">{property.zone}</h2>
              <h3 className="property-data-address">{property.town}</h3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ marginBottom: "20px" }}>
              <CardHeader title="Información básica" />
              <PropertyFooter
                detail={true}
                area={property.area}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
              />
            </Card>

            <Card>
              <CardHeader title="Descripción" />
              <CardContent>{property.description}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <MapView lat={property.geo_lat} lng={property.geo_lng} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;
