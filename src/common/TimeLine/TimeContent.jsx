import React, { Component } from "react";
import {
  StyledContent,
  StyledCompany,
  StyledPosition,
  StyledResponsiblity
} from "./TimeLine.styled";

const TimeContent = props => {
  return (
    <StyledContent id="TimeContent">
      <StyledCompany>{props.CompanyName}</StyledCompany>
      <StyledPosition>{props.PositionName}</StyledPosition>
      <StyledResponsiblity>{props.Description}</StyledResponsiblity>
      <StyledResponsiblity>{props.Responsbility}</StyledResponsiblity>
    </StyledContent>
  );
};

export default TimeContent;
