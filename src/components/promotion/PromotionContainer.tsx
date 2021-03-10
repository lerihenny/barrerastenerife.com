import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

export const PromotionContainer = () => {
  const promotions = [
    {
      id: 1,
      type: "abama",
      name: "Las Terrazas en Abama Resort",
    },
    {
      id: 2,
      type: "amarilla",
      name: "Amarilla Gold",
    },
    {
      id: 3,
      type: "atalayas",
      name: "Las Atalayas de Abama",
    },
    {
      id: 4,
      type: "green",
      name: "Green South Villas",
    },
    {
      id: 5,
      type: "jardines",
      name: "Los Jardines de Abama",
    },
    {
      id: 6,
      type: "tejita",
      name: "La Tejita",
    },
    {
      id: 7,
      type: "tenis",
      name: "Villas del Tenis",
    },
  ];

  const images = useStaticQuery(graphql`
    query {
      abama: file(relativePath: { eq: "promotions/abama.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amarilla: file(relativePath: { eq: "promotions/amarilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      atalayas: file(relativePath: { eq: "promotions/atalayas.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      green: file(relativePath: { eq: "promotions/green.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jardines: file(relativePath: { eq: "promotions/jardines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tejita: file(relativePath: { eq: "promotions/tejita.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tenis: file(relativePath: { eq: "promotions/tenis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        {promotions.map(promotion => (
          <Grid item xs={12} sm={6} md={4}>
            <Link to="#">
              <div className="promotion-container">
                <div className="promotion-overlay" />
                <Img
                  fluid={images[promotion.type].childImageSharp.fluid}
                  alt={promotion.name}
                  className="promotion-image crop-center"
                />
                <Typography
                  className="promotion-title"
                  variant="h5"
                  align="center"
                >
                  {promotion.name}
                </Typography>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
