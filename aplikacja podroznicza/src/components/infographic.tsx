import {
  InfographicContainer,
  InfographicImage,
} from "../Styles/infographic-styled";
import React from "react";
import infoPIC from "../assets/INFOx2.5.jpeg";

export const Infographic = () => {
  return (
    <div>
      <InfographicContainer>
        <InfographicImage src={infoPIC} alt="Infographic" />
      </InfographicContainer>
    </div>
  );
};
