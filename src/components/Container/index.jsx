import React, { useEffect, useState } from "react";
import md5 from "md5";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = ({ id, element, item }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "2014db88991539ad5fe113d6ba4b49ab";
      const privateKey = "f8651f9e58eb5babbb2ec6b99c0b0729c05afe69";
      const ts = Date.now();
      const hash = md5(ts + privateKey + apiKey);
      let allItems = [];
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/${item}?ts=${ts}&apikey=${apiKey}&hash=${hash}&${element}s=${id}`
      );
      const data = await response.json();
      allItems = allItems.concat(data.data.results);
      if (item === "characters") {
        allItems = allItems.map((x) => {
          return {
            name: x.name,
            image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
            id: x.id,
            category: item.slice(0, -1),
          };
        });
      }
      if (item === "series" || item === "events" || item === "comics") {
        allItems = allItems.map((x) => {
          return {
            name: x.title,
            image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
            id: x.id,
            category: item.slice(0, -1),
          };
        });
      }
      if (allItems.length > 20) {
        allItems = allItems.slice(0, 20);
      }
      setItems(allItems);
    };
    fetchData();
  }, []);
  return (
    <>
      <ItemsList>
        {items.map((item) => (
          <Card key={item.id}>
            <ItemLink to={`/${item.category}/${item.id}`}>
              <Name>{item.name}</Name>
              <Icon src={item.image} width="100px" />
            </ItemLink>
          </Card>
        ))}
      </ItemsList>
    </>
  );
};

export default Container;

const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
`;
const Card = styled.li`
  width: 200px;
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const ItemLink = styled(Link)`
  text-decoration: none;
`;
const Icon = styled.img`
  width: 100px;
  border: solid 1px white;
`;

const Name = styled.p`
  color: black;
  text-decoration: none;
`;
