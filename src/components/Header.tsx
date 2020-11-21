import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  AppBar,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core"
import Menu from "@material-ui/icons/Menu"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
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
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/">
          <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt={siteTitle}
          />
        </Link>
        <Hidden smDown>
          <List className="top-menu ml-auto">
            <ListItem>
              <Link to="/" activeClassName="active">
                Alquiler
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" activeClassName="active">
                Venta
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" activeClassName="active">
                Quienes Somos
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/" activeClassName="active">
                Contacto
              </Link>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className="ml-auto"
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Header
