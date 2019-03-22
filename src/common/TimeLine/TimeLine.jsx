import React, { Component } from "react";
import { TimeRange } from "./TimeRange";
import TimePic from "./TimePic";
import { StyledTimeLine } from "./TimeLine.styled";
import TimeContent from "./TimeContent";

const TimeLine = props => {
  return (
    <StyledTimeLine id="TimeLine">
      <TimeRange TimeStart={props.TimeStart} TimeEnd={props.TimeEnd} />
      <TimePic />
      <TimeContent
        CompanyName={props.CompanyName}
        PositionName={props.PositionName}
        Description={props.Description}
        Responsbility={props.Responsbility}
      />
    </StyledTimeLine>
  );
};

export default TimeLine;
