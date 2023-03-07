import { FormEvent, useState } from "react";
import Modal from 'react-modal';
import {
  NameTripModalAction,
  NameTripModalActions,
  NameTripModalContent,
  NameTripModalInput,
  NameTripModalIntroduction,
  NameTripModalPrimaryAction,
  NameTripModalTitle
} from "../Styles/NameTripModal-styled";

export const NameTripModal = ({ show, handleClose, handleSave }: { show: boolean, handleClose: () => void, handleSave: (x: string) => void }) => {
  const [tripName, setTripName] = useState('');
  const handleTripNameChange = (event: FormEvent<HTMLInputElement>) => {
    setTripName(event.currentTarget.value);
  }

  const modalStyle = {
    overlay: {}, 
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,-50%)',
      padding: '20px',
      minWidth: '300px',
      borderRadius: '10px',

    },
  };

  return (
    <Modal isOpen={show} onRequestClose={handleClose} style={modalStyle}>
      <NameTripModalTitle>New Trip</NameTripModalTitle>
      <NameTripModalContent>
        <NameTripModalIntroduction>Please name your trip:</NameTripModalIntroduction>
        <NameTripModalInput type="text" value={tripName} onChange={handleTripNameChange} />
      </NameTripModalContent>
      <NameTripModalActions>
        <NameTripModalAction onClick={handleClose}>
          Close
        </NameTripModalAction>
        <NameTripModalPrimaryAction onClick={() => handleSave(tripName)}>
          Save Changes
        </NameTripModalPrimaryAction>
      </NameTripModalActions>
    </Modal>
  )
} 