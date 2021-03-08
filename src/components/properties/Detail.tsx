import React from "react";
import {
  CircularProgress,
  Chip,
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
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next";

const Detail = ({ property }: { property: Property | undefined }) => {
  if (!property) {
    return (
      <Container className="text-center p-5">
        <CircularProgress />
      </Container>
    );
  }

  const { t } = useTranslation();
  const { language } = React.useContext(I18nextContext);

  return (
    <>
      <Container className="image-container">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={6}>
            <ImageGallery
              items={property.pictures}
              lazyLoad={true}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="property-data MuiPaper-elevation5 mb-5">
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

            <Card className="mb-5">
              <CardHeader title={t("properties.info")} />
              <CardContent>
                <PropertyFooter
                  detail={true}
                  area={property.area}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                />
              </CardContent>
              {property.tags.length > 0 && (
                <>
                  <CardHeader title={t("properties.tags")} />
                  <ul className="tag-list">
                    {property.tags.map(tag => (
                      <li>
                        <Chip label={tag} color="primary" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
            <Card className="mb-5">
              <CardHeader title={t("properties.description")} />
              <CardContent>
                {language === "es"
                  ? property.description
                  : property.description_en}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <MapView lat={property.geo_lat} lng={property.geo_lng} />
      </Container>
    </>
  );
};

export default Detail;
