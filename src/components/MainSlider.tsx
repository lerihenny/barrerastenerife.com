import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Button, Container, Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "./Select";
import * as constants from "../constants";
import { useI18next } from "gatsby-plugin-react-i18next";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "properties/property1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const SearchForm = () => {
    const { t, navigate } = useI18next();

    const [state, setState] = React.useState({
      types: 0,
      contract: 0,
      cities: 0,
      zones: 0,
    });

    const handleChange = (event: any) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSearch = () => {
      navigate("/properties/search", { state });
    };

    return (
      <div className="main-search-form MuiPaper-elevation3">
        <form>
          <Select
            tKey="types"
            label={t("constants.fields.type")}
            items={constants.types}
            value={state.types}
            onChange={handleChange}
          />
          <Select
            tKey="contract"
            label={t("constants.fields.contract")}
            items={constants.contract}
            value={state.contract}
            onChange={handleChange}
          />
          <Select
            tKey="cities"
            label={t("constants.fields.city")}
            items={constants.municipios}
            value={state.cities}
            onChange={handleChange}
          />
          <Select
            tKey="zones"
            label={t("constants.fields.zone")}
            items={constants.localidades}
            value={state.zones}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            {t("search")}
          </Button>
        </form>
      </div>
    );
  };

  const PropertyData = () => {
    return (
      <div className="main-slider-property-data">
        <h2 className="">Where Dreams Come Home</h2>
      </div>
    );
  };

  return (
    <section className="main-slider">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt=""
        className="img-responsive crop-center"
      />
      <Container className="main-slider-container">
        <Hidden xsDown>
          <SearchForm />
        </Hidden>
        <PropertyData />
      </Container>
    </section>
  );
};

export default MainSlider;
