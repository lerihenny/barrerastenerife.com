import React from "react";
import { Grid, Button } from "@material-ui/core";
import Field from "./Field";

const Form = () => {
  return (
    <Grid container item xs={12} sm={7}>
      <div className="contact-form about-title">
        <h1>Contáctanos</h1>
        <h3>¿Tienes preguntas? Estamos para ayudarte con lo que necesites.</h3>
        <form>
          <Field id="contact-name" label="Nombre" />
          <Field id="contact-email" label="Correo" />
          <Field id="contact-message" label="Mensaje" />
          <Button
            variant="contained"
            color="primary"
            size="large"
            classes={{ root: "mb-5 mt-5" }}
            // startIcon={<SearchIcon />}
          >
            Enviar
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default Form;
