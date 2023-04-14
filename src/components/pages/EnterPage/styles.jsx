import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Open Sans", sans-serif;
`;

export const Title = styled.h1`
  margin-top: 32px;
  font-weight: bold;
  opacity: 1;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Subtitle = styled.h3`
  margin-top: 16px;
  text-align: center;
  opacity: 1;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ButtonsWrapper = styled.div`
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
export const StyledButton = styled.button`
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
export const Info = styled.div`
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
export const EnterLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
