import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  background-color: dodgerblue;
  border-radius: 0 35px 0 35px;
  padding: 5px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
    background-color: transparent;
  }
`;
export const Card = styled.li`
  width: 20%;
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ItemLink = styled(Link)`
  text-decoration: none;
`;
export const Icon = styled.img`
  width: 100%;
  border: solid 1px white;
`;

export const Name = styled.p`
  color: white;
  text-decoration: none;
`;

export const ShowButton = styled.button`
  background-color: white;
  color: red;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  text-transform: uppercase;
  &:hover {
    background-color: beige;
    border-color: crimson;
  }
`;
export const HideButton = styled(ShowButton)`
  @media (max-width: 768px) {
  }
`;
