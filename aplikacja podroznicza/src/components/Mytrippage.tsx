import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState, ChangeEvent } from "react";
import { Outlet, useNavigate, useParams  } from "react-router-dom";
import {
    BoxList,
    Global,
    Title,
    TripContainer,
    BoxButton,
    AddTripsContainer,
    TripListController,
    TripListCheckbox,
    TripListWrapper,
    TripListItem,
    TripList,
    TripListItemWrapper,
    ModalContent,
    Buttonswrapper,
    Headermodal
  } from "../Styles/Mytrippage.styled";
  import { TripDay } from "./tripday";
  import { Modal } from './Modal';
import { Dispatch } from "react";
import { SetStateAction } from "react";

  interface IMytrippage {
    currentTrip: IItem[][],
    setCurrentTrip: Dispatch<SetStateAction<IItem[][]>>,
   
  }

  interface IItem {
    id: string,
    name: string,
    selected: boolean
  }

  interface IAddTrips {
    items: IItem[],
    currentTrip: IItem[][],
    setCurrentTrip: Dispatch<SetStateAction<IItem[][]>>
  }
  
  export function Mytrippage({currentTrip, setCurrentTrip} : IMytrippage) {
    const [selectedDay, setSelectedDay] = useState("");

    const navigate = useNavigate();
  const navigatetologin= () => {
    navigate("/signIn");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoxList,
  Global,
  Title,
  TripContainer,
  Boxnavbar,
  Navbar,
  Mytrip,
  Createtrip,
  Logout,
  Icon,
  Boxitem,
  Buttonedit,
  Box,
  BoxTitle,
  BoxButton,
  BoxInfo,
  Info,
  TripList,
  TripListItem,
  TripListCheckbox,
  TripListController,
  TripListDone,
  TripListItemWrapper,
} from "../Styles/Mytrippage.styled";
import { TripDay } from "./tripday";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { doc } from "firebase/firestore";
import { TripContext } from "../Provider/TripProvider";
import { getDocs, collection, getDoc, setDoc } from "firebase/firestore";
import styled from "styled-components";
import { Trip } from "../Styles/myTrips-styled";

interface IItem {
  id: string;
  name: string;
}
interface ITripDay {
  dayNo: string;
  items: IItem[];
  setSelectedDay: Dispatch<SetStateAction<string>>;
  selectedDay: string;
  children: React.ReactNode;
}
interface IMytrippage {
  currentTrip: {
    day_1: [];
    day_2: [];
    day_3: [];
    day_4: [];
    day_5: [];
    day_6: [];
  };
}
const Add = styled.button`
  height: 20px;
`;

  const handleIncreaseDays = () => {
    currentTrip.push([]);
    setCurrentTrip([...currentTrip]);
  }

  const handleDelete = (dayIndex: number) => {
    setCurrentTrip(currentTrip.filter((item, index) => index !== dayIndex));
  }

    return (
      <TripContainer>
        
        <Global />
          <Title>Plan my trip</Title>
        <BoxList>
          {currentTrip.map((items, index) => {
              return (
                <TripDay key={index + 1} 
                        dayNo={(index + 1).toString()} 
                        selectedDay={selectedDay} 
                        setSelectedDay={setSelectedDay} 
                        items={items} 
                        onDelete={() => handleDelete(index)}
                        deleteDisabled={currentTrip.length === 1}
                >
                </TripDay>
              )
          })}
            <div>
             <BoxButton onClick={handleIncreaseDays}>+</BoxButton>
            </div>
        </BoxList>
        <Outlet />
      </TripContainer>
    );
  }

  export const AddTrips = ({items, currentTrip, setCurrentTrip}:IAddTrips) => {
    const [selectedTrips, setSelectedTrips] = useState<IItem[]>([]);
    const navigate = useNavigate();
    let { day } = useParams();

    const handleChange = (e : ChangeEvent<HTMLInputElement>, item : IItem) => {
      const value = e.target.checked;
      item.selected = value;
      if(value === true){
          const _selectedTrips = [
              ...selectedTrips,
              item
          ]
          setSelectedTrips(_selectedTrips);
      }else{
          const _selectedTrips = selectedTrips.filter(tripToRemove => tripToRemove.id !== item.id);
          setSelectedTrips(_selectedTrips);
      }
  }



  const handleBack = () => {
    navigate('/creator');
  }

  const handleAddTo = () => {
    let reg = /^\d+$/;
    day = day || '';
    if(reg.test(day)){
      currentTrip[parseInt(day) - 1] = selectedTrips;
      setCurrentTrip([...currentTrip]);
    }
    navigate('/creator');
  }

  const getDayNumber = () => {
    let reg = /^\d+$/;
    day = day || '';
    return parseInt(day);
  }

  const processItems = () => {
    items.forEach(item => {
      const selectedTrip = selectedTrips.find(trip => trip.id === item.id);
      if(selectedTrip){
        item.selected = selectedTrip.selected;
      }
    });
    return items;
  }

  useEffect(() => {
    setSelectedTrips([...currentTrip[getDayNumber() - 1]]);
  }, [])

  console.log(processItems())

    return (
      <Modal className="portal" element="div">
        <AddTripsContainer>
        <Headermodal><h3>Add trips</h3></Headermodal>  
          <ModalContent>
          <TripList>
              {items && processItems().map(item => {
                const { id, name, selected } = item;
                return (
                  <li key={id}>
                  <TripListController>
                      <TripListCheckbox type="checkbox" checked={selected} onChange={(e) => handleChange(e, item)}></TripListCheckbox>
                      <TripListItem>
                          <span>{name}</span>
                      </TripListItem>
                  </TripListController>
              </li>
                )
              })}
            </TripList>
            <Buttonswrapper>
              <button className="btnback" onClick={handleBack}>
                  Back
              </button>
              <button className="btnaddto" onClick={handleAddTo}>
                  Add to 
              </button>
              </Buttonswrapper>
          </ModalContent>
        
        </AddTripsContainer>
      </Modal>
    )
  }
const Row = styled.div`
  display: flex;
`;

const Thisday = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
  margin-top: 10px;
  display: block;
`;
const email = localStorage.getItem("info");
const tst = JSON.parse(email);
const docRef = doc(db, "Users", tst);
const ary = await getDoc(docRef);
const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Record = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function Mytrippage({ currentTrip }: IMytrippage) {
  const [myStyle, setMyStyle] = useState({});
  const docRef = doc(db, "Users", tst);
  const [dayNumber, setDayNumber] = useState(1);
  const { user, tripsName } = useContext(TripContext);
  const [selectedDay, setSelectedDay] = useState(1);
  const [daysListNumber, setDaysListNumber] = useState([]);
  let [daysCount, setDaysCount] = useState(1);
  const navigate = useNavigate();
  const [number, setValue] = useState(0);
  const { tripId } = useParams();
  const id = tripId;

  const data = ary.data();
  const neww = data.Trips;
  const object = neww.find((obj) => obj.id === id);
  const list = object.attractions;

  // const dayNumberList = () => {
  //   const list = [];
  //   for (let i = 1; i <= daysCount; i++) {
  //     list.push(i);
  //   }
  //   return [...list];
  // };
  const title = tripsName;
  console.log(list);
  const handleIncreaseDays = () => {
    setDayNumber(dayNumber + 1);
    const display = dayNumber.toString();
    daysListNumber.push({ day: display, attractions: [] });
    setDaysListNumber([...daysListNumber]);
    console.log(daysListNumber);
  };
  const handleDecreaseDays = () => {
    const day = dayNumber;
    setDayNumber(dayNumber - 1);
    daysListNumber.pop();
    setDaysListNumber(
      daysListNumber.filter((object) => {
        return object.day !== day;
      })
    );
    console.log(daysListNumber);
  };

  const handleClick = (day) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [day]: !prevState[day],
    }));
  };
  
  const handleSave = async () => {
    const snapshot = ary.data();
  const records = snapshot.Trips;
  const obj = {};
  const key = localStorage.getItem("title");
  obj[key] = daysListNumber;
  records.push(obj);
  const Trips = records.filter((itm) => {
    return !Object.keys(itm).includes("id");
  });

    await setDoc(docRef, { Trips });
  };

  return (
    <TripContainer>
      <Global />
      <Title>Plan my trip</Title>
      <BoxList>
        {daysListNumber.map(({ attractions, day, children }) => {
          let isVisible = false;

          return (
            <Row key={day}>
              <Box>
                <BoxInfo>
                  <BoxTitle>{`Day ${day}`}</BoxTitle>
                  <Info>
                    {attractions.map(({ name, duration }) => {
                      return <span>{name}</span>;
                    })}
                  </Info>
                  <Add
                    onClick={() => {
                      handleClick(day);
                      
                    }}
                  >
                    Venues
                  </Add>
                </BoxInfo>
                {children}
              </Box>
              <div
                style={{
                  display: myStyle[`${day}`] ? "block" : "none",
                  backgroundColor: "white",
                  height: "500px",
                  width: "500px",
                }}
              >
                {list.map(({ name, duration }) => {
                  const handleClick = () => {
                    attractions.push({ name, duration });
                    setDaysCount(daysCount + 1);
                  };

                  return (
                    <List>
                      <Record>
                        <span>{name}</span>
                        <span>duration: {duration}h</span>
                        <button
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          add
                        </button>
                      </Record>
                    </List>
                  );
                })}
              </div>
            </Row>
          );
        })}
        <div>
          <button onClick={handleIncreaseDays}>+</button>
          {daysListNumber.length > 0 && (
            <button onClick={handleDecreaseDays}>-</button>
          )}
          <button
            onClick={() => {
              handleSave();
            }}
          >
            save
          </button>
        </div>
      </BoxList>
    </TripContainer>
  );
}
