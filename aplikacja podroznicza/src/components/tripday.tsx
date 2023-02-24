import { Dispatch, SetStateAction } from "react";
import {
    Box,
    BoxTitle,
    BoxInfo,
    Info,
    TripList,
    TripListItem,
    DeleteDayIcon,
    AddTripsButton
  } from "../Styles/Mytrippage.styled";
  import GarbageIcon from '../assets/garbage.svg';
import { useNavigate } from "react-router-dom";

  interface IItem {
    id: string,
    name: string
  }
  interface ITripDay {
    dayNo: string,
    items: IItem[],
    setSelectedDay: Dispatch<SetStateAction<string>>,
    onDelete: (dayIndex: number) => void,
    selectedDay: string,
    children: React.ReactNode,
    deleteDisabled: boolean
  }
  
  export function TripDay({ items, dayNo, setSelectedDay, selectedDay, children, onDelete, deleteDisabled }: ITripDay) {

    const navigate = useNavigate();
    const handleClick = () => {
      selectedDay === dayNo ? setSelectedDay("") : setSelectedDay(dayNo);
    }

    const handleAddTrips = () => {
      navigate(`${dayNo}/add-trips`)
    }

    return (
      <Box>
        <BoxInfo>
          <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
          
          {items.length === 0 ? <Info>What are we doing today?</Info> :
         <TripList>
         {items.map(item => {
           const { id, name } = item;
           return (
                <TripListItem key={id}>
                  <span>{name}</span>
                </TripListItem>
           )
         })}
       </TripList>
         }
        </BoxInfo>
        {children}
        <AddTripsButton onClick={handleAddTrips}>
          <span>add trips</span>
          <span>+</span>
        </AddTripsButton>
        <div>
          <DeleteDayIcon src={GarbageIcon} deleteDisabled={deleteDisabled} onClick={!deleteDisabled && onDelete}></DeleteDayIcon>
        </div>
      </Box>
    );
  }


interface IDeleteIcon {
  deleteDisabled: boolean,
  onDelete: (dayIndex: number) => void
}

  /*export const DeleteDayIcon = ({deleteDisabled, onDelete}:IDeleteIcon) => {
    console.log(deleteDisabled)
      return (
        <img src={GarbageIcon} onClick={onDelete}></img>
      )
  }*/