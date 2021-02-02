import React from "react";
import { Grid, Button } from "@material-ui/core";
import Field from "./Field";
import { sendMail } from "../../utils";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = React.useState(false);

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleMail = () => {
    if (state.name !== "" && state.email !== "" && state.message !== "") {
      sendMail(state);
      setSent(true);
      setState({ name: "", email: "", message: "" });
    } else {
      // TODO: Add form validation and error handling
    }
  };

  return (
    <Grid container item xs={12} sm={7}>
      <div className="contact-form about-title">
        <h1>{t("contact.title")}</h1>
        <h3>{t("contact.subtitle")}</h3>
        <form>
          <Field
            id="name"
            label={t("contact.form.name")}
            onChange={handleChange}
            disabled={sent}
            value={state.name}
          />
          <Field
            id="email"
            label={t("contact.form.email")}
            onChange={handleChange}
            disabled={sent}
            value={state.email}
          />
          <Field
            id="message"
            label={t("contact.form.message")}
            onChange={handleChange}
            disabled={sent}
            value={state.message}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            classes={{ root: "mb-5 mt-5" }}
            onClick={handleMail}
            disabled={sent}
          >
            {sent ? t("contact.form.sent") : t("contact.form.send")}
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default Form;
