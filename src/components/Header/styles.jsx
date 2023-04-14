import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
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

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderLogo = styled(Link)`
  width: 30%;
  min-width: 200px;
  & img {
    width: 100%;
  }
`;
export const HeaderTitle = styled.h2`
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const BurgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const BurgerMenuIconImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const HeaderMenu = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledButton = styled(Link)`
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
