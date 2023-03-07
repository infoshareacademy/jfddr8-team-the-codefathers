import React, { createContext, useEffect, useState } from "react";

export type Trip = {
  id: string;
  title: string;
  city: string;
  attractions: any[];
};

type TripContextState = {
  user: string | null;
  setUser: (username: string | null) => void;
  trips: Trip[];
  setTrips: (trip: Trip[]) => void;
  tripsName: string | null;
  setTripsName: (tripName: string | null) => void;
};
type TripProviderProps = {
  children: React.ReactNode;
};
export const TripContext = createContext<TripContextState>(
  {} as TripContextState
);

export const TripProvider = ({ children }: TripProviderProps): JSX.Element => {
  const [user, setUser] = useState<string | null>("");
  const [trips, setTrips] = useState([] as Trip[]);
  const [tripsName, setTripsName] = useState<string | null>("");
  return (
    <TripContext.Provider
      value={{
        user,
        setUser,
        trips,
        setTrips,
        tripsName,
        setTripsName,
      }}>
      {children}
    </TripContext.Provider>
  );
};
