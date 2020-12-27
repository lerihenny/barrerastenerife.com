import React from "react";
import { PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const AboutPage: React.FC<PageProps> = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bg/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vector: file(relativePath: { eq: "bg/5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team1: file(relativePath: { eq: "team/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team2: file(relativePath: { eq: "team/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team3: file(relativePath: { eq: "team/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team4: file(relativePath: { eq: "team/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const Team = ({ image, name }: { image: FluidObject; name: string }) => {
    return (
      <Grid item xs={9} sm={3}>
        <Card className="team-card">
          <Img fluid={image} alt={name} className="img-responsive team-image" />
          <CardContent className="team-container text-center">
            <p className="team-name">{name}</p>
            <hr />
            <p className="team-position">Agente</p>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const ServiceBox = ({ title, text }: { title: string; text: string }) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className="service-card">
          <CardContent>
            {/* <Avatar className="service-avatar">
              <CheckIcon />
            </Avatar> */}
            <Typography component="p" variant="h5" className="text-uppercase">
              {title}
            </Typography>
            <hr />
            {text}
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className="about-content"
        >
          <Grid item xs={12} sm={6}>
            <div>
              <Img
                fluid={images.vector.childImageSharp.fluid}
                alt=""
                className="img-responsive about-image"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="about-title">
              <h1>Inmobiliaria Barreras</h1>
              <h3>Un servicio de alta calidad</h3>
            </div>
            <p>
              Bienvenidos a su Inmobiliaria. Con el propósito de ofrecer un
              servicio de asesoramiento de alta calidad en sus transacciones
              inmobiliarias, en nosotros encontrará el apoyo y rigor necesarios
              para optimizar una decisión tan importante, somos conscientes de
              nuestra responsabilidad y su satisfacción el mejor estímulo para
              seguir trabajando en esta línea. INMOBILIARIA BARRERAS nace en
              pintoresco pueblo de pescadores de nombre Los Abrigos ubicado en
              la parte sur de la isla de Tenerife en el año 1995. El fundador,
              Pablo Barreras, ha siguido así la tradición familiar que, durante
              varias generaciones, ha estado vinculada al ámbito de la abogacía
              y de los negocios, especialmente inmobiliarios contando con
              agencias colaboradoras pertenecientes al grupo familiar.
            </p>
          </Grid>

          <Grid item xs={12} sm={7}>
            <p>
              Actualmente, tras la jubilacion del fundador de la empresa, sus
              alumnos siguen llevando la gestion, manteniendo los principios y
              los valores del su fundador. Somos miembros del la Agrupacion de
              Agencias Inmobiliarias, que reune todo el sur de la isla, que
              permite la cooperación entre profesionales inmobiliarios. Esta
              filosofía de trabajo es el presente y el futuro de la
              intermediación inmobiliaria en Tenerife: un sistema que aglutina
              la más amplia oferta inmobiliaria del momento puesta a disposición
              del cliente para que éste obtenga las máximas ventajas a la hora
              de comprar o vender su vivienda.
            </p>
          </Grid>

          <Grid item xs={12} sm={5}>
            <div style={{ margin: "0 80px" }}>
              <Img
                fluid={images.team1.childImageSharp.fluid}
                alt=""
                className="img-responsive about-image"
              />
            </div>
          </Grid>

          <Grid item xs={12} className="text-center">
            <Typography variant="h4" component="p" className="section-title">
              Nuestros Servicios
            </Typography>
            <Grid container spacing={5} justify="center">
              <ServiceBox
                title="Información"
                text="Información detallada y puntual de las gestiones de compra, venta o alquiler de su casa, oficina o local."
              />
              <ServiceBox
                title="Asesoría"
                text="Clarificación de dudas y asesoramiento legal y fiscal."
              />
              <ServiceBox
                title="Inversión"
                text="Ideas para invertir en inmuebles en Tenerife y asesoramiento a particulares que compran piso como vivienda habitual."
              />
              <ServiceBox
                title="Atención"
                text="Esmerada atención personalizada para clientes recurrentes e inversores nacionales o de otros paises."
              />
              <ServiceBox
                title="Calidad"
                text="Dinamismo y calidad de servicio el compromiso de no defraudar su confianza."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" className="team-section text-center">
          <Grid item xs={12}>
            <Typography variant="h4" component="p" className="section-title">
              Nuestro Equipo
            </Typography>
          </Grid>
          <Team
            image={images.team2.childImageSharp.fluid}
            name="Giambattista Guala"
          />
          <Team
            image={images.team3.childImageSharp.fluid}
            name="Maryna Bohush"
          />
          <Team
            image={images.team4.childImageSharp.fluid}
            name="Irina Elistratova"
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutPage;
