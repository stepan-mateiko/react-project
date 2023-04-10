import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoLink = styled(Link)`
  width: 30%;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;
export const TextLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;
export const Icons = styled.div`
  width: 30%;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const IconLink = styled(Link)`
  background: linear-gradient(
    to bottom,
    black 0%,
    black 20%,
    white 20%,
    white 80%,
    black 80%,
    black 100%
  );
`;
export const Copyright = styled.div`
  width: 40%;
  color: white;
`;
