import React from "react";
import { StyledCover, StyledCaretDown } from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <div>
      <StyledCaretDown>
        <FontAwesomeIcon icon="caret-down" />
      </StyledCaretDown>
      <StyledCover>
        {props.type === "resume" ? (
          <Link to="/coverletter">CoverLetter</Link>
        ) : (
          <Link to="/">Resume</Link>
        )}
      </StyledCover>
    </div>
  );
};

export default Footer;
