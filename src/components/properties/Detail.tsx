import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import PropertyFooter from "./PropertyFooter";
import { propertyImages } from "../../qraphql/queries";
import { imageSetBySize } from "../../utils";
import MapView from "../maps/MapView";
import { Property } from "../../models/Property";

interface Images {
  original: string;
  thumbnail?: string;
}

const Detail = ({ property }: { property: Property }) => {
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
              <h2 className="property-data-price">{`€ ${
                property.selling ? property.selling_cost : property.renting_cost
              }`}</h2>
              <hr />
              <h2 className="property-data-title">Casa bonita</h2>
              <h3 className="property-data-address">
                {`${property.street} - ${property.town}`}
              </h3>
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
        </Grid>
      </Container>
      <MapView lat={property.geo_lat} lng={property.geo_lng} />
    </>
  );
};

export default Detail;
