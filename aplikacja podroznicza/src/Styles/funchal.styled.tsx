import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   background-repeat: no-repeat;
   background-size: cover;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, rgba(6,105,113,1) 51%, rgba(80,166,153,1) 100%);
`;

export const ButtonTrp = styled.button`
  border: 1px solid white;
  border-radius: 7px;
  cursor: pointer;
  height: 40px;
  width: 200px;
  background-color: #ffffff2b;
  margin: 30px 30px 0 0;
  font-size: 20px;
  color: white;
  font-family: "Domine", serif;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ImageContainer = styled.img`
  height: 50vh;
  width: 100%;
`;

export const Txt = styled.span`
  font-size: 60px;
  color: white;
  font-family: "Domine", serif;
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.24);
  padding: 30px;
  border-radius: 10px;
  width: 60%;
  text-align: center;
`;
export const Param = styled.span`
  color: #fff;
  font-size: 25px;
  font-weight: 100;
  width: 100vh;
  background: rgb(6, 69, 71);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid white;
`;
export const TxtContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 120px;
  height: 25px;
  border: 1px solid white;
  margin-top: 10px;
  border-radius: 7px;
  background-color: #ffffff2b;
  margin-bottom: 5px;

  &::placeholder {
    color: #064547;
    text-align: center;
    font-size: 12px;
    text-align: start;
    padding-left: 5px;
  }
`;

export const ImgF = styled.img`
  height: auto;
  width: 103vh;
  border: 1px solid white;
  border-radius: 10px;
  margin: 60px 30px;
`;

export const ContainerF = styled.div`
  display: flex;
  margin-bottom: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContAll = styled.div`
  display: flex;
  flex-direction: column;
`;
