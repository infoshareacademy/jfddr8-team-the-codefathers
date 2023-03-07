import {
  Box,
  BoxTitle,
  BoxSubtitle,
  BoxButton,
  BoxInfo,
} from "../Styles/create-trip.styled";
import { Dispatch, SetStateAction } from "react";


interface ICreateTripDay{
  dayNo: string,
  setSelectedDay: Dispatch<SetStateAction<string>>,
  selectedDay: string,
  children: React.ReactNode
}

export function CreateTripDay({ dayNo, setSelectedDay, selectedDay, children }: ICreateTripDay) {

  const handleClick = () => {
    selectedDay === dayNo ? setSelectedDay("") : setSelectedDay(dayNo);
  }

  return (
    <Box>
      <BoxInfo>
        <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
        <BoxSubtitle>What are we doing today?</BoxSubtitle>
      </BoxInfo>
      {children}
    </Box>
  );
}
