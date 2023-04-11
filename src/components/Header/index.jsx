import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/header_logo.jpg";
import BurgerMenuIcon from "../../assets/svg/burger-menu.svg";

const Header = ({ setCategory, setId }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = (category) => {
    setCategory(category);
    setId(category);
    setShowMenu(false);
  };

  const handleBurgerMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <HeaderTop>
        <HeaderLogo to="/">
          <img src={Logo} alt="logo" />
        </HeaderLogo>
        <HeaderTitle>Discover Marvel Universe</HeaderTitle>
        <BurgerMenuButton onClick={handleBurgerMenuClick}>
          <BurgerMenuIconImg src={BurgerMenuIcon} alt="burger menu icon" />
        </BurgerMenuButton>
      </HeaderTop>
      <HeaderMenu showMenu={showMenu}>
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
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: black;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderLogo = styled(Link)`
  width: 30%;
  min-width: 200px;
  & img {
    width: 100%;
  }
`;
const HeaderTitle = styled.h2`
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const BurgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const BurgerMenuIconImg = styled.img`
  width: 50px;
  height: 50px;
`;

const HeaderMenu = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Link)`
  background-color: transparent;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 16px;
  transition: color 0.2s ease-in-out;
  &:hover {
    background-color: red;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
