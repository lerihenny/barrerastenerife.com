import React from "react";
import Slider from "react-slick";
import { Container, Typography, Link, Tooltip } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

const partners = [
  {
    image: "logo",
    name: "Barreras Tenerife",
    url: "https://barrerastenerife.com",
  },
  {
    image: "logo",
    name: "Barreras Tenerife",
    url: "https://barrerastenerife.com",
  },
  {
    image: "logo",
    name: "Barreras Tenerife",
    url: "https://barrerastenerife.com",
  },
  {
    image: "logo",
    name: "Barreras Tenerife",
    url: "https://barrerastenerife.com",
  },
  {
    image: "logo",
    name: "Barreras Tenerife",
    url: "https://barrerastenerife.com",
  },
];

const Partnerships = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-navbar-2.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <Container>
      <div className="mb-10 text-center">
        <Typography variant="h4" component="p" className="section-title">
          {t("partnerships")}
        </Typography>
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          arrows={false}
          autoplaySpeed={5000}
        >
          {partners.map((partner, index) => (
            <div key={`${index}-partner`} className="flex-center">
              <Link href={partner.url} target="_blank" rel="noopener">
                <Tooltip title={partner.name} placement="top">
                  <Img fixed={images[partner.image].childImageSharp.fixed} />
                </Tooltip>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Partnerships;
