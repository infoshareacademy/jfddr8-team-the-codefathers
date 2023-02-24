import { useEffect, useState } from "react"
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

interface ITrip {
    id: string;
}

interface IItem {
    id: string,
    name: string
    selected: boolean
}
interface ICurrentTrip {
    day_1:[], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []
}


export const useTrip = () => {

    const [currentTrip, setCurrentTrip] = useState<IItem[][]>([[]]);

    return {
        currentTrip,
        setCurrentTrip
    }
}