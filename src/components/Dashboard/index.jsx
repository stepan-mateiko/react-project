import React, { useState, useEffect } from "react";
import md5 from "md5";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Dashboard = ({ element }) => {
  const [items, setItems] = useState([]);
  const invalidImg =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

  useEffect(() => {
    const fetchItems = async () => {
      setItems([]);
      const apiKey = "2014db88991539ad5fe113d6ba4b49ab";
      const privateKey = "f8651f9e58eb5babbb2ec6b99c0b0729c05afe69";
      const ts = Date.now();
      const hash = md5(ts + privateKey + apiKey);
      let allItems = [];
      let offset =
        element === "event"
          ? 0
          : element === "serie"
          ? 0
          : Math.floor(Math.random() * 1001);

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/${element}s?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&offset=${offset}`
      );
      const data = await response.json();
      allItems = allItems.concat(data.data.results);
      if (element === "character") {
        allItems = allItems
          .sort((a, b) => b.stories.available - a.stories.available)
          .filter((x) => x.thumbnail.path !== invalidImg)
          .map((x) => {
            return {
              name: x.name,
              image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
              id: x.id,
            };
          });
      }
      if (element === "event" || element === "serie") {
        allItems = allItems
          .filter((x) => x.thumbnail.path !== invalidImg)
          .map((x) => {
            return {
              name: x.title,
              image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
              id: x.id,
            };
          });
      }
      if (element === "comic") {
        allItems = allItems
          .sort((a, b) => b.characters.available - a.characters.available)
          .filter((comic) => comic.images[0])
          .map((x) => {
            return {
              name: x.title,
              image: `${x.images[0].path}.${x.images[0].extension}`,
              id: x.id,
            };
          });
      }
      allItems = allItems.slice(0, 20);
      setItems(allItems);
    };
    fetchItems();
  }, [element]);
  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <DashboardPanel>
      <DashboardTitle>{`Or discover other random ${element}s`}</DashboardTitle>
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

const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blueviolet;
  font-family: Open-sans, sans-serif;
`;
const DashboardTitle = styled.h2`
  color: floralwhite;
  font-size: 28px;
  text-align: center;
`;
const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  justify-content: center;
  padding: 0;
`;
const Card = styled.li`
  width: 20%;
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 360px) {
    width: 100%;
  }
`;

const DashboardLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Icon = styled.img`
  width: 60%;
  border: solid 1px white;
`;

const Name = styled.p`
  color: white;
`;
