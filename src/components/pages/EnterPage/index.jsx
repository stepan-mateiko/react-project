import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../../Image";
import Universe from "../../../assets/universe.jpg";

const EnterPage = ({ setId }) => {
  const handleButtonClick = (id) => {
    setId(id);
  };

  return (
    <Container>
      <Image src="https://wallpaperaccess.com/full/699907.jpg" />
      <Info>
        <Title variant="h3">Welcome to </Title>
        <img src={Universe} alt="universe" width="70%" />
        <Subtitle variant="h6">
          Explore and search for your favorite Marvel characters
        </Subtitle>
        <ButtonsWrapper>
          <StyledButton>
            <EnterLink
              to="/main"
              onClick={() => handleButtonClick("character")}
            >
              Characters
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink to="/main" onClick={() => handleButtonClick("comic")}>
              Comics
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink to="/main" onClick={() => handleButtonClick("event")}>
              Events
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink to="/main" onClick={() => handleButtonClick("serie")}>
              Series
            </EnterLink>
          </StyledButton>
        </ButtonsWrapper>
      </Info>
    </Container>
  );
};

export default EnterPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  margin-top: 32px;
  font-weight: bold;
  opacity: 1;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Subtitle = styled.h3`
  margin-top: 16px;
  text-align: center;
  opacity: 1;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1px;
  }
`;
const StyledButton = styled.button`
  margin-top: 32px;
  opacity: 1;
  padding: 10px;
  border: none;
  font-size: 20px;
  border-radius: 15px;
  background-color: red;
  cursor: pointer;
  width: 25%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px;
  opacity: 0.85;
  border-radius: 30px;
  @media (max-width: 768px) {
    width: 90%;
    transform: translate(-50%, 10%);
    padding: 10px;
  }
`;
const EnterLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
