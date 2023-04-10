import React, { useState, useEffect } from "react";
import md5 from "md5";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Search = ({ element }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let name = "";
  if (element === "character" || element === "event") {
    name = "name";
  }
  if (element === "comic" || element === "serie") {
    name = "title";
  }
  const ts = Date.now();
  const apiKey = "2014db88991539ad5fe113d6ba4b49ab";
  const privateKey = "f8651f9e58eb5babbb2ec6b99c0b0729c05afe69";
  const hash = md5(ts + privateKey + apiKey);
  const url = `https://gateway.marvel.com/v1/public/${element}s?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&orderBy=${name}&${name}StartsWith=${searchTerm}`;
  let allItems = [];

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(url);
    const data = await response.json();
    allItems = allItems.concat(data.data.results);
    if (element === "character") {
      allItems = allItems.map((x) => {
        return {
          name: x.name,
          image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
          id: x.id,
        };
      });
    }
    if (element === "event" || element === "serie" || element === "comic") {
      allItems = allItems.map((x) => {
        return {
          name: x.title,
          image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
          id: x.id,
        };
      });
    }
    setItems(allItems);
  };

  return (
    <SearchPanel>
      {console.log(items)}
      <form onSubmit={handleSearch}>
        <TextField
          id="outlined-basic"
          label="Type here"
          variant="outlined"
          size="small"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <ItemsList>
        {items.map((item) => (
          <SearchItem key={item.id}>
            <SearchLink to={`/${element}/${item.id}`}>
              <p>{item.name}</p>
              <img src={item.image} width="100px" />
            </SearchLink>
          </SearchItem>
        ))}
      </ItemsList>
    </SearchPanel>
  );
};

export default Search;

const SearchPanel = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(to bottom, #f5f5f5, #e5e5e5);
`;

const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const SearchItem = styled.li`
  list-style-type: none;
  width: 30%;
`;
const SearchLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
