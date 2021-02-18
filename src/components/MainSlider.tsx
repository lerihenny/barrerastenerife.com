import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Container, Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "./Select";
import * as constants from "../constants";
import { useI18next } from "gatsby-plugin-react-i18next";
import ImageGallery from "react-image-gallery";

const MainSlider: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "properties/property5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "properties/property3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "properties/property4.jpeg" }) {
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
            tKey="zones"
            label={t("constants.fields.zone")}
            items={constants.zones}
            value={state.zones}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className="color-white"
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
      <ImageGallery
        items={[
          {
            original: data.image1.childImageSharp.fluid.src,
            srcSet: data.image1.childImageSharp.fluid.srcSet,
            sizes: data.image1.childImageSharp.fluid.sizes,
          },
          // {
          //   original: data.image2.childImageSharp.fluid.src,
          //   srcSet: data.image2.childImageSharp.fluid.srcSet,
          //   sizes: data.image2.childImageSharp.fluid.sizes,
          // },
          // {
          //   original: data.image3.childImageSharp.fluid.src,
          //   srcSet: data.image3.childImageSharp.fluid.srcSet,
          //   sizes: data.image3.childImageSharp.fluid.sizes,
          // },
        ]}
        slideInterval={7000}
        autoPlay={true}
        lazyLoad={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        disableKeyDown={true}
        disableSwipe={true}
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
