import React from "react";
import propTypes from "prop-types";

import ROUTES from "../../../constants/routes";
import Image from "../../Image";
import Universe from "../../../assets/universe.jpg";
import {
  Container,
  Title,
  Subtitle,
  ButtonsWrapper,
  StyledButton,
  Info,
  EnterLink,
} from "./styles";

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
              to={ROUTES.MAIN}
              onClick={() => handleButtonClick("character")}
            >
              Characters
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink
              to={ROUTES.MAIN}
              onClick={() => handleButtonClick("comic")}
            >
              Comics
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink
              to={ROUTES.MAIN}
              onClick={() => handleButtonClick("event")}
            >
              Events
            </EnterLink>
          </StyledButton>
          <StyledButton>
            <EnterLink
              to={ROUTES.MAIN}
              onClick={() => handleButtonClick("serie")}
            >
              Series
            </EnterLink>
          </StyledButton>
        </ButtonsWrapper>
      </Info>
    </Container>
  );
};

export default EnterPage;

EnterPage.propTypes = {
  setId: propTypes.func,
};
