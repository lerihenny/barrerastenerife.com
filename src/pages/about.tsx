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

        <Typography variant="h4" component="p" className="section-title">
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
