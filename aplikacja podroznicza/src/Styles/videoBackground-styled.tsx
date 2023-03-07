import styled, { createGlobalStyle } from "styled-components";

export const VideoContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  position: relative;
  margin: 0;
`;

export const FirstParagraphOnVideo = styled.p`
  text-align: left;
  font-family: "Domine", serif;
  color: black;
  font-size: 30px;
  font-weight: 700;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10%;
  padding: 20px;
  @media (max-width: 1000px) {
    font-size: 22px;
    font-weight: 600;
  }
  @media (max-width: 450px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const TextAndButtomOnVideo = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  bottom: 20%;
  left: 10%;
  z-index: 10;
  @media (max-width: 1000px) {
    width: 300px;
    height: 170px;
  }
  @media (max-width: 450px) {
    width: 200px;
    height: 140px;
  }
`;

// (Link w () bo zaciągamy elementu z HTML tylko z reacta)
export const ButtonExplore = styled.button`
  pointer-events: auto;
  display: flex;
  border-radius: 12px;
  border: none;
  width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: #c4566e;
  color: white;
  /* box-shadow: 0px 0px 16px 4px #d33131; */

  &:hover,
  &:focus {
    color: black;
    text-decoration: underline;
  }
  /* &:active {
    color: red;
  } */
  @media (max-width: 1000px) {
    width: 160px;
    height: 50px;
    font-size: 22px;
  }
  @media (max-width: 450px) {
    width: 130px;
    height: 45px;
    font-size: 17px;
  }
`;

export const VideoYouTubeBackground = styled.iframe`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: scale(1.5);
`;
