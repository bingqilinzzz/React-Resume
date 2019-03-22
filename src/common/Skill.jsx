import React from "react";
import {
  StyledSkillItem,
  StyledSkillName,
  StyledSkillDot
} from "./Skill.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = props => {
  const item = [0, 1, 2, 3, 4];
  return (
    <StyledSkillItem>
      {item.map(item => (
        <StyledSkillDot state={props.level > item ? "active" : "inactive"}>
          <FontAwesomeIcon icon="circle" />
        </StyledSkillDot>
      ))}
      <StyledSkillName>{props.skillname}</StyledSkillName>
    </StyledSkillItem>
  );
};

export default Skill;
