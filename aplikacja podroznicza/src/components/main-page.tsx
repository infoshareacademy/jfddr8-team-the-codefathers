import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React, { VFC } from "react";
import {} from "../Styles/videoBackground-styled";
import { VideoBackground } from "./VideoBackGround";
import { Explore } from "./Explore";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";
import { Infographic } from "./infographic";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export function Main() {
  return (
    <div>
      <MainContainer>
        <VideoBackground />
        <Infographic />
      </MainContainer>
    </div>
  );
}
