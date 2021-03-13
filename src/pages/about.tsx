import React from "react";
import { PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
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
      gian: file(relativePath: { eq: "team/gian.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      irina: file(relativePath: { eq: "team/irina.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maryna: file(relativePath: { eq: "team/maryna.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fr: file(relativePath: { eq: "flags/fr.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      de: file(relativePath: { eq: "flags/de.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { t } = useTranslation();

  const Team = ({
    image,
    name,
    phone,
    languages,
  }: {
    image: FluidObject;
    name: string;
    phone: string;
    languages: string[];
  }) => {
    return (
      <Grid item xs={9} sm={3}>
        <Card className="team-card">
          <div className="team-image">
            <Img
              fluid={image}
              alt={name}
              className="img-responsive crop-center"
            />
          </div>
          <CardContent className="team-container text-center">
            <p className="team-name">{name}</p>
            <hr />
            <p className="team-position">{phone}</p>
            <div className="team-flags">
              {languages.includes("es") && (
                <Img fixed={images.es.childImageSharp.fixed} alt="es" />
              )}
              {languages.includes("en") && (
                <Img fixed={images.en.childImageSharp.fixed} alt="en" />
              )}
              {languages.includes("fr") && (
                <Img fixed={images.fr.childImageSharp.fixed} alt="fr" />
              )}
              {languages.includes("it") && (
                <Img fixed={images.it.childImageSharp.fixed} alt="it" />
              )}
              {languages.includes("de") && (
                <Img fixed={images.de.childImageSharp.fixed} alt="de" />
              )}
              {languages.includes("ru") && (
                <Img fixed={images.ru.childImageSharp.fixed} alt="ru" />
              )}
            </div>
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
            <Typography gutterBottom>{t("about.p1")}</Typography>
            <Typography gutterBottom>{t("about.p2")}</Typography>
          </Grid>
          <Grid xs={12} style={{ padding: "8px" }}>
            <Typography gutterBottom>{t("about.p3")}</Typography>
            <Typography gutterBottom>{t("about.p4")}</Typography>
            <Typography gutterBottom>{t("about.p5")}</Typography>
          </Grid>
        </Grid>
      </Container>

      <Hidden smDown>
        <Banner size="medium">
          <div>
            <Typography variant="h4" align="center" gutterBottom>
              {t("about.banner.p1")}
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              {t("about.banner.p2")}
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              {t("about.banner.p3")}
            </Typography>
          </div>
        </Banner>
      </Hidden>

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
              {t("about.time.p1")}
            </Typography>
            <Typography gutterBottom>{t("about.time.p2")}</Typography>
            <Typography gutterBottom>{t("about.time.p3")}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="circle">
              <Typography variant="h3" className="font-bold">
                22k
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              {t("about.comunication.p1")}
            </Typography>
            <Typography gutterBottom>{t("about.comunication.p2")}</Typography>
            <Typography gutterBottom>{t("about.comunication.p3")}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="circle">
              <Typography variant="h3" className="font-bold">
                4.8
              </Typography>
            </div>
            <Typography variant="h5" gutterBottom>
              {t("about.rating.p1")}
            </Typography>
            <Typography gutterBottom>{t("about.rating.p2")}</Typography>
            <Typography gutterBottom>{t("about.rating.p3")}</Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" className="team-section text-center">
          <Grid item xs={12}>
            <Typography variant="h4" component="p" className="section-title">
              {t("about.team")}
            </Typography>
          </Grid>
          <Team
            image={images.gian.childImageSharp.fluid}
            name="Giambattista Guala"
            phone="+34 638 418 917"
            languages={["es", "en", "fr", "it"]}
          />
          <Team
            image={images.maryna.childImageSharp.fluid}
            name="Maryna Bohush"
            phone="+34 671 616 456"
            languages={["es", "en", "it", "ru"]}
          />
          <Team
            image={images.irina.childImageSharp.fluid}
            name="Irina Elistratova"
            phone="+34 653 414 149"
            languages={["es", "en", "de", "it", "ru"]}
          />
        </Grid>

        <Typography
          id="services"
          variant="h4"
          component="p"
          className="section-title"
        >
          {t("about.services.title")}
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
              {t("about.services.p1")}
            </Typography>
            <Typography gutterBottom align="left">
              {t("about.services.p2")}
            </Typography>
            <Typography gutterBottom align="left">
              {t("about.services.p3")}
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
      </Container>
    </Layout>
  );
};

export default AboutPage;
