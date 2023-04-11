import React, { useState, useEffect } from "react";
import md5 from "md5";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button, CircularProgress } from "@mui/material";

const Search = ({ element }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setItems([]);
    setSearchTerm("");
  }, [element]);
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
    setItems([]);
    setIsSearching(true);
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
    setIsSearching(false);
  };

  return (
    <SearchPanel>
      <SearchTitle>{`Search for the ${element}s you want to read about`}</SearchTitle>
      <SearchForm onSubmit={handleSearch}>
        <SearchField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <SearchButton
          variant="contained"
          type="submit"
          color="error"
        >{`Search ${element}`}</SearchButton>
      </SearchForm>
      {isSearching && (
        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />
        </div>
      )}
      <ItemsList>
        {items.map((item) => (
          <SearchItem key={item.id}>
            <SearchLink to={`/${element}/${item.id}`}>
              <Icon src={item.image} />
              <p>{item.name}</p>
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
  background-color: darkslateblue;
  flex-direction: column;
  align-items: center;
  font-family: Open-sans, sans-serif;
  color: floralwhite;
`;
const SearchTitle = styled.h2`
  font-size: 28px;
  text-align: center;
`;
const SearchForm = styled.form`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }
`;
const SearchField = styled(TextField)({
  width: "60%",
  borderRadius: "5%",
  backgroundColor: "mistyrose",
  "& label": {
    color: "red",
  },
  "& label.Mui-focused": {
    color: "crimson",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
      color: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
  "@media(max-width: 768px)": {
    width: "100%",
  },
});
const SearchButton = styled(Button)`
  padding: 15px !important;
`;
const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 0;
`;
const SearchItem = styled.li`
  list-style-type: none;
  width: 20%;
  text-align: center;
  @media (max-width: 360px) {
    width: 100%;
  }
`;
const SearchLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Icon = styled.img`
  width: 60%;
  border: solid 1px white;
`;
