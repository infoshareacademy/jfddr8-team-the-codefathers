import styled from "styled-components";

export const Background = styled.div`
  height: auto;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url("src/assets/VenuesBG.jpg");
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  background-size: cover;
  background-attachment: fixed;
`;

export const Trip = styled.div`
  height: 100px;
  width: 85vw;
  background-color: white;
  margin-top: 50px;
  box-shadow: 0px 0px 14px 14px rgba(0, 0, 0, 0.36);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tripcollapse = styled.div`
  height: auto;
  width: 85vw;
  background-color: white;
  margin-top: -20px;
  box-shadow: 0px 14px 14px 0px rgba(0, 0, 0, 0.36);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Tripname = styled.span`
  font-size: 40px;
  margin-top: 20px;
  display: inline-block;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  font-family: "Krub", sans-serif;
`;

export const Line = styled.div`
  width: 1px;
  height: auto;
  background-color: black;

  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 300px;
`;

export const Day = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 10px;
  margin-right: 0px;
  /* margin-left: 15px; */

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #5e5d5d;
    border-radius: 5px;
  }
`;

export const Title = styled.h1`
  margin-left: 150px;
  display: inline;
  margin-bottom: 50px;
`;

export const Key = styled.div`
  display: flex;
  width: 600px;
`;

export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
`;
export const Content = styled.div``;
export const Venue = styled.span``;
export const Attraction = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
export const Duration = styled.span`
  margin-left: 50px;
`;
export const How = styled.span`
  font-weight: bold;
`;
export const Dur = styled.span`
  font-weight: bolder;
  margin-left: 135px;
  margin-top: 70px;
  display: inline-block;
`;
export const Arrow = styled.img`
  height: 50px;
  margin-top: 25px;
  margin-right: 20px;
`