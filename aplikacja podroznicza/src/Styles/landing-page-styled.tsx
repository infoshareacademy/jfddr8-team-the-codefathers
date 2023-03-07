import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
    background-image: url("src/assets/Background.jpg");
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    font-family: "Domine", serif;
    color: white;
  }
  h3 {
    font-weight: 400;
    font-size: 14px;
    margin: 10px 5px;
  }
`;
export const Container = styled.div`
width: 364px;
align-self: flex-end;
margin: 50px 80px;
`;
export const Flex = styled.div`
height: 100vh;
display: flex;
`;
export const UpperBtn = styled.button`
width: 100%;
height: 50px;
border: none;
border-radius: 10px;
font-size: 20px;
font-family: "Krub", sans-serif;
background-color: #064547;
color: #d9d9d9;
margin-bottom: 10px;
&:hover {
    background-color: #053737;
    cursor: pointer;
}
`;
export const LowerBtn = styled.button`
width: 100%;
height: 50px;
border: none;
border-radius: 10px;
font-size: 20px;
font-family: "Krub", sans-serif;
background-color: #d9d9d9;
color: #064547;
margin: 10px 0;
&:hover {
    background-color: #c5c4c4;
    cursor: pointer;
}
`;
export const Introduction = styled.h1`
font-size: 50px;
color: white;
font-family: "Domine", serif;
font-weight: 400;
text-shadow: 2px 2px 2px #064547;
`;
export const Centered = styled.div`
text-align: center;
`;
export const LinesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Line = styled.div`
background-color: white;
height: 1px;
width: 100%;
border: 0;
`;

export const Underlined = styled.h3`
text-decoration: underline;
&:hover {
    cursor: pointer;
    color: #d9d9d9;
  }
`;

export const AccountQuestion = styled.h3`
width: 800px;
`;
