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
  console.log(property);

  return (
    <Link to={`/property/?id=${property.identifier}`}>
      <Card>
        <div className="property-card-media">
          <img
            src={property.pictures[0]}
            alt={property.title}
            className="img-responsive crop-center"
          />
        </div>
        <PropertyDescription
          price={
            property.selling ? property.selling_cost : property.renting_cost
          }
          title={property.town}
          address={property.kind.toUpperCase()}
        />
        <PropertyFooter
          area={property.area}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
        />
      </Card>
    </Link>
  );
};

export default PropertyCard;
