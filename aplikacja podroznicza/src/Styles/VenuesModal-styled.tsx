import styled from "styled-components";


export const X = styled.button`
  position: absolute;
  color: #033638;
  font-family: "Krub", sans-serif;
  left: 30px;
  top: 20px;
  font-size: 28px;
  font-weight: 600;
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  display: flex;
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  @media (max-width: 600px) {
    width: 300px;
  height: 570px;
  flex-direction: column;
  }
`;

export const Photo = styled.img`
  height: 100%;
  width: 513px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  @media (max-width: 600px) {
    width: 100%;
  height: 234px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 25px;
  }
`;

export const Title = styled.div`
  font-family: "Domine", serif;
  font-size: 20px;
 color: #033638;
`;

export const Description = styled.div`
  font-family: "Krub", sans-serif;
  margin-top: 20px;
  font-size: 13px;
`;

export const TextArea = styled.div`
  padding: 30px;
  width: 280px;
  position: relative;
  @media (max-width: 600px) {
  height: 50%;
  width: 250px;
  padding: 25px;
  flex-direction: column;
  }
`;

export const Duration = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 13px;
  font-family: "Krub", sans-serif;
`;
