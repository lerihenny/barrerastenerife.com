import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const ContactPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const ContactField = ({ id, label }) => {
    return (
      <>
        <InputLabel shrink htmlFor={id} classes={{ root: "mb-3 mt-3" }}>
          {label}
        </InputLabel>
        <TextField fullWidth id={id} size="small" variant="filled" />
      </>
    );
  };

  const ContactBlock = ({ icon, title, text }) => {
    return (
      <Grid
        item
        container
        xs={12}
        spacing={2}
        alignItems="center"
        className="contact-block"
      >
        <Grid item xs={2} className="text-right">
          {icon}
        </Grid>
        <Grid container item xs={10}>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" component="p">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12} sm={5} className="contact-section">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt=""
            className="img-responsive crop-center"
          />
          <div className="contact-data">
            <Grid container spacing={2}>
              <ContactBlock
                icon={<RoomIcon fontSize="large" />}
                title="Dirección"
                text="Av. Los Abrigos, 32. Los Abrigos. Santa Cruz de Tenerife."
              />
              <ContactBlock
                icon={<PhoneIcon fontSize="large" />}
                title="Teléfono"
                text="+34 638 41 89 17"
              />
              <ContactBlock
                icon={<EmailIcon fontSize="large" />}
                title="Correo"
                text="contacto@barrerastenerife.com"
              />
            </Grid>
          </div>
        </Grid>
        <Grid container item xs={12} sm={7}>
          <div className="contact-form about-title">
            <h1>Contáctanos</h1>
            <h3>
              ¿Tienes preguntas? Estamos para ayudarte con lo que necesites.
            </h3>
            <form>
              <ContactField id="contact-name" label="Nombre" />
              <ContactField id="contact-email" label="Correo" />
              <ContactField id="contact-message" label="Mensaje" />
              <Button
                variant="contained"
                color="primary"
                size="large"
                classes={{ root: "mb-5 mt-5" }}
                // startIcon={<SearchIcon />}
              >
                Enviar
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactPage;
