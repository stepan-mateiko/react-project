import React from "react";
import propTypes from "prop-types";

import Container from "../Container";
import Basics from "../Basics";
import Loader from "../Loader";
import {
  InformationPanel,
  Name,
  InformationWrapper,
  InfoList,
  InfoItem,
} from "./styles";

const Information = ({ item, id, element }) => {
  const { name, comics, series, events, title, characters } = item;

  const isCharacter = element === "character";
  const isComic = element === "comic";
  const isEvent = element === "event";
  const isSerie = element === "serie";

  if (isCharacter) {
    while (!comics || !events || !series) {
      return <Loader />;
    }
  }
  if (isComic) {
    while (!characters || !events || !series) {
      return <Loader />;
    }
  }
  if (isEvent) {
    while (!characters || !comics || !series) {
      return <Loader />;
    }
  }
  if (isSerie) {
    while (!characters || !events || !comics) {
      return <Loader />;
    }
  }

  const firstConnection = isCharacter
    ? `Appeared in ${comics.available} comics`
    : `In this ${element} appear ${characters.available} characters`;

  const secondConnection = isCharacter
    ? `Appeared in ${events.available} events`
    : isComic
    ? `This comic book appears in ${events.available} events`
    : isEvent
    ? `This ${element} contains ${comics.available} comics`
    : `This ${element} contains ${events.available} events`;

  const thirdConnection = isCharacter
    ? `Appeared in ${series.available} series`
    : isComic
    ? `Belongs to ${series.name} serie`
    : isSerie
    ? `This serie contains ${comics.available} comics`
    : `This event contains ${series.available} series`;

  const firstContainer = isCharacter ? "comics" : "characters";
  const secondContainer = isEvent ? "comics" : "events";
  const thirdContainer = isSerie ? "comics" : "series";

  return (
    <InformationPanel>
      <Name>{element === "character" ? name : title}</Name>
      <InformationWrapper>
        <Basics item={item} element={element} />

        <InfoList>
          <InfoItem>{firstConnection}</InfoItem>
          <Container id={id} element={element} item={firstContainer} />
          <InfoItem>{secondConnection}</InfoItem>
          <Container id={id} element={element} item={secondContainer} />
          <InfoItem>{thirdConnection}</InfoItem>
          <Container id={id} element={element} item={thirdContainer} />
        </InfoList>
      </InformationWrapper>
    </InformationPanel>
  );
};

export default Information;

Information.propTypes = {
  item: propTypes.object,
  id: propTypes.string,
  element: propTypes.string,
};
