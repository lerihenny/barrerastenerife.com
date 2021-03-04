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
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Banner } from "../components/Banner";

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
      founder: file(relativePath: { eq: "team/founder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      founder2: file(relativePath: { eq: "team/founder2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service: file(relativePath: { eq: "bg/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team1: file(relativePath: { eq: "team/gian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team2: file(relativePath: { eq: "team/irina.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team3: file(relativePath: { eq: "team/maryna.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { t } = useTranslation();

  const Team = ({ image, name }: { image: FluidObject; name: string }) => {
    return (
      <Grid item xs={9} sm={3}>
        <Card className="team-card">
          <Img fluid={image} alt={name} className="img-responsive team-image" />
          <CardContent className="team-container text-center">
            <p className="team-name">{name}</p>
            <hr />
            <p className="team-position">{t("about.agent")}</p>
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
      <SEO title={t("header.link.about")} />
      <Container>
        <Grid
          container
          spacing={2}
          className="about-content"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={6}>
            <Img
              fluid={images.founder2.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="about-title mb-5">
              <h1>{t("about.title")}</h1>
              <h3>{t("about.subtitle")}</h3>
            </div>
            <Typography gutterBottom>
              BARRERAS inmobiliaria nace en Los Abrigos ubicado en la parte sur
              de la isla de Tenerife en el año 1995.
            </Typography>
            <Typography gutterBottom>
              El fundador, Pablo Barreras, ha seguido así la tradición familiar
              que, durante varias generaciones, ha estado vinculada al ámbito de
              la abogacía y de los negocios.
            </Typography>
          </Grid>
          <Grid xs={12} style={{ padding: "8px" }}>
            <Typography gutterBottom>
              Actualmente, tras la jubilación del fundador de la empresa, sus
              alumnos siguen llevando la gestión, manteniendo los principios y
              los valores del su fundador.
            </Typography>
            <Typography gutterBottom>
              Somos miembros de la Agrupación de Agencias Inmobiliarias, que
              reúne todo el sur de la isla, y que permite la cooperación entre
              profesionales inmobiliarios.
            </Typography>
            <Typography gutterBottom>
              Esta filosofía de trabajo es el presente y el futuro de la
              intermediación inmobiliaria en Tenerife: un sistema que aglutina
              la más amplia oferta inmobiliaria del momento puesta a disposición
              del cliente para que éste obtenga las máximas ventajas a la hora
              de comprar o vender su vivienda.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Banner size="medium">
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            ¿Por qué BARRERAS inmobiliaria?
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Especialistas inmobiliarios comprometidos a obtener los mejores
            resultados posibles para ustedes.
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Los resultados son más importantes que las promesas.
          </Typography>
        </div>
      </Banner>

      <Container className="text-center">
        <Grid container spacing={5} className="about-content">
          <Grid item xs={12} md={4}>
            <div className="circle">
              <Typography variant="h3" className="font-bold">
                10
              </Typography>
              <Typography variant="h6">min</Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              Valoramos Tu Tiempo
            </Typography>
            <Typography gutterBottom>
              ¡Sabemos que tu tiempo vale oro!
            </Typography>
            <Typography gutterBottom>
              Priorizamos atención y dedicación a las necesidades de cada uno de
              nuestro cliente para captar sus prioridades y ofrecer un servicio
              enfocado en el logro de su objetivo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="circle">
              <Typography variant="h3" className="font-bold">
                22k
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              Comunicarse sin estrés
            </Typography>
            <Typography gutterBottom>
              ¡Sabemos que hablar en propio idioma te evita mayor esfuerzo!
            </Typography>
            <Typography gutterBottom>
              Nuestro equipo habla más de 6 idiomas extranjeros para que nada
              impida la comunicación y concentración sobre el objetivo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="circle">
              <Typography variant="h3" className="font-bold">
                4.8
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              Calificación de estrellas del cliente
            </Typography>
            <Typography gutterBottom>
              ¡La satisfacción de nuestros clientes es nuestro objetivo mas
              importante!
            </Typography>
            <Typography gutterBottom>
              Nos sentimos bastante honrados de que los clientes de BARRERAS
              valoren nuestro servicio con una calificación promedio de 4.8
              estrellas sobre 5.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h4" component="p" className="section-title">
          {t("about.services")}
        </Typography>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Img
              fluid={images.service.childImageSharp.fluid}
              alt=""
              className="img-responsive about-image"
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography gutterBottom align="left">
              BARRERAS ofrece una gama completa de servicios inmobiliarios. Nos
              especializamos en la venta de propiedades residenciales,
              turísticas, comerciales y rurales, así como en servicios de
              administración de propiedades.
            </Typography>
            <Typography gutterBottom align="left">
              Sabemos que los clientes inmobiliarios quieren tratar con
              consultores que tengan conocimiento, experiencia, honestidad e
              integridad, y que estén comprometidos a lograr el mejor resultado
              posible para ellos.
            </Typography>
            <Typography gutterBottom align="left">
              Por encima de todo, quieren tratar con personas cercanas, por eso
              nos enfocamos absolutamente en crear una relación de confianza y
              respeto con todos nuestros clientes.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5} justify="center" className="about-content">
          <ServiceBox
            title={t("about.info.title")}
            text={t("about.info.description")}
          />
          <ServiceBox
            title={t("about.consulting.title")}
            text={t("about.consulting.description")}
          />
          <ServiceBox
            title={t("about.investment.title")}
            text={t("about.investment.description")}
          />
          <ServiceBox
            title={t("about.attention.title")}
            text={t("about.attention.description")}
          />
          <ServiceBox
            title={t("about.quality.title")}
            text={t("about.quality.description")}
          />
        </Grid>

        {/* <Grid container justify="center" className="team-section text-center">
          <Grid item xs={12}>
            <Typography variant="h4" component="p" className="section-title">
              {t("about.team")}
            </Typography>
          </Grid>
          <Team
            image={images.team1.childImageSharp.fluid}
            name="Giambattista Guala"
          />
          <Team
            image={images.team2.childImageSharp.fluid}
            name="Maryna Bohush"
          />
          <Team
            image={images.team3.childImageSharp.fluid}
            name="Irina Elistratova"
          />
        </Grid> */}
      </Container>
    </Layout>
  );
};

export default AboutPage;
