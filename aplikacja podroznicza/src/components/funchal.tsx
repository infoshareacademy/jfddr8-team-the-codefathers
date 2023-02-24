import {
  PageContainer,
  Global,
  ImageContainer,
  Txt,
  Param,
  TxtContainer,
  ButtonTrp,
  ImgF,
  ContainerF,
  ContAll,
} from "../Styles/funchal.styled";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase-config";
import {
  setDoc,
  doc,
} from "firebase/firestore";
import { TripContext } from "../Provider/TripProvider";
import { NameTripModal } from "./NameTripModal";



export function CityPage(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTripModal, setShowTripModal] = useState(false);
  const navigate = useNavigate();
  const handleCloseTripModal = () => setShowTripModal(false);
  const handleShowTripModal = () => setShowTripModal(true);

  const { user, setUser, trips, setTrips, setTripsName, tripsName } =
    useContext(TripContext);

  const docRef = doc(db, "Users", user || "");
  const params = useParams();

  console.log(trips);
  console.log(user);

  
  const handleSaveTripModal = async (tripName: string) => {
    const id = uuidv4();
    //aktualizacja bazy danych
    if (tripName?.trim()) {
      const id = uuidv4();
      const docRef = doc(db, "Users", user || "");

      try {
        await setDoc(docRef, {
          Trips: [
            
            { title: tripName, city: "Funcial", id: id || "", attractions: [] },
          ],
          
        });
        //aktualizacja contextu
        setTrips([
          
          { title: tripName, city: "Funcial", id: id || "", attractions: [] },
          
        ]);
        localStorage.setItem( "title", tripName ) ;
        handleCloseTripModal();
        navigate(`/venues/${id}`, { relative: "path" });
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleTripNameChange = (event: FormEvent<HTMLInputElement>) => {
    setTripsName(event.currentTarget.value);
  };

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged") === "true";
    setIsLoggedIn(isLogged);
  }, []);

  return (
    <PageContainer>
      <Global />
      <ImageContainer src="src/assets/city page/panoramic.jpg"></ImageContainer>
      <ContAll>
        <ButtonTrp
          style={{ position: "sticky", top: "20px", alignSelf: "flex-end" }}
          type="button"
          disabled={!isLoggedIn}
          title={!isLoggedIn ? "You must be logged in!" : undefined}
          onClick={() => handleShowTripModal()}>
          Create Your Trip
        </ButtonTrp>
        <TxtContainer>
          <Txt>FUNCHAL - EUROPE'S MOST PICTURESQUE AND CLEANEST CAPITAL</Txt>
          <Param>
            The Funchal city of today is very different from its fennel growing,
            pirate days of old. It is in fact a modern, cosmopolitan,
            rejuvenated city, well known for its many top class restaurants,
            stunning new 4 & 5-star hotels, warm all year round climate,
            incomparable natural beauty and, of course, its most famous
            'export', world-class footballer Cristiano Ronaldo. In short, it is
            known for its style as well as its substance.
            <br /> The city itself is nestled in a great natural amphitheatre,
            facing the blue Atlantic with a backdrop of dramatic mountains.
            Located in the stunning south of Madeira, on its sunniest coast
            amidst banana plantations and wonderful gardens where flowers bloom
            all year round in the shelter of the verdant mountains, it is an
            extremely lush, green and relaxed city by day, but scratch Funchal's
            surface and you will find it to have a vibrant and varied nightlife
            scene with multiple personalities.
            <br /> Funchal has also been, for many years, one of the Atlantic
            cruise-ships' main ports of call; with the liner harbour right in
            the middle of the city. The approach to Funchal harbour is well
            documented as one of the two most spectacular in the world, being on
            a par with Rio de Janeiro. It has now become a tradition that most
            European liners, on their maiden voyage, call here; it is quite
            usual to see upwards of four cruise ships in at any one time. Once
            ashore, the cafés, restaurants and history that mark this famed
            capital are just a stroll away.
          </Param>
        </TxtContainer>
        <ContainerF>
          <ImgF src="src/assets/city page/funchal.jpg" />

          <Param>
            Tourists in Funchal also roll up to enjoy activities, such as diving
            in the crystal-clear waters, surfing the waves, boat trips, swimming
            with dolphins, spending the day at sea 'whale-watching', taking
            daylong excursions along the coast and through the eucalyptus
            smelling mountain woods, paragliding on the coast, enjoying
            spectacular rounds of golf on the famous courses or simply just
            enjoying a snack at the numerous “people watching” cafes and outside
            garden venues.
            <br /> Madeira's first city has a somewhat less obvious nightlife
            scene than its neighbouring island counterparts, Gran Canaria and
            Tenerife, in so much that you might be forgiven for thinking that it
            is just a quiet sleepy city only for walkers and body and mind
            enthusiasts. But, you would be wrong, in fact 'night owls beware' on
            Thursday, Friday and Saturday evenings, Funchal comes alive after
            midnight. There are two stages to an evening out in Funchal, one is
            the bars and clubs that operate between midnight and 4am, and the
            other is the 4am to 7am clubs. Locals and tourists 'in the know'
            enjoy dinner at the usual time but instead of going straight out
            from here, they go home and relax for a few hours before setting off
            again for an all night evening of partying, or they start the night
            in one of the many bars that exist, with good music and ambiance.
          </Param>
          <ImgF src="src/assets/city page/funchal1.jpg" />
          <Param>
            Of course Funchal has not lost any of its well-known charm as both
            camps of tourists (Day relaxers and Night revellers) work extremely
            well with each other. Not only does it cater for the mature tourist
            happy to enjoy their long stunning daytime walks, breathtaking
            scenery and al fresco evening dining, but it is also the preferred
            haunt of the new breed of young, trendy and affluent Europeans.
            Unlike most other European cities, with no crime on the island it's
            safe to venture out any time of day or night without any gangs of
            rowdy drinkers creating binge-drinking 'no-go' areas. Funchal is a
            truly safe city, something which the new bunch of 'fun loving'
            tourists enjoy as well as respect.
            <br /> Of the many festivals, perhaps the most well known are the
            world-record New Year's Eve Firework display, which is one of the
            largest displays in the world (yes, the world) according to the
            Guinness World Records. The spectacular Carnival and the colourful
            Flower Festival, complete with samba beats and colourful costumed
            parade, are unmissable. During June, the Atlantic Festival
            International Fireworks Competition, every Saturday evening, is sure
            to impress.
          </Param>
          <ImgF src="src/assets/city page/funchal2.jpg" />
          <Param>
            Christmas is a fantastic fairytale season, with lights and festive
            decorations lighting up the whole city and night sky. The city
            centre becomes a wonderland, and the twinkling lights that line the
            mountain streets look down on Funchal like glimmering stars.
            <br /> Last but not least, don't forget the renowned Wine Festival!
            <br /> The Madeiran people really know how to celebrate and they
            share it all with you!
            <br /> Funchal's history goes back over 5 centuries, when early
            Portuguese settlers colonised the coast of a bright and sunny bay
            where fennel (funcho) grew in abundance, giving its name to the new
            town of Funchal. Over the years the population grew, with
            international trade attracting the attention of all of Europe.
            Nowadays, Funchal is a very modern city with over 112.000
            inhabitants. It is one of the safest and cleanest cities in Europe
            and is a place that takes real pride in itself. The perfectly
            cobbled streets in the centre mixed with the modern shopping areas,
            cafes, bars, restaurants and, of course, tourists make Funchal an
            interesting and exciting city.
          </Param>
          <ImgF src="src/assets/city page/funchal3.jpg" />
        </ContainerF>
      </ContAll>
      <NameTripModal show={showTripModal} handleClose={handleCloseTripModal} handleSave={handleSaveTripModal} />
    </PageContainer>
  );
}
