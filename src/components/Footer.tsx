import React from "react"
import { Grid } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"

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
  `)

  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm>
          <Link to="/">
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </Link>
          <div className="footer-social">
            <Link to="/" className="mr-3">
              <FacebookIcon />
            </Link>
            <Link to="/" className="mr-3">
              <InstagramIcon />
            </Link>
            <Link to="/" className="mr-3">
              <YouTubeIcon />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm>
          <p className="footer-title">Propiedades Destacadas</p>
        </Grid>
        <Grid item xs={12} sm>
          <p className="footer-title">Contacto</p>
          <p>Av. Los Abrigos, 32</p>
          <p>38618 Los Abrigos</p>
          <p>Santa Cruz de Tenerife</p>
          <p>+34 822 29 81 28</p>
        </Grid>
        <Grid item xs={12} className="text-center">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
