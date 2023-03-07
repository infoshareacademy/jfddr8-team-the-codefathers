import "../src/Styles/App-styled";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { CreateTrip } from "./components/create-trip";
import { Navbar } from "./components/navbar";
import { Venues } from "./components/Venues";
import { Main } from "./components/main-page";
import { Explore } from "./components/Explore";
import { Register } from "./components/register-page";
import { useEffect, useState, useContext } from "react";
import { Wrapper } from "./Styles/App-styled";
import { CityPage } from "./components/funchal";
import { Mytrippage } from "./components/Mytrippage";
import { useTrip } from "./components/hooks/useTrip";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase-config";
import {
  collection,
  updateDoc,
  getDoc,
  setDoc,
  doc,
  limit,
  query,
  where,
} from "firebase/firestore";
import { TripContext } from "./Provider/TripProvider";
import { MyTrips } from "./components/myTrips";

function App() {
  const { currentTrip, addToTrip } = useTrip();

  const { user, setUser, trips, setTrips } = useContext(TripContext);
  useEffect((): void => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;
        setUser(userEmail);

        try {
          const docRef = doc(db, "Users", `${userEmail}`);
          const TripsSnapshot = await getDoc(docRef);
          console.log(TripsSnapshot);
          if (TripsSnapshot.exists()) {
            const data = TripsSnapshot.data();
            setTrips(data.Trips);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setUser("");
        setTrips([]);
      }
    });
  }, [setUser, setTrips]);

  return (
    <HashRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="/create-new-trip/:tripId"
            element={
              <Mytrippage/>
            }
          />
          <Route path="/myTrips" element={<MyTrips />} />
          <Route path="/funchal" element={<CityPage />} />
          <Route
            path="/mytrippage"
            element={<Mytrippage currentTrip={currentTrip} />}
          />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/venues/:tripId" element={<Venues />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
