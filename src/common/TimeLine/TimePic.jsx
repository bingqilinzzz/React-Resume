import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledBorder, StyledTimePic, StyledDot } from "./TimeLine.styled";

const TimePic = props => {
  return (
    <StyledTimePic id="TimePic">
      <StyledDot>
        <FontAwesomeIcon icon="circle" />
      </StyledDot>
      <StyledBorder />
    </StyledTimePic>
  );
};

export default TimePic;
