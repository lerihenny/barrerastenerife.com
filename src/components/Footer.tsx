import React from "react";
import { Grid } from "@material-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LatestProperties from "./LatestProperties";

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <Link to="/">
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </Link>
          <div className="footer-social">
            <a
              href="https://es-es.facebook.com/inmobiliariabarrerastenerife/"
              target="_blank"
              className="mr-3"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/inmobarrerastenerife/"
              target="_blank"
              className="mr-3"
            >
              <InstagramIcon />
            </a>
            {/* <Link to="/" className="mr-3">
              <YouTubeIcon />
            </Link> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="footer-title">Propiedades Recientes</p>
          <LatestProperties />
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="footer-title">Contacto</p>
          <p>Av. Los Abrigos, 32.</p>
          <p>Los Abrigos.</p>
          <p>Santa Cruz de Tenerife.</p>
          <p>38618</p>
          <p>+34 822 29 81 28</p>
          <p>+34 638 41 89 17</p>
        </Grid>
        <Grid item xs={12} className="text-center">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
