import { useEffect, useState } from "react"
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

interface ITrip {
    id: string;
}

interface IItem {
    id: string,
    name: string
}
interface ICurrentTrip {
    day_1:[], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []
   

}


export const useTrip = () => {

    const [currentTrip, setCurrentTrip] = useState<ICurrentTrip>({day_1:[], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []});

    const addToTrip = ({dayNumber, data} : {dayNumber: string, data:IItem[] })  => {
        const key = `day_${dayNumber}` as keyof typeof currentTrip;
        setCurrentTrip({
            ...currentTrip,
            [`day_${dayNumber}`]: data
        })
    }

    const clearCurrentTrip = () => {
        setCurrentTrip({day_1: [], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []});
    }

    return {
        currentTrip,
        addToTrip
    }
}