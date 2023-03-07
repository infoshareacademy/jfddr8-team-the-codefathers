import {
  Container,
  Icons,
  LinksSection,
  Copyright,
  Link,
  Flex,
  Authors,
  SocialMediaLogo
} from "../Styles/footer.styled";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/signUp" || pathname === "/signIn") {
    return null;
  } else {
    return (
      <>
        <Container id="footfoot">
          <Flex>
            <Icons>
              <SocialMediaLogo src=".\src\assets\logo-fb.png" />
              <SocialMediaLogo src=".\src\assets\logo-instagram.png" />
              <SocialMediaLogo src=".\src\assets\logo-twitter.png" />
            </Icons>
            <LinksSection>
              <Link>Terms of use</Link>
              <Link>Privacy policy</Link>
            </LinksSection>
            </Flex>
        <Copyright>
              <Authors>Copyright @2023 The Codefathers</Authors>
              <div>
            <Authors href="https://github.com/Marty3a">Martyna Abramczyk</Authors>
            <Authors href="https://github.com/JakubDolecki">Jakub Dolecki</Authors>
            <Authors href="https://github.com/sebastian-majda">Sebastian Majda</Authors>
            <Authors href="https://github.com/joanna-okorowska">Joanna Okorowska</Authors>
            <Authors href="https://github.com/Maroe1994">Marek Rogiński</Authors>
          </div>
        </Copyright>
        </Container>
      </>
    );
  }
};
