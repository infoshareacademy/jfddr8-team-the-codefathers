import styled from "styled-components";
import useCollapse from "@gaearon/react-collapsed";
import { useState } from "react";
import {
  Wrapper,
  Trip,
  Tripname,
  Arrow,
  Tripcollapse,
  Day,
  Key,
  Inside,
  Title,
  Content,
  Attraction,
  Venue,
  Duration,
  How,
  Dur,
  Line,
  Background,
  Container,
} from "../Styles/myTrips-styled";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-config";

const email = localStorage.getItem("info");
const tst = JSON.parse(email);
const docRef = doc(db, "Users", tst);
const ary = await getDoc(docRef);
const data = ary.data();
const ready = data.Trips
export function MyTrips() {
 
  
  const Collapse = ready.map(({ info, days }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    let direction = "src/assets/arrow-down-sign-to-navigate.png";
    if (isExpanded === true) {
      direction = "src/assets/up.png";
    } else {
      direction = "src/assets/arrow-down-sign-to-navigate.png";
    }
    return (
      <Wrapper key={info}>
        <Trip {...getToggleProps()}>
          <Tripname>Name: {info}</Tripname>
          <Arrow src={direction}></Arrow>
        </Trip>
        <Tripcollapse {...getCollapseProps()}>
          <Day>
            {days.map(({ day, attractions }) => {
              let time = 0;
              return (
                <Key key={day}>
                  <Inside>
                    <Title>Day{day}</Title>
                    <Content>
                      {attractions.map(({ name, duration }) => {
                        time = time + duration;
                        return (
                          <Attraction key={name}>
                            <Venue>{name}</Venue>
                            <Duration>
                              <How>How long:</How>&nbsp;&nbsp;{duration}h
                            </Duration>
                          </Attraction>
                        );
                      })}
                    </Content>
                    <span>
                      <Dur>Duration:</Dur>&nbsp;&nbsp;{time}h
                    </span>
                  </Inside>
                  <Line></Line>
                </Key>
              );
            })}
          </Day>
        </Tripcollapse>
      </Wrapper>
    );
  });

  return (
    <>
      <Background>
        <Container>{Collapse}</Container>
      </Background>
    </>
  );
}
