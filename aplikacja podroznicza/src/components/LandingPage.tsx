import { useNavigate } from "react-router-dom";
import {
  Flex,
  Global,
  Container,
  Introduction,
  Centered,
  UpperBtn,
  LinesContainer,
  AccountQuestion,
  LowerBtn,
  Underlined,
  Line,
} from "../Styles/landing-page-styled";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function LandingPage() {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/signIn");
  };
  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const navigateToMain = () => {
    navigate("/main");
    localStorage.setItem("isLogged", "false");
  };

  return (
    <>
      <Global />
      <Flex>
        <Container>
          <Introduction>Plan your trip with TripTastic</Introduction>
          <Centered>
            <UpperBtn onClick={() => navigateToSignIn()}>Sign In</UpperBtn>
            <div>
              <LinesContainer>
                <Line />
                <AccountQuestion>Don't have an account yet?</AccountQuestion>
                <Line />
              </LinesContainer>
            </div>
            <LowerBtn onClick={() => navigateToSignUp()}>Sign Up</LowerBtn>
            <h3>or</h3>
            <Underlined onClick={() => navigateToMain()}>
              Explore as a guest
            </Underlined>
          </Centered>
        </Container>
      </Flex>
    </>
  );
}
