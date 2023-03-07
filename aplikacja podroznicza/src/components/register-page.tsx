import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  Global,
  Container,
  Logintxt,
  Fieldset,
  Field,
  Button,
  Separator,
  Line,
  Septxt,
  Gglimg,
  Fbimg,
  QuickSignIn,
  Facebook,
  Google
} from "../Styles/login-and-register-page-styled";
import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");

  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/main");
  };

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    const User = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    ).then((response) => {
      localStorage.setItem("info", JSON.stringify(response.user.email));
      localStorage.setItem("isLogged", "true");
      redirect();
    });
  };

  const redirect = () => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged == "true") {
      navigateToMain();
    }
  };

  return (
    <div>
      <Global />
      <Container>
        <Logintxt>Sign Up</Logintxt>
        <form onSubmit={register}>
        <Fieldset>
            <legend>email:</legend>
            <Field onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}/>
        </Fieldset>
        <br/>
        <Fieldset>
            <legend>password:</legend>
            <Field type={"password"}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}/>
        </Fieldset>
        
        <Button type="submit" value="Sign Up" />
        </form>
        <Separator>
          <Line></Line>
          <Septxt>Quick sign in with:</Septxt>
          <Line></Line>
        </Separator>
          <QuickSignIn>
          <Google>
          <Gglimg src="src/assets/Google.png"></Gglimg>
          </Google>
          <Facebook>
          <Fbimg src="src/assets/Facebook.png"></Fbimg>
          </Facebook>
          </QuickSignIn>
      </Container>
    </div>
  );
}