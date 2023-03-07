import { VenuesModal } from "./VenuesModal";
import {
  Container,
  Wrapper,
  AttBox,
  Attractions,
  Scrollfix,
  Scrolldiv,
  Item,
  Info,
  Photo,
  Txt,
  Icon,
  Readmore,
  Separator,
  Line,
  AddBox,
  Added,
  Background,
  Title,
  TitleContainer,
  AttractionContainer,
  AddContainer,
  ContinueButton,
  ItemwrapperAttr,
  ItemwrapperAdd,
  Bg,
  IconContainer,
  AddTitle,
  AddPhoto,
  AddInfo,
  Description,
} from "../Styles/Venues-styled";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useState, useContext, useEffect } from "react";
import { Interface } from "node:readline/promises";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TripContext } from "../Provider/TripProvider";
// import { trips } from "./funchal";

interface ICity {
  description: any;
  name: any;
  photo: any;
}

const citiesRef = collection(
  db,
  "CitiesList",
  "NI91uSn6mYWB2lAVHkq0",
  "Venues"
);
const docRef = await getDocs(citiesRef);

export function Venues() {
  let info: DocumentData[] = [];
  let { tripId, tripName } = useParams();
  const [attractions, setAttractions] = useState<any[]>([]);
  const id = tripId;
  let all: { description: any; name: any; photo: any } = {
    description: null,
    name: null,
    photo: null,
  };

  const [added, setAdded] = useState<ICity[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [attraction, setAttraction] = useState<DocumentData | null>(null);

  docRef.forEach((doc) => {
    info.push(doc.data());
  });
  //wywoluje funkcje SentAttractionsToFire-----
  const navigate = useNavigate();
  const navigateToCreateTrip = () => {
    SentAttractionsToFire();
    navigate(`/create-new-trip/${id}`, { relative: "path" });

    console.log(attractions);
    setAttractions([]);
  };

  // //MOJA CZESC-----------------------
  const { user, setUser, trips, setTrips, tripsName, setTripsName } =
    useContext(TripContext);
  console.log(user);

  // useEffect(() => {
  //   const docRefi = doc(db, "Users", user || "");
  //   const result = getDoc(docRefi);
  // }, []);

  const params = useParams();
  async function SentAttractionsToFire() {
    const docRefi = doc(db, "Users", user, "Edited" , "Trips" || "");
    //aktualizacja bazy danych
    if (attractions) {
      const index = trips.findIndex((i) => i.id === params.tripId);
      if (trips[index].attractions?.length > 0) {
        trips[index].attractions.push(attractions);
      }
      trips[index].attractions = attractions;
      console.log(trips);
      try {
        await setDoc(docRefi, {
          Trips: trips,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  const mapVenues = info.map(({ description, name, photo, duration }) => {
    return (
      <>
        <Item key={name}>
          <Info>
            <TitleContainer>
              <Title>{name}</Title>
              <Icon
                src="src/assets/Add.png"
                onClick={() => {
                  const posts = JSON.stringify(added);
                  const post = JSON.stringify(description);
                  setAttractions([
                    ...attractions,
                    {
                      description: description,
                      name: name,
                      photo: photo,
                      duration: duration,
                    },
                  ]);
                  if (posts.includes(post)) {
                    alert("Place already added!");
                  } else {
                    all = { description, name, photo };
                    setAdded((current) => [...current, all]);
                  }
                }}
              ></Icon>
            </TitleContainer>
            <Photo
              src={photo}
              onClick={() => {
                console.log(added, all);
                setShow(!show);
                setAttraction({ name, photo, description, duration });
              }}
            ></Photo>
          </Info>
        </Item>
      </>
    );
  });

  let remove = null;

  const mapAdded = added.map(({ name, photo }) => (
    <Item key={name}>
      <AddInfo>
        <IconContainer>
          <Icon
            src="src/assets/Remove.png"
            onClick={() => {
              remove = { name, photo };
              setAdded((current) =>
                current.filter((venue) => venue.name !== name)
              );
            }}
          ></Icon>
        </IconContainer>
        <Bg>
          <AddPhoto
            src={photo}
            onClick={() => {
              console.log(added);
            }}
          ></AddPhoto>
          <AddTitle>{name}</AddTitle>
        </Bg>
      </AddInfo>
    </Item>
  ));

  return (
    <>
      <Background>
        {attraction && (
          <VenuesModal
            name={attraction.name}
            photo={attraction.photo}
            description={attraction.description}
            duration={attraction.duration}
            isOpen={show}
            setShow={setShow}
          />
        )}
        {tripId}:{tripName}
        <Container>
          <AttractionContainer>
            <AttBox>
              <Attractions>Attractions</Attractions>
              <Scrollfix>
                <Scrolldiv>
                  <ItemwrapperAttr>{mapVenues}</ItemwrapperAttr>
                </Scrolldiv>
              </Scrollfix>
            </AttBox>
          </AttractionContainer>
          <AddContainer>
            <AddBox>
              <Added>Added</Added>
              <Scrollfix>
                <Scrolldiv>
                  <ItemwrapperAdd>{mapAdded}</ItemwrapperAdd>
                </Scrolldiv>
              </Scrollfix>
              <ContinueButton onClick={() => navigateToCreateTrip()}>
                Continue
              </ContinueButton>
            </AddBox>
          </AddContainer>
        </Container>
      </Background>
    </>
  );
}