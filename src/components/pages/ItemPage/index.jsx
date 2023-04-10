import React, { useEffect, useState } from "react";
import md5 from "md5";
import { useParams, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import Information from "../../Information";
import Header from "../../Header";
import Footer from "../../Footer";

const ItemPage = ({ setId }) => {
  const { id } = useParams();
  const location = useLocation();
  const element = location.pathname.split("/")[1];
  const [item, setItem] = useState(null);
  const apiKey = "2014db88991539ad5fe113d6ba4b49ab";
  const privateKey = "f8651f9e58eb5babbb2ec6b99c0b0729c05afe69";
  const [category, setCategory] = useState(element);

  useEffect(() => {
    const fetchItem = async () => {
      const timestamp = Date.now().toString();
      const hash = md5(timestamp + privateKey + apiKey);
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/${element}s/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
      );
      const data = await response.json();
      setItem(data.data.results[0]);
    };
    fetchItem();
  }, [id, apiKey, privateKey]);
  if (!item) {
    return (
      <>
        <Header setCategory={setCategory} setId={setId} />

        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />;
        </div>

        <Footer />
      </>
    );
  }
  return (
    <>
      <Header setCategory={setCategory} setId={setId} />
      <Information item={item} id={id} element={element} />
      <Footer />
    </>
  );
};

export default ItemPage;
