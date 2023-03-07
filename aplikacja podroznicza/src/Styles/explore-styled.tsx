import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
    background-image: url("src/assets/Background2.jpg");
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    color: white;
    height: 100vh;
  }
  .city {
height: 186px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.city:hover .inner {
    opacity: 0;
}
`;
export const Title = styled.h1`
  font-family: "Krub", sans-serif;
  font-size: 60px;
  font-weight: 200;
  margin: 0;
`;

export const Search = styled.input`
  height: 30px;
  width: 292px;
  background-color: #ffffff6c;
  border-radius: 15px;
  border: none;
  margin-right: 1em;
  ::placeholder {
    padding-left: 10px;
    font-family: "Krub", sans-serif;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    margin-right:0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  @media (max-width: 920px) {
   flex-direction: column;
  
  }
`;

export const Container = styled.div`
  width: 1000px;
  margin-top: 100px;
  height: 100vh - 110px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh - 110px;
`;

export const CitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;
  
  ::-webkit-scrollbar {
    display: none;
  }
  height: calc(100vh - 250px);

  @media (max-width: 500px) {
    margin-left:50vw;
    margin-right:50vw
  }
`;

export const Bg = styled.div`
  height: 220px;
  width: 300px;
  background-color: #ffffff6c;
  border-radius: 15px;
  margin: 1em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GhostElement = styled.div`
  width: 300px;
`;

type photoProps = {
  photo: string;
};

export const City = styled.div<photoProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.photo});
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url(${(props) => props.photo});
  }
  height: 186px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h2`
  color: white;
  font-family: "Domine", serif;
  font-weight: 200;
  font-size: 35px;
`;
