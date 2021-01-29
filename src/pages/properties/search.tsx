import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import List from "../../components/properties/List";
import SearchForm from "../../components/properties/SearchForm";
import firebase from "gatsby-plugin-firebase";
import { type } from "../../constants";
import { Search } from "../../models/Search";
import Pagination from "@material-ui/lab/Pagination";

const Properties: React.FC<PageProps> = () => {
  const title = "Propiedades";
  const [page, setPage] = React.useState(1);
  const [properties, setProperties] = React.useState([]);

  const getPropertyList = (data: Search) => {
    const emulator = firebase.functions();

    if (process.env.NODE_ENV === "development") {
      emulator.useEmulator("localhost", 5001);
    }

    const getProperties = emulator.httpsCallable("getPropertyList");

    getProperties({
      ...data,
      status: "available",
      sort_by: "creation_date_desc",
    })
      .then(response => setProperties(response.data.results))
      .catch(error => console.log("Error", error));
  };

  getPropertyList({
    page,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Layout>
      <SEO title={title} />
      <SearchForm type={type.indexOf(title)} />
      <List title={title} properties={properties} />
      <Pagination
        count={5}
        color="primary"
        size="large"
        page={page}
        onChange={handleChange}
        className="flex-center p-5"
      />
    </Layout>
  );
};

export default Properties;
