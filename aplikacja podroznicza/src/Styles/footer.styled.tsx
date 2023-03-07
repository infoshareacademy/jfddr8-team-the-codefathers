import styled from "styled-components";


export const SocialMediaLogo = styled.img`
 width: 25px;
 &:hover {
      cursor: pointer;
    filter: invert(20%);}
`;

export const Container = styled.div`
  background-color: #053737;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: "Krub", sans-serif;
  box-sizing: border-box ;
`;

export const Authors = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color:#99b7b7; 
`;


export const Icons = styled.div`
  width: 25px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const LinksSection = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.p`
  font-size: 11px;
  margin: 5px;
color: white;
  &:hover {
    cursor: pointer;
    color: rgb(213, 213, 213);
  }
`;

export const Copyright = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  color: #99b7b7;
  padding: 8px;
  background-color: #052f2f;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
