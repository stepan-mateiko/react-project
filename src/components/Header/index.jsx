import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import HeaderLogo from "../../assets/header_logo.jpg";
import Logo from "../../assets/header_logo.jpg";

const Header = ({ setCategory, setId }) => {
  const handleButtonClick = (category) => {
    setCategory(category);
    setId(category);
  };

  return (
    <StyledHeader>
      <img src={Logo} alt="logo" width="50%" />
      <HeaderContainer>
        <StyledButton to="/main" onClick={() => handleButtonClick("character")}>
          Characters
        </StyledButton>
        <StyledButton to="/main" onClick={() => handleButtonClick("comic")}>
          Comics
        </StyledButton>
        <StyledButton to="/main" onClick={() => handleButtonClick("event")}>
          Events
        </StyledButton>
        <StyledButton to="/main" onClick={() => handleButtonClick("serie")}>
          Series
        </StyledButton>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin: 0;
  background-color: black;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Link)`
  background-color: transparent;
  border: none;
  margin-right: 16px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 20px;
  transition: color 0.2s ease-in-out;
  &:hover {
    background-color: red;
  }
`;
