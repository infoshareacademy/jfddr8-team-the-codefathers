import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   background-image: url("src/assets/Background.jpg");
   background-repeat: no-repeat;
   backdrop-filter: blur(5px);
   background-size: cover;
   background-attachment: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Domine", serif;
  color: white;
  font-size: 40px;
  font-weight: 400;
`;

export const TripContent = styled.div`
  display: flex;
`

export const BoxList = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #d9d9d949;
  border-radius: 10px;
  height: 745px;
  width: 500px;
  padding: 20px 0;
`;

export const TripContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center`

export const Box = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  color: #064547;
  padding: 10px 20px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxInfo = styled.div``;

export const BoxTitle = styled.h1`
  font-size: 35px;
  margin: 5px;
  font-family: "Domine", serif;
  font-weight: 400;
`;

export const BoxSubtitle = styled.h3`
  padding: 0 10px 10px;
  font-family: "Krub", serif;
  font-size: 17px;
  font-weight: 400;
`;

export const BoxButton = styled.button`
  border: 1px solid #064547;
  width: 42px;
  height: 42px;
  border-radius: 7px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 400;
  font-family: "Domine", serif;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const TripListHeader = styled.h2`
  text-align: center;
  background-color: #efefef;
  height: 50px;
  margin: 0;
  line-height: 50px;
`;

export const TripListButton = styled.button`
  margin: 0 auto;
  display: block;
`;

export const TripListFooter = styled.div`
  padding: 10px;
  background-color: #efefef;
`;

