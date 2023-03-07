import { Navbar } from "./navbar";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import {
  Global,
  Title,
  Search,
  Header,
  Container,
  Flex,
  CitiesList,
  Bg,
  GhostElement,
  City,
  Name,
} from "../Styles/explore-styled";

export function Explore() {
  const [cities, setCities] = useState<any[]>([]);
  const [filterList, setFilterList] = useState(cities);
  const [searchString, setSearchString] = useState("");

  const citiesCollectionRef = collection(db, "CitiesList");
  useEffect(() => {
    const getCities = async () => {
      const data = await getDocs(citiesCollectionRef);
      setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCities();
  }, []);

  useEffect(() => {
    setFilterList(
      cities.filter((city) =>
        city.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, cities]);

  const navigate = useNavigate();
  const navigateToCityPage = (props: string) => {
    navigate(`/${props}`);
  };

  return (
    <>
      <Global />
      <Flex>
        <Container id="exploreScroll">
          <Header>
            <GhostElement />
            <Title>explore</Title>
            <Search
              type="text"
              placeholder="Search"
              onChange={(event) => setSearchString(event.target.value)}
            />
          </Header>
          <CitiesList>
            {filterList.map((city) => {
              return (
                <Bg>
                  <City
                    photo={city.photo}
                    className="city"
                    onClick={() => navigateToCityPage(city.name)}>
                    <Name className="inner">{city.name}</Name>
                  </City>
                </Bg>
              );
            })}
          </CitiesList>
        </Container>
      </Flex>
    </>
  );
}
