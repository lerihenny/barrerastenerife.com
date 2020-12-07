import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              alt={siteTitle}
            />
          </Link>
          <Hidden smDown>
            <List className="top-menu ml-auto">
              <ListItem>
                <Link to="/properties/rent" activeClassName="active">
                  Alquiler
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/properties/sale" activeClassName="active">
                  Venta
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/about" activeClassName="active">
                  Quienes Somos
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/contact" activeClassName="active">
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
      </Container>
    </AppBar>
  );
};

export default Header;
