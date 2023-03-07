import {} from "../Styles/videoBackground-styled";
import React from "react";
import {
  VideoContainer,
  VideoYouTubeBackground,
  TextAndButtomOnVideo,
  FirstParagraphOnVideo,
  ButtonExplore,
} from "../Styles/videoBackground-styled";
import { useNavigate } from "react-router-dom";

export const VideoBackground = () => {
  const navigate = useNavigate();
  const navigateToExplore = () => {
    navigate("/explore");
  };
  return (
    <div>
      <VideoContainer>
        <TextAndButtomOnVideo>
          <FirstParagraphOnVideo>
            Plan your best trip ever. We've got everything you need to go big in
            2023.
          </FirstParagraphOnVideo>
          <ButtonExplore onClick={navigateToExplore}>
            Start Exploring!
          </ButtonExplore>
        </TextAndButtomOnVideo>
        <VideoYouTubeBackground
          src="https://www.youtube.com/embed/SoKj79NFvks?controls=0&amp;showinfo=1&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;mute=1&amp;clip=UgkxkflDYMqgKcPVFxDIeKQgRyT0j3ABNYAA&amp;clipt=EJX4Axij4gU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </VideoContainer>
    </div>
  );
};
