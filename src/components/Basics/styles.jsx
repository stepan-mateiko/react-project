import styled from "styled-components";
import { Button } from "@mui/material";

export const InformationBasics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Name = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;
export const Link = styled.a`
  color: blue;
  text-decoration: none;
  margin-right: 10px;
  width: 50%;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinksTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-top: 50px;
`;
export const LinkButton = styled(Button)`
  width: 100%;
`;
