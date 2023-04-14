import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export const SearchPanel = styled.div`
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
export const SearchTitle = styled.h2`
  font-size: 28px;
  text-align: center;
`;
export const SearchForm = styled.form`
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
export const SearchField = styled(TextField)({
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
export const SearchButton = styled(Button)`
  padding: 15px !important;
`;
export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 0;
`;
export const SearchItem = styled.li`
  list-style-type: none;
  width: 20%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const SearchLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const Icon = styled.img`
  width: 60%;
  border: solid 1px white;
`;
