import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blueviolet;
  font-family: Open-sans, sans-serif;
`;
export const DashboardTitle = styled.h2`
  color: floralwhite;
  font-size: 28px;
  text-align: center;
`;
export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  justify-content: center;
  padding: 0;
`;
export const Card = styled.li`
  width: 20%;
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DashboardLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const Icon = styled.img`
  width: 60%;
  border: solid 1px white;
`;

export const Name = styled.p`
  color: white;
`;
