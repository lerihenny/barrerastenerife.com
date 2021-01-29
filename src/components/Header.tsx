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
  Slide,
  SwipeableDrawer,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

interface Props {
  siteTitle: string;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header: React.FC<Props> = ({ siteTitle = "", ...rest }) => {
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
    { to: "/properties/buy", text: "Compra" },
    { to: "/properties/rent", text: "Alquiler" },
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
        {linkList.map((link, index) => (
          <Link
            key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
            to={link.to}
            activeClassName="active"
          >
            <ListItem button>{link.text}</ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <HideOnScroll {...rest}>
      <AppBar position="fixed">
        <Hidden smDown>
          <div className="contact-bar">
            <Container className="text-right">
              <List>
                <ListItem dense>+34 638 41 89 17</ListItem>
                <ListItem dense>
                  <a
                    href="mailto:contacto@barrerastenerife.com"
                    target="_blank"
                  >
                    contacto@barrerastenerife.com
                  </a>
                </ListItem>
              </List>
            </Container>
          </div>
        </Hidden>
        <Container className="m-5">
          <Toolbar disableGutters>
            <Link to="/">
              <Img fixed={logo.top.childImageSharp.fixed} alt={siteTitle} />
            </Link>
            <Hidden smDown>
              <List className="top-menu ml-auto">
                {linkList.map((link, index) => (
                  <ListItem
                    key={`${link.text
                      .toLowerCase()
                      .replace(" ", "-")}-${index}`}
                  >
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
    </HideOnScroll>
  );
};

export default Header;
