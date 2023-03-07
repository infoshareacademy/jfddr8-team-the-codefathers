import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoxList,
  Global,
  Title,
  TripContainer,
  TripContent,
  StyledTripListItems,
  
  
} from "../Styles/create-trip.styled";
import { Boxnavbar,Navbar,Boxitem,Icon,Mytrip,Createtrip,Logout } from "../Styles/Mytrippage.styled";
import { CreateTripDay } from "./create-trip-day";




interface IItem {
  id: string,
  name: string
}

interface CreateTripProps {
  currentTrip: {},
  addToTrip: ({dayNumber, data} : {dayNumber: string,data:IItem[] })=>void
}

export function CreateTrip({addToTrip, currentTrip} : CreateTripProps) {
  const [selectedDay, setSelectedDay] = useState("");

const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLogged");
    console.log(isLoggedIn)
    if (isLoggedIn !== "true") {
    //  navigate("/signIn");
    }
  }, []);
  useEffect(() => {
    // tutaj wywołać clearCurrentTrip
  },[])
  
  const navigatetologin= () => {
    navigate("/signIn");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };

  return (
    <TripContainer>
      
      <Global />

      <Title>Madeira trip</Title>     
      <TripContent>
        <div>
          <BoxList>
            <CreateTripDay dayNo="1" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>
                rgr
            </CreateTripDay>
            <CreateTripDay dayNo="2" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>

            </CreateTripDay>
            <CreateTripDay dayNo="3" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>

            </CreateTripDay>
            <CreateTripDay dayNo="4" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>

            </CreateTripDay>
            <CreateTripDay dayNo="5" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>

            </CreateTripDay>
            <CreateTripDay dayNo="6" setSelectedDay={setSelectedDay} selectedDay={selectedDay}>

            </CreateTripDay>
          </BoxList>
          <button className="Buttongototrip" onClick={() => navigate('/mytrippage')}>Go to Your trip</button>
        </div>
        <StyledTripListItems className="" isHidden={selectedDay === ""} cityId={"NI91uSn6mYWB2lAVHkq0"} selectedDay={selectedDay} addToTrip={addToTrip} currentTrip={currentTrip} />
      </TripContent> 

      
    </TripContainer>
  );
}
