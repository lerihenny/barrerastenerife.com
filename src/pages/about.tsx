import React from "react";
import { PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Card, CardContent, Container, Grid, Hidden } from "@material-ui/core";

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

  interface Props {
    image: FluidObject;
    name: string;
  }

  const Team: React.FC<Props> = ({ image, name }) => {
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

  return (
    <Layout>
      <SEO title="About" />
      <Hidden smDown>
        <Img
          fluid={images.banner.childImageSharp.fluid}
          alt=""
          className="img-responsive crop-center"
        />
      </Hidden>
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className="about-content"
        >
          <Grid item xs={12}>
            <div className="about-title">
              <h1>Inmobiliaria Barreras</h1>
              <h3>Un servicio de alta calidad</h3>
            </div>
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12} sm={5}>
            <div style={{ backgroundColor: "blue", margin: "0 80px" }}>
              <Img
                fluid={images.team1.childImageSharp.fluid}
                alt=""
                className="img-responsive about-image"
              />
            </div>
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
          <Grid item xs={12}>
            <p>Los servicios que ofrecemos a nuestros clientes:</p>
            <ul>
              <li>
                Información detallada y puntual de las gestiones de compra,
                venta o alquiler de su casa, oficina o local.
              </li>
              <li>Clarificación de dudas y asesoramiento legal y fiscal</li>
              <li>
                Ideas para invertir en inmuebles en Tenerife y asesoramiento a
                particulares que compran piso como vivienda habitual sin animo
                de inversion, sino para vivir y usar el comprador y su familia.
              </li>
              <li>
                Esmerada atención personalizada para clientes recurrentes e
                inversores nacionales o de otros paises.
              </li>
              <li>
                Dinamismo y calidad de servicio el compromiso de no defraudar su
                confianza
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container justify="center" className="team-section">
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
