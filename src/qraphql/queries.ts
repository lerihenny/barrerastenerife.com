import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

export const propertyImages = () => {
  interface PropertyImages {
    childImageSharp: {
      fluid: FluidObject;
    };
  }

  const query: PropertyImages = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "properties/property1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "properties/property2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "properties/property3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "properties/property4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return query;
};
