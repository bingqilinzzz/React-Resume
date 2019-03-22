import styled from "styled-components";

export const StyledBreakLine = styled.div`
  position: relative;
  border-bottom: 2px solid #ccc;
  float: left;
  height: 10px;
  width: 100%;
  margin: 20px 0;
  &::before {
    position: absolute;
    content: "";
    border-top: 8px solid #ccc;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    height: 5px;
    left: 50%;
    top: 12px;
  }
  &::after {
    position: absolute;
    content: "";
    border-top: 8px solid white;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    height: 5px;
    left: 50%;
    top: 7px;
  }
`;
