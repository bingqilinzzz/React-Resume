import React, { Component } from "react";
import { StyledRange } from "./TimeLine.styled";

export const TimeRange = props => {
  return (
    <StyledRange id="TimeRange">
      <div>{props.TimeStart}</div>
      <div>To</div>
      <div>{props.TimeEnd}</div>
    </StyledRange>
  );
};
