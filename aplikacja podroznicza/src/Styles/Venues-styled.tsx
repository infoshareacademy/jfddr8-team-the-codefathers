import styled from "styled-components";

export const Background = styled.div`
  background-image: url("src/assets/VenuesBG.jpg");
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`;
export const AttractionContainer = styled.div`
  padding: 10px 20px 20px 20px;
  margin: 120px 20px 20px 20px;
  background-color: #ffffff3c;
  border-radius: 25px;
  width: 80%;
  display: flex;

  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  @media (max-width: 600px) {
    padding: 10px 10px 10px 10px;
    margin: 120px 10px 20px 10px;
  }
`;
export const AddContainer = styled.div`
  padding: 10px 20px 20px 20px;
  margin: 120px 20px 20px 20px;
  background-color: #ffffff3c;
  border-radius: 25px;
  width: 20%;
  display: flex;
  justify-content: center;
  text-align: center;
  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  @media (max-width: 600px) {
    margin: 120px 10px 20px 10px;
  }
`;

export const ContinueButton = styled.button`
  margin-top: 10%;
  width: 18vw;
  height: 7%;
  border-radius: 10px;
  border-style: hidden;
  color: white;
  font-family: "Krub", sans-serif;
  font-size: 20px;
  background-color: #064547;

  &:hover {
    background-color: #062f30;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 50%;
  }
`;

export const Attractions = styled.h1`
  margin: 0;
  font-family: "Domine", serif;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
  color: #032020;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Added = styled.h1`
  margin: 0;
  font-family: "Domine", serif;
  font-size: 50px;
  margin-bottom: 20px;
  color: #032020;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const AttBox = styled.div`
  margin-top: 20px;
`;
export const AddBox = styled.div`
  margin-top: 20px;
  height: 85%;
`;
export const Scrolldiv = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 1px;
  }
`;
export const Line = styled.div`
  width: 1px;
  height: 500px;
  background-color: black;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
`;
export const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
  margin-left: 50px;
  font-family: "Krub", sans-serif;
  font-size: 13px;
`;
export const Item = styled.div`
  height: auto;
  background-color: #ffffff96;
  border-radius: 15px;
`;
export const ItemwrapperAttr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5em;
  @media (max-width: 600px) {
    gap: .5em;
  }
`;

export const ItemwrapperAdd = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  gap: 1.5em;
  @media (max-width: 600px) {
    gap: .5em;
  }
`;

export const Bg = styled.div`
  position: relative;
  text-align: center;
`;

export const Scrollfix = styled.div`
  height: 90%;
`;
export const Separator = styled.div`
  height: 1px;
  width: 400px;
  background-color: black;
`;
export const Photo = styled.img`
  height: 170px;
  width: 218px;
  margin-top: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const AddPhoto = styled.img`
  height: 85px;
  width: 109px;
  margin-top: 5px;
  filter: brightness(50%);
`;

export const Info = styled.div`
  padding: 10px;
  /* display: flex; */
  /* flex-direction: column; */
`;

export const AddInfo = styled.div`
  padding: 5px;
  /* display: flex;
  flex-direction: column; */
`;

export const Txt = styled.span`
  margin-left: 10px;
`;

export const Title = styled.h3`
  color: #064547;
  font-family: "Krub", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  width: 150px;

`;

export const AddTitle = styled.h3`
  color: white;
  font-family: "Krub", sans-serif;
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

export const TitleContainer = styled.div`
  color: #064547;
  font-family: "Krub", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 218px;
  height: 30px;
`;

export const IconContainer = styled.div`
  color: #064547;
  font-family: "Krub", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 109px;
  height: 30px;
`;

export const Description = styled.div`
  color: #064547;
  font-family: "Krub", sans-serif;
  font-size: 11px;
  width: 218px;
`;

export const Readmore = styled.span`
  margin-left: 350px;
  color: #064547;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Icon = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
