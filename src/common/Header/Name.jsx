import React from "react";
import {
  StyledName,
  StyledWrap,
  StyledLangue,
  StyleCv,
  StyledLine,
  StyledEn,
  StyledFr
} from "./Name.styled";
import dataEn from "../../assets/data-en.json";
import { Link } from "react-router-dom";
import enFlag from "../../assets/Canada.png";
import frFlag from "../../assets/France.png";

const Name = props => {
  return (
    <StyledLine>
      <StyledWrap>
        <StyledName>{dataEn.myinfo.name}</StyledName>
        <StyleCv>Curriculum vitae</StyleCv>
      </StyledWrap>
      <StyledLangue>
        <StyledEn>
          <Link to="/en">
            <img alt="en" src={enFlag} />
          </Link>
        </StyledEn>
        <StyledFr>
          <Link to="/fr">
            <img alt="fr" src={frFlag} />
          </Link>
        </StyledFr>
      </StyledLangue>
    </StyledLine>
  );
};

export default Name;
