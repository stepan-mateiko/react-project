import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import { apiKey, ts, hash } from "../../constants/api";
import Error from "../Error";
import Loader from "../Loader";
import {
  ItemsList,
  Card,
  ItemLink,
  Icon,
  Name,
  ShowButton,
  HideButton,
} from "./styles";

const Container = ({ id, element, item }) => {
  const [items, setItems] = useState([]);
  const [shortList, setShortList] = useState([]);
  const [isExtended, setExtended] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/${item}?ts=${ts}&apikey=${apiKey}&limit=100&hash=${hash}&${element}s=${id}`
        );
        const data = await response.json();
        const isCharacter = item === "characters";
        const allItems = data.data.results.map((x) => {
          return {
            name: isCharacter ? x.name : x.title,
            image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
            id: x.id,
            category: item.slice(0, -1),
          };
        });
        setItems(allItems);
        if (allItems.length > 8) {
          setShortList(allItems.slice(0, 8));
        } else {
          setShortList(allItems);
        }
        setIsLoading(false);
      } catch (error) {
        setError("Sorry, this data isn't avaiable");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const showMore = () => {
    !isExtended ? setShortList(items) : setShortList(items.slice(0, 8));
    !isExtended ? setExtended(true) : setExtended(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <ItemsList>
        {shortList.map((item) => (
          <Card key={item.id}>
            <ItemLink to={`/${item.category}/${item.id}`}>
              <Icon src={item.image} width="100px" />
              <Name>{item.name}</Name>
            </ItemLink>
          </Card>
        ))}
      </ItemsList>
      {!isExtended && !error && (
        <ShowButton variant="outlined" onClick={showMore}>
          Show more
        </ShowButton>
      )}
      {isExtended && !error && (
        <HideButton variant="outlined" onClick={showMore}>
          Show less
        </HideButton>
      )}
      {error && <Error errormessage={error} />}
    </>
  );
};

export default Container;

Container.propTypes = {
  item: propTypes.string,
  id: propTypes.string,
  element: propTypes.string,
};
