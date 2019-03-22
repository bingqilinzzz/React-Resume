import styled from "styled-components";

export const StyledTimePic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StyledDot = styled.div`
  transition: 0.3s all ease-in;
`;
export const StyledBorder = styled.div`
  flex: 1;
  border-left: 1px solid #266eb3;
  border-right: 1px solid #266eb3;
`;

export const StyledRange = styled.div`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTimeLine = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: row;
  &:hover ${StyledDot} {
    color: #266eb3;
    font-size: 20px;
  }
`;

export const StyledContent = styled.div`
  flex: 4;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const StyledCompany = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export const StyledPosition = styled.div`
  font-size: 14px;
  color: gray;
`;
export const StyledResponsiblity = styled.div`
  font-size: 14px;
`;
