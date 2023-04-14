import styled from "styled-components";

export const InformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Open-sans, sans-serif;
  padding: 20px;
  background-color: royalblue;
  color: floralwhite;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Name = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const InformationWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  margin: 50px 0 20px 0;
`;
