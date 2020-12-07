import React from "react";
import { Button, Grid } from "@material-ui/core";
import { PageProps, navigate } from "gatsby";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} className="text-center">
        <h1 className="error-title">404</h1>
      </Grid>
      <Grid item xs={12} className="text-center">
        <p className="error-description">
          Oops, ocurrió un error. Página no encontrada.
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIosIcon />}
        >
          Volver
        </Button>
      </Grid>
    </Grid>
  </Layout>
);

export default NotFoundPage;
