import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

import { makingList } from "./makingList";
import { apiKey, ts, hash } from "../../constants/api";
import Loader from "../Loader";
import Error from "../Error";
import {
  DashboardPanel,
  DashboardTitle,
  Container,
  Card,
  DashboardLink,
  Icon,
  Name,
} from "./styles";

const Dashboard = ({ element }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setItems([]);
      setIsLoading(true);
      const isEventOrSerie = element === "event" || element === "serie";
      let offset = isEventOrSerie ? 0 : Math.floor(Math.random() * 1001);
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/${element}s?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&offset=${offset}`
        );
        const data = await response.json();
        setItems(makingList(element, data.data.results));
        setIsLoading(false);
      } catch (error) {
        setError("Sorry, this data isn't avaiable");
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [element]);

  return (
    <DashboardPanel>
      <DashboardTitle>{`Or discover other random ${element}s`}</DashboardTitle>
      {isLoading && <Loader />}
      {error && <Error errormessage={error} />}
      <Container>
        {items.map((item) => (
          <Card key={item.id}>
            <DashboardLink to={`/${element}/${item.id}`}>
              <Icon src={item.image} />
              <Name>{item.name}</Name>
            </DashboardLink>
          </Card>
        ))}
      </Container>
    </DashboardPanel>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  element: propTypes.string,
};
