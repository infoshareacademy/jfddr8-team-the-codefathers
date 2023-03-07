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
import { auth } from "../firebase-config";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export function Login(): JSX.Element {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/main");
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();

    const user = signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
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
        <Logintxt>Sign In</Logintxt>
        <form onSubmit={login}>
        <Fieldset>
            <legend>email:</legend>
            <Field onChange={(event) => {
              setLoginEmail(event.target.value);
            }}/>
        </Fieldset>
        <br/>
        <Fieldset>
            <legend>password:</legend>
            <Field type={"password"}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}/>
        </Fieldset>
        
        <Button type="submit" value="Sign In" />
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