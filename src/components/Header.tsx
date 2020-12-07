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
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const logo = useStaticQuery(graphql`
    query {
      top: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const linkList = [
    { to: "/properties/rent", text: "Alquiler" },
    { to: "/properties/sale", text: "Venta" },
    { to: "/about", text: "Quienes Somos" },
    { to: "/contact", text: "Contacto" },
  ];

  const toggleDrawer = (open: boolean) => (event: any) => {
    setIsDrawerOpen(open);
  };

  const NavList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="side-menu"
    >
      <div className="side-menu--logo">
        <Link to="/">
          <Img fixed={logo.top.childImageSharp.fixed} alt={siteTitle} />
        </Link>
      </div>
      <List disablePadding className="side-menu--list">
        {/* <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Alquiler" />
        </ListItem> */}
        {linkList.map(link => (
          <Link to={link.to} activeClassName="active">
            <ListItem button>{link.text}</ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Img fixed={logo.top.childImageSharp.fixed} alt={siteTitle} />
          </Link>
          <Hidden smDown>
            <List className="top-menu ml-auto">
              {linkList.map(link => (
                <ListItem>
                  <Link to={link.to} activeClassName="active">
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              className="ml-auto"
              onClick={toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
            <SwipeableDrawer
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <NavList />
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
