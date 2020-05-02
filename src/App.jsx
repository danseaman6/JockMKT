import React, { useState, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import "./styles/App.css";
import wretch from "wretch";
import PropTypes from "prop-types";
import Table from "./Table";

function App({ title }) {
  const [eventStocks, setEventStocks] = useState([]);

  useEffect(() => {
    wretch("/eventstocks")
      .get()
      .json(result => {
        setEventStocks(result.event_stocks);
      })
      .catch();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "stock.name",
        filter: "fuzzyText",
        disableSortBy: true
      },
      {
        Header: "Head Shot",
        accessor: "stock.image_url",
        disableSortBy: true,
        disableFilters: true,
        // eslint-disable-next-line react/prop-types
        Cell: ({ cell: { value } }) => <img src={value} alt="" />
      },
      {
        Header: "Projected Points",
        accessor: "fantasy_points_projected",
        sortType: "basic",
        disableFilters: true
      },
      {
        Header: "Actual Points",
        accessor: "fantasy_points_scored",
        sortType: "basic",
        disableFilters: true
      },
      {
        Header: "Last Trade Price",
        accessor: "last_price",
        sortType: "basic",
        disableFilters: true
      }
    ],
    []
  );

  return (
    <Container className="App">
      <h1>{title}</h1>
      <h2>Event Stocks</h2>
      {/* eslint-disable-next-line react/button-has-type */}
      <br />
      {eventStocks && (
        <Table columns={columns} data={Object.values(eventStocks)} />
      )}
    </Container>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
