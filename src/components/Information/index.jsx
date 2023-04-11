import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import Container from "../Container";

const Information = ({ item, id, element }) => {
  const {
    name,
    description,
    thumbnail,
    comics,
    series,
    events,
    urls,
    title,
    characters,
  } = item;

  let firstConnection = "";
  let secondConnection = "";
  let thirdConnection = "";
  let firstContainer = "";
  let secondContainer = "";
  let thirdContainer = "";
  if (element === "character") {
    while (!comics || !events || !series) {
      return (
        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />
        </div>
      );
    }
    firstConnection = `Appeared in ${comics.available} comics`;
    secondConnection = `Appeared in ${events.available} events`;
    thirdConnection = `Appeared in ${series.available} series`;
    firstContainer = "comics";
    secondContainer = "events";
    thirdContainer = "series";
  }
  if (element === "comic") {
    while (!characters || !events || !series) {
      return (
        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />
        </div>
      );
    }
    firstConnection = `Belongs to ${series.name} serie`;
    secondConnection = `In this comic book appear ${characters.available} characters`;
    thirdConnection = `This comic book appears in ${events.available} events`;
    firstContainer = "series";
    secondContainer = "characters";
    thirdContainer = "events";
  }
  if (element === "event") {
    while (!comics || !characters || !series) {
      return (
        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />
        </div>
      );
    }
    firstConnection = `In this event appear ${characters.available} characters`;
    secondConnection = `This event contains ${comics.available} comics`;
    thirdConnection = `This event contains ${series.available} series`;
    firstContainer = "characters";
    secondContainer = "comics";
    thirdContainer = "series";
  }
  if (element === "serie") {
    while (!comics || !events || !characters) {
      return (
        <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
          <CircularProgress />
        </div>
      );
    }
    firstConnection = `In this serie appear ${characters.available} characters`;
    secondConnection = `This serie contains ${comics.available} comics`;
    thirdConnection = `This serie contains ${events.available} events`;
    firstContainer = "characters";
    secondContainer = "comics";
    thirdContainer = "events";
  }

  return (
    <InformationPanel>
      <Name>{element === "character" ? name : title}</Name>
      <InformationWrapper>
        <InformationBasics>
          <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
          <Description>
            {description ||
              `Sorry, but no description avaiable for ${name || title}`}
          </Description>
          <Links>
            <LinksTitle>{`You can get more detailed info about this ${element} here`}</LinksTitle>
            {urls.map((url) => (
              <Link key={url.type} href={url.url} target="_blank">
                {url.type}
              </Link>
            ))}
          </Links>
        </InformationBasics>

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

export const InformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Open-sans, sans-serif;
  padding: 20px;
  background-color: royalblue;
`;

export const Name = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const InformationWrapper = styled.div`
  display: flex;
`;
const InformationBasics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const InfoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0;
  width: 100%;
`;

export const InfoItem = styled.li`
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
`;

export const Link = styled.a`
  color: blue;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const LinksTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
`;
