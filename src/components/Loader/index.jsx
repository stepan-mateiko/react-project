import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <MyLoader />
    </div>
  );
};
export default Loader;

const MyLoader = styled(CircularProgress)`
  color: red !important;
`;
