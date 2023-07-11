import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState, useContext, useEffect } from "react";
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
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

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Record = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function Mytrippage({ currentTrip }: IMytrippage) {
  const { user, tripsName } = useContext(TripContext);
  const [list, setList] = useState([{ day: 0, attractions: [] }]);
  const [isLoading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const docRefi = doc(db, "Users", user, "Edited", "Trips" || "");
      const ary = await getDoc(docRefi);
      const data = ary.data();
      const neww = data.Trips;
      const object = neww.find((obj) => obj.id === id);
      console.log("działa");
      setList(object.attractions);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  });

  const [myStyle, setMyStyle] = useState({});

  const [dayNumber, setDayNumber] = useState(1);

  const [selectedDay, setSelectedDay] = useState(1);
  const [daysListNumber, setDaysListNumber] = useState([]);
  let [daysCount, setDaysCount] = useState(1);
  const navigate = useNavigate();
  const [number, setValue] = useState(0);
  const { tripId } = useParams();
  const id = tripId;
  const navigateToMyTrips = () => {
    navigate("/myTrips");
  };
  const [isFirstRender, setFirstRender] = useState(true);

  console.log(daysListNumber);
  // const dayNumberList = () => {
  //   const list = [];
  //   for (let i = 1; i <= daysCount; i++) {
  //     list.push(i);
  //   }
  //   return [...list];
  // };
  const title = tripsName;
  // console.log(list);
  const handleIncreaseDays = () => {
    setDayNumber(dayNumber + 1);
    const display = dayNumber.toString();
    daysListNumber.push({ day: display, attractions: [] });
    setDaysListNumber([...daysListNumber]);

    console.log(list);
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
    console.log("daysListNumber");
  };

  const handleClick = (day) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [day]: !prevState[day],
    }));
  };

  const handleSave = async () => {
    const docRef = doc(db, "Users", user);
    const aryy = await getDoc(docRef);
    const snapshot = aryy.data();
    const records = snapshot.Trips;
    let obj = {};
    const key = localStorage.getItem("title");
    obj = daysListNumber;

    records.push({ info: key, days: obj });
    const Trips = records;
    console.log(records);
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
                  
                  marginTop: "20px",
                  padding: "20px",
                  borderRadius: "10px",
                  fontFamily: "Krub",
                  boxSizing: "border-box",
                }}
              >
                {list.map(({ name, duration }) => {
                  const handleClick = () => {
                    attractions.push({ name, duration });
                    setDaysCount(daysCount + 1);
                  };
                  if (isLoading) {
                    return <span>Loading</span>;
                  } else {
                    return (
                      <List>
                        <Record>
                          <div>
                          <span
                            style={{
                              marginTop: "7px",
                            }}
                          >
                            {name}
                          </span>
                          </div>
                          <div>
                          <span
                            style={{
                              marginTop: "7px",
                              marginRight: "20px"
                            }}
                          >
                            {duration}h
                          </span>
                          <button
                            onClick={() => {
                              handleClick();
                            }}
                            style={{
                              borderRadius: "15px",
                              border: "none",
                              fontFamily: "Krub",
                              marginTop: "10px",
                            }}
                          >
                            add
                          </button>
                          </div>
                        </Record>
                      </List>
                    );
                  }
                })}
              </div>
            </Row>
          );
        })}
        <div>
          <button
            style={{
              borderRadius: "15px",
              border: "none",
              fontFamily: "Krub",
              marginTop: "10px",
            }}
            onClick={handleIncreaseDays}
          >
            +
          </button>
          {daysListNumber.length > 0 && (
            <button
              style={{
                borderRadius: "15px",
                border: "none",
                fontFamily: "Krub",
                marginTop: "10px",
                marginLeft: "10px",
              }}
              onClick={handleDecreaseDays}
            >
              -
            </button>
          )}
          <button
            style={{
              borderRadius: "15px",
              border: "none",
              fontFamily: "Krub",
              marginTop: "10px",
              marginLeft: "10px",
            }}
            onClick={() => {
              handleSave();
              navigateToMyTrips();
            }}
          >
            SAVE
          </button>
        </div>
      </BoxList>
    </TripContainer>
  );
}
