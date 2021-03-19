import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

export const PromotionContainer = () => {
  const promotions = [
    {
      id: "IB-AG330",
      type: "amarilla",
      name: "Amarilla Golf",
    },
    {
      id: "IB-VAG01",
      type: "greensouth",
      name: "Green South Villas",
    },
    {
      id: "CIB-VIQ",
      type: "tejita",
      name: "La Tejita",
    },
    // {
    //   id: "IB-EM290",
    //   type: "medano",
    //   name: "El Médano",
    // },
    // {
    //   id: "CIB-ER240",
    //   type: "roque",
    //   name: "El Roque",
    // },
    // {
    //   id: 'IB-AR810',
    //   type: "jardines",
    //   name: "Los Jardines de Abama",
    // },
    // {
    //   id: 1,
    //   type: "abama",
    //   name: "Las Terrazas en Abama Resort",
    // },
    // {
    //   id: 3,
    //   type: "atalayas",
    //   name: "Las Atalayas de Abama",
    // },
    // {
    //   id: 7,
    //   type: "tenis",
    //   name: "Villas del Tenis",
    // },
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
      greensouth: file(relativePath: { eq: "promotions/green.jpg" }) {
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
      medano: file(relativePath: { eq: "promotions/tenis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roque: file(relativePath: { eq: "promotions/tenis.jpg" }) {
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
          <Grid key={promotion.id} item xs={12} sm={6} md={4}>
            <Link to={`/property/list/?id=${promotion.id}`}>
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
