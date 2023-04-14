import React, { useState } from "react";
import propTypes from "prop-types";

import Logo from "../../assets/header_logo.jpg";
import ROUTES from "../../constants/routes";
import BurgerMenuIcon from "../../assets/svg/burger-menu.svg";
import {
  StyledHeader,
  HeaderTop,
  HeaderLogo,
  HeaderTitle,
  BurgerMenuButton,
  BurgerMenuIconImg,
  HeaderMenu,
  StyledButton,
} from "./styles";

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
        <HeaderLogo to={ROUTES.ENTER}>
          <img src={Logo} alt="logo" />
        </HeaderLogo>
        <HeaderTitle>Explore Marvel Universe</HeaderTitle>
        <BurgerMenuButton onClick={handleBurgerMenuClick}>
          <BurgerMenuIconImg src={BurgerMenuIcon} alt="burger menu icon" />
        </BurgerMenuButton>
      </HeaderTop>
      <HeaderMenu showMenu={showMenu}>
        <StyledButton
          to={ROUTES.MAIN}
          onClick={() => handleButtonClick("character")}
        >
          Characters
        </StyledButton>
        <StyledButton
          to={ROUTES.MAIN}
          onClick={() => handleButtonClick("comic")}
        >
          Comics
        </StyledButton>
        <StyledButton
          to={ROUTES.MAIN}
          onClick={() => handleButtonClick("event")}
        >
          Events
        </StyledButton>
        <StyledButton
          to={ROUTES.MAIN}
          onClick={() => handleButtonClick("serie")}
        >
          Series
        </StyledButton>
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  setId: propTypes.func,
  setCategory: propTypes.func,
};
