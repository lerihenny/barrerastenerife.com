import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "hooks/useTranslation";

const ExpertRepresentation = () => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "living_room.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const propertyImage = getImage(images.img);

  return (
    <Container className="mb-10 mt-10">
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className="text-uppercase title-font-family"
            align="left"
          >
            REPRESENTACIÒN DE EXPERTOS
          <div className="divider"></div>
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={7} className="center"> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempore voluptatibus temporibus eveniet odit nostrum vero ducimus necessitatibus, placeat nam reiciendis corporis quod veniam! Deserunt similique quaerat voluptatum fugit deleniti!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempore voluptatibus temporibus eveniet odit nostrum vero ducimus necessitatibus, placeat nam reiciendis corporis quod veniam! Deserunt similique quaerat voluptatum fugit deleniti!</p>
            <Grid container spacing={2} justifyContent="center" alignItems="center" className="mt-5 center w-70">
              <Grid item xs={6} justifyContent="center">
                <Button variant="contained" className="btn-barrera">Nueva Promoción</Button>
              </Grid>
              <Grid item xs={6} justifyContent="center">
                <Button variant="contained" className="btn-barrera">Propiedades de Lujo</Button>
              </Grid>
              <Grid item xs={6} justifyContent="center">
                <Button variant="contained" className="btn-barrera">Propiedades</Button>
              </Grid>
              <Grid item xs={6} justifyContent="center">
                <Button variant="contained" className="btn-barrera">Boton</Button>
              </Grid>
              <Grid item xs={12} justifyContent="center" className="center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12318.904171694325!2d-0.36542149999999995!3d39.475517350000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1678904564687!5m2!1ses!2ses" width="250" height="250" loading="lazy" className="circle-img mt-5"></iframe>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} className="center">
            {propertyImage && (
              <GatsbyImage
                image={propertyImage}
                alt="img"
                
              />
            )} 
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ExpertRepresentation;
