import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    background-image: url("src/assets/VenuesBG.jpg");
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
   
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Domine", serif;
  color: white;
  font-size: 40px;
  font-weight: 400;
`;

export const BoxList = styled.div`
  display: flex;
  /* margin-top: 100px; */
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #d9d9d949;
  border-radius: 10px;
  width: 500px;
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  margin-bottom: auto;
`;

export const TripContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

export const Box = styled.div`
  width: 430px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  color: #064547;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const BoxInfo = styled.span`
  padding: 0 10px 10px;
  font-family: "Krub", serif;
  font-size: 17px;
  font-weight: 400;
`;

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
export const Boxnavbar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: end;
`;
export const Navbar = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
export const Mytrip = styled.div`
  width: 105px;
  height: 80px;
  font-size: 14px;
  color: aquamarine;
  margin-left: 10px;
  line-height: 80px;
  font-family: "Krub", sans-serif;
  &:hover {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;
export const Createtrip = styled.div`
  width: 105px;
  height: 80px;
  font-size: 14px;
  color: aquamarine;
  line-height: 80px;
  font-family: "Krub", sans-serif;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;
export const Logout = styled.div`
  width: 105px;
  height: 80px;
  font-size: 14px;
  color: aquamarine;
  line-height: 80px;
  margin-left: 10px;
  font-family: "Krub", sans-serif;
  &:hover {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 25px;
`;
export const List = styled.ol`
  width: 80px;
  height: 50px;
  border: 2px solid black;
`;
export const Boxitem = styled.div`
  width: 150px;
  height: 80px;
  margin-left: 30px;

  display: flex;
  flex-direction: row;
  &:hover {
    text-decoration: underline;
  }
`;
export const Info = styled.span`
  box-sizing: border-box;
  padding: 0 10px 10px;
  font-family: "Krub", serif;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;
export const Buttonedit = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 7px;
  text-align: center;
  line-height: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: brown;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 900;
  font-family: "Domine", sans-serif;
  margin-top: 10px;
  &:hover {
    color: green;
    background-color: lemonchiffon;
  }
`;

export const TripList = styled.ul`
  background-color: #ffffff;
  max-height: 400px;
  margin-bottom: 0;
  margin-top: 0;
  overflow-y: auto;
  scrollbar-width: 0;
  list-style-type: none;
  padding-left: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TripListItemWrapper = styled.div`
  display: flex;
`;

export const TripListItem = styled.div`
  padding: 10px 20px;
`;

export const TripListCheckbox = styled.input`
  &:checked ~ div span:last-child {
    display: inline;
  }
`;

export const TripListController = styled.label`
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  &:hover {
    background-color: #dddddd;
    cursor: pointer;
  }
`;

export const TripListDone = styled.span`
  color: green;
  margin-left: 20px;
  display: none;
  font-weight: 900;
`;
export const Buttongototrip = styled.button`
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
