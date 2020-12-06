import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Property } from "../../models/Property";
import PropertyCard from "./PropertyCard";

interface Props {
  featured?: boolean;
  title?: string;
  properties: Property[];
}

const List: React.FC<Props> = ({
  featured = false,
  title = "Propiedades",
  properties,
}) => {
  return (
    <Container>
      <Grid container spacing={3} className="properties-container">
        <Grid item xs={12}>
          <h2 className="properties-container-title">
            {featured ? "Propiedades Destacadas" : title}
          </h2>
        </Grid>
        {properties.map(property => (
          <Grid
            key={`property-${property.id}`}
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
          >
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;
