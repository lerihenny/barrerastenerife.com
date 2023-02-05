import { Container, Hidden, List, Button, ListItem, Collapse, ListItemIcon, Grid, Box} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";

type Props = {
  params: string;
  images: any;
};

const ContactNavBar: FC<Props> = ({ params, images }) => {
  const { languages, originalPath } = useI18next();
  
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };
  var path = window.location.pathname.split('/')[1]
  var [flag, setFlag] = React.useState(path === '' ? 'es' : path);
  const img = getImage(images[flag])
  return (
    // @ts-ignore TODO: Fix react children type error
    <Hidden smDown>
      <div className="contact-bar">
        <Container className="text-right contact-bar" maxWidth="xl">
          <List disablePadding>
            <ListItem dense>(+34) 822 29 81 28</ListItem>
            <ListItem dense>(+34) 638 41 89 17</ListItem>
            <ListItem dense>
              <a href="mailto:info@barrerastenerife.com" target="_blank">
                info@barrerastenerife.com
              </a>
            </ListItem>
            <Button onClick={handleClick}>
              <ListItemIcon>
                {img && <GatsbyImage image={img} alt={flag} />}
              </ListItemIcon>
              {open ? <ChevronLeft /> : <ChevronRight />}
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{mt: 1}}>
                <Grid container spacing={3} justifyContent="space-around">
                    {languages.map(lng => {
                      if(lng !== flag){
                        const flagImage = getImage(images[lng]);
                        return (
                          <Grid item key={lng} onClick={event => setFlag(lng)} xs={3}>
                            <Link to={`${originalPath}${params}`} language={lng} >
                              {flagImage && <GatsbyImage image={flagImage} alt={lng} />}
                            </Link>
                          </Grid>
                        );
                      }
                    })}
                </Grid>
              </Box>
            </Collapse>
          </List>
        </Container>
      </div>
    </Hidden>
  );
};

export default ContactNavBar;
