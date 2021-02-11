import React from "react";
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
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

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
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
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
    }
  `);

  const linkList = [
    { to: "/properties/buy", text: t("header.link.buy") },
    { to: "/properties/rent", text: t("header.link.rent") },
    { to: "/about", text: t("header.link.about") },
    { to: "/contact", text: t("header.link.contact") },
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
          <Img fixed={images.logo.childImageSharp.fixed} alt={siteTitle} />
        </Link>
      </div>
      <List disablePadding className="side-menu--list">
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
            <Container className="text-right contact-bar">
              <List>
                <ListItem dense>+34 822 29 81 28</ListItem>
                <ListItem dense>+34 638 41 89 17</ListItem>
                <ListItem dense>
                  <a href="mailto:info@barrerastenerife.com" target="_blank">
                    info@barrerastenerife.com
                  </a>
                </ListItem>
                {languages.map(lng => {
                  return (
                    <ListItem key={lng}>
                      <Link to={originalPath} language={lng}>
                        <Img
                          fixed={images[lng].childImageSharp.fixed}
                          alt={lng}
                        />
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </Container>
          </div>
        </Hidden>
        <Container className="mt-3 mb-3">
          <Toolbar disableGutters>
            <Link to="/" className="logo-link">
              <Img fixed={images.logo.childImageSharp.fixed} alt={siteTitle} />
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
