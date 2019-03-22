import React from "react";
import { StyleTitle, StylePic } from "./Title.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = props => {
  return (
    <React.Fragment>
      <StylePic>
        <FontAwesomeIcon icon={props.titlepic} />
      </StylePic>
      <StyleTitle>{props.title}</StyleTitle>
    </React.Fragment>
  );
};

export default Title;
