import styled from "styled-components";

export const StyledSkillItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 25%;
`;
export const StyledSkillName = styled.div`
  padding: 10px 20px;
`;

export const StyledSkillDot = styled.div`
  padding: 3px;
  color: gray;
  color: ${props => (props.state === "active" ? "#266eb3" : "gray")};
`;
