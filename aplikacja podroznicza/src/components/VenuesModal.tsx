import {
  Photo,
  Title,
  Description,
  Container,
  TextArea,
  Duration,
  X
} from "../Styles/VenuesModal-styled";
import Modal from 'react-modal';


interface VenuesModalProps {
  name: string;
  photo: string;
  description: string;
  duration: number;
  isOpen: boolean;
  setShow: (show:boolean) => void;
}

export function VenuesModal({name, photo, description, duration, isOpen, setShow}:VenuesModalProps) {

const ModalStyles = {
  content: {
    overflow: "hidden",
    background: "transparent"
  }
}

  return (
    <Modal
    isOpen={isOpen}
    style={ModalStyles}
   >
      <Container>
      <X onClick={()=>setShow(false)}>X</X>
        <Photo src={photo}></Photo>
        <TextArea>
          <Title>{name}</Title>
          <Description>
            {description}
          </Description>
          <Duration>Duration: {duration} h</Duration>
        </TextArea>
      </Container>
    </Modal>
  );
}
