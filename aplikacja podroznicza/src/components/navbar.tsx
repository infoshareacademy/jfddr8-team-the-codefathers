import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Login } from "./login-page";
import { ButtonExplore } from "../Styles/videoBackground-styled";
import useCollapse from "@gaearon/react-collapsed";

const GlobalStyleWrapper = createGlobalStyle`
   body {
  margin: 0;
}
`;
const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  opacity: 0.7;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.a`
  font-size: 50px;
  color: white;
  font-family: "Domine", serif;
  margin-left: 10px;
  margin-top: 20px;
  display: block;
  @media (max-width: 1120px) {
    display: none;
  }
`;
const Nav = styled.div`
  display: flex;
  color: white;
  height: 100px;
  margin-right: 30px;
  @media (max-width: 1120px) {
    display: none;
  }
`;
const NavItem = styled.div`
  margin-left: 50px;
  font-family: "Krub", sans-serif;
  display: flex;
  height: 100px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Icon = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
  margin-top: 30px;
  @media (max-width: 1120px) {
    display: none;
  }
`;
const Txt = styled.a`
  color: white;
  margin-top: 7px;
  margin-top: 35px;
  @media (max-width: 1120px) {
    display: none;
  }
`;
const Logoimg = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1120px) {
    height: 70px;
    width: 70px;
    margin-top: 15px;
  }
`;
const Logocontainer = styled.div`
  display: flex;
`;
const Usercred = styled.span`
  margin-top: 35px;
  font-family: "Krub", sans-serif;
  color: white;
  @media (max-width: 1120px) {
    margin-left: auto;
    margin-right: auto;
    width: 100px;
  }
`;

const Burger = styled.img`
  display: none;
  height: 50px;
  width: 50px;
  margin-top: 25px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1120px) {
    display: block;
  }
`;

const Menu = styled.div`
  margin-top: 100px;
  background-color: black;
  width: 100%;
  height: auto;
  opacity: 0.7;
  position: absolute;
  z-index: 2;
  @media (min-width: 1120px) {
    display: none;
  }
`;

const Label = styled.span`
  color: white;
  font-family: "Krub", sans-serif;
  font-size: 30px;
  margin-top: 5px;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const MenuItem = styled.div`
  display: flex;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 10px;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column; ;
`;
const MenuIcon = styled.img`
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export function Navbar() {
  const { pathname } = useLocation();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const log = localStorage.getItem("info");
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate("/creator");
  };
  const navigateToLanding = () => {
    navigate("/");
  };
  const navigateToMyTrips = () => {
    navigate("/myTrips");
  };
  const navigateToExplore = () => {
    navigate("/explore");
  };
  const logout = async () => {
    await signOut(auth);
    localStorage.setItem("isLogged", "false");
    navigateToLanding();
  };
  const navigateToMain = () => {
    navigate("/main");
  };

  if (pathname === "/" || pathname === "/signUp" || pathname === "/signIn") {
    return null;
  } else {
    return (
      <div>
        <GlobalStyleWrapper></GlobalStyleWrapper>
        <Container>
          <Logocontainer>
            <Logoimg
              src="src/assets/triptastic.png"
              onClick={navigateToMain}
            ></Logoimg>
            <Logo onClick={navigateToMain}>TripTastic</Logo>
          </Logocontainer>
          {localStorage.getItem("isLogged") === "true" ? (
            <Usercred>Logged in as: {log}</Usercred>
          ) : null}

          {localStorage.getItem("isLogged") === "true" ? (
            <>
              <Nav>
                <NavItem>
                  <Icon
                    src="src/assets/Mytrips.png"
                    onClick={() => navigateToMyTrips()}
                  ></Icon>
                  <Txt onClick={() => navigateToMyTrips()}>My trips</Txt>
                </NavItem>
                <NavItem>
                  <Icon
                    src="src/assets/Create.png"
                    onClick={() => navigateToExplore()}
                  ></Icon>
                  <Txt onClick={() => navigateToExplore()}>Create new trip</Txt>
                </NavItem>
                <NavItem>
                  <Icon
                    src="src/assets/Logout.png"
                    onClick={() => logout()}
                  ></Icon>
                  <Txt onClick={() => logout()}>SignOut</Txt>
                </NavItem>
              </Nav>

              <Burger
                src="/src/assets/burger.png"
                {...getToggleProps()}
              ></Burger>
            </>
          ) : (
            <>
              <Nav>
                <NavItem>
                  <Icon src="src/assets/Logout.png"></Icon>
                  <Txt onClick={() => navigateToLanding()}>SignIn/SignUp</Txt>
                </NavItem>
              </Nav>
              <Burger
                src="/src/assets/burger.png"
                {...getToggleProps()}
              ></Burger>
            </>
          )}
        </Container>
        {localStorage.getItem("isLogged") === "true" ? (
          <Menu {...getCollapseProps()}>
            <MenuContainer>
              <MenuItem>
                <MenuIcon
                  src="src/assets/Mytrips.png"
                  onClick={() => navigateToMyTrips()}
                ></MenuIcon>
                <Label onClick={() => navigateToMyTrips()}>My Trips</Label>
              </MenuItem>
              <MenuItem>
                <MenuIcon
                  src="src/assets/Create.png"
                  onClick={() => navigateToExplore()}
                ></MenuIcon>
                <Label onClick={() => navigateToExplore()}>
                  Create new trip
                </Label>
              </MenuItem>
              <MenuItem>
                <MenuIcon
                  src="src/assets/Logout.png"
                  onClick={() => logout()}
                ></MenuIcon>
                <Label onClick={() => logout()}>SignOut</Label>
              </MenuItem>
            </MenuContainer>
          </Menu>
        ) : (
          <Menu {...getCollapseProps()}>
            <MenuContainer>
              <MenuItem>
                <MenuIcon
                  src="src/assets/Logout.png"
                  onClick={() => navigateToLanding()}
                ></MenuIcon>
                <Label onClick={() => navigateToLanding()}>SignIn/SignUp</Label>
              </MenuItem>
            </MenuContainer>
          </Menu>
        )}
      </div>
    );
  }
}
