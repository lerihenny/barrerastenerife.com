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
              <h1>{t("about.title")}</h1>
              <h3>{t("about.subtitle")}</h3>
            </div>
            <p>{t("about.p1")}</p>
          </Grid>

          <Grid item xs={12}>
            <p>{t("about.p2")}</p>
          </Grid>

          {/* <Grid item xs={12} sm={5}>
            <div style={{ margin: "0 80px" }}>
              <Img
                fluid={images.team1.childImageSharp.fluid}
                alt=""
                className="img-responsive about-image"
              />
            </div>
          </Grid> */}

          <Grid item xs={12} className="text-center">
            <Typography variant="h4" component="p" className="section-title">
              {t("about.services")}
            </Typography>
            <Grid container spacing={5} justify="center">
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
          </Grid>
        </Grid>
        {/* <Grid container justify="center" className="team-section text-center">
          <Grid item xs={12}>
            <Typography variant="h4" component="p" className="section-title">
              {t("about.team")}
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
        </Grid> */}
      </Container>
    </Layout>
  );
};

export default AboutPage;
