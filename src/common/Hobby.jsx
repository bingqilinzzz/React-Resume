import React, { Component } from "react";
import { StyledHobby } from "./Hobby.styled";

const Hobby = props => {
  return <StyledHobby>{props.hobby}</StyledHobby>;
};

export default Hobby;
