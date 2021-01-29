import React from "react";
import { PageProps } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import List from "../../components/properties/List";
import SearchForm from "../../components/properties/SearchForm";
import { contract } from "../../constants";
import Pagination from "@material-ui/lab/Pagination";
import { Search } from "../../models/Search";
import { getPropertyList } from "../../utils";

const Properties: React.FC<PageProps> = ({ data }) => {
  const title = "Compra";
  const [page, setPage] = React.useState(1);
  const [properties, setProperties] = React.useState([]);
  const [filter, setFilter] = React.useState<Search>({
    buyop: "sell",
    page,
  });

  React.useEffect(() => {
    getPropertyList({ ...filter, page }).then(response =>
      setProperties(response.data.results)
    );
  }, [filter, page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Layout>
      <SEO title={title} />
      <SearchForm contrato={contract.indexOf(title)} setFilter={setFilter} />
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
