import React, { useState } from "react";
import Dashboard from "../../Dashboard";
import Search from "../../Search";
import Header from "../../Header";
import Footer from "../../Footer";

const MainPage = ({ id, setId }) => {
  const [category, setCategory] = useState(id || "character");
  return (
    <>
      <Header setCategory={setCategory} setId={setId} />
      <Search element={category} />
      <Dashboard element={category} />
      <Footer />
    </>
  );
};

export default MainPage;
