import { useState, ChangeEvent } from "react";
import {
    TripList,
    TripListItem, 
    TripListWrapper,
    TripListHeader,
    TripListController,
    TripListCheckbox,
    TripListButton,
    TripListFooter
  } from "../Styles/create-trip.styled";
import { useGetTrips } from "./hooks/useGetTrips";

interface ITripListItems {
    cityId: string,
    selectedDay: string,
    currentTrip: {},
    addToTrip: ({dayNumber, data} : {dayNumber: string,data:IItem[] })=>void,
    isHidden: boolean,
    className: string
  }

  interface IItem {
    id: string,
    name: string
  }

export const TripListItems = ({className, cityId, selectedDay, addToTrip, currentTrip, isHidden}: ITripListItems ) => {
    const [selectedTrips, setSelectedTrips] = useState<IItem[]>([]);
    const { trips } = useGetTrips(cityId);
    const handleAddTo = () => {
        addToTrip({dayNumber: selectedDay, data: selectedTrips});
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>, item : IItem) => {
        const value = e.target.checked;
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

    

    return trips && (
        <TripListWrapper className={className}>
            <TripListHeader>Day selected {selectedDay}</TripListHeader>
        <TripList>
            {trips.map((item: IItem) => {
                const { id, name } = item;
                return (
                    <li key={id}>
                        <TripListController>
                            <TripListCheckbox type="checkbox" onChange={(e) => handleChange(e, item)}></TripListCheckbox>
                            <TripListItem>
                                <span>{name}</span>
                            </TripListItem>
                        </TripListController>
                    </li>
                )
            })}
        </TripList>
        <TripListFooter>
            <TripListButton onClick={handleAddTo}>Add to</TripListButton>
        </TripListFooter>
        </TripListWrapper>

    )
}