import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Grid } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Block from "../components/contact/Block";
import Form from "../components/contact/Form";
import MapView from "../components/maps/MapView";
import { useTranslation } from "gatsby-plugin-react-i18next";

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

  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("header.link.contact")} />
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12} sm={5} className="contact-section">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt=""
            className="img-responsive crop-center"
          />
          <div className="contact-data">
            <Grid container spacing={2}>
              <Block
                icon={<RoomIcon fontSize="large" />}
                title={t("contact.address")}
                text="Av. Los Abrigos, 32. Los Abrigos. Santa Cruz de Tenerife."
              />
              <Block
                icon={<PhoneIcon fontSize="large" />}
                title={t("contact.phone")}
                text="+34 822 29 81 28 / +34 638 41 89 17"
              />
              <Block
                icon={<EmailIcon fontSize="large" />}
                title={t("contact.email")}
                text="info@barrerastenerife.com"
              />
            </Grid>
          </div>
        </Grid>
        <Form />
      </Grid>
      <MapView />
    </Layout>
  );
};

export default ContactPage;
