import { useEffect, useState } from "react"
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

interface ITrips {
    [x: string]: any;
}

export const useGetTrips = (id: string) => {
    const [trips, setTrips] = useState<ITrips>([]);
    useEffect(() => {
        getDocs(collection(db, `CitiesList/${id}/Venues`))
                .then((querySnapshot) => {
                    const data = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                        setTrips(data);
                })
    }, [id]);
    return {
        trips
    }
}