import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";
import { Card } from "@material-ui/core";
import PropertyDescription from "./PropertyDescription";
import PropertyFooter from "./PropertyFooter";
import { Property } from "../../models/Property";

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <Link to="/property">
      <Card>
        <div className="property-card-media">
          <Img
            fluid={property.image}
            alt={property.title}
            className="img-responsive crop-center"
          />
        </div>
        <PropertyDescription
          price={property.price}
          title={property.title}
          address={property.address}
        />
        <PropertyFooter />
      </Card>
    </Link>
  );
};

export default PropertyCard;
