import React from "react";
import Name from "../common/Header/Name";
import MyInfo from "../common/Header/Myinfo";
import BreakLine from "../common/Header/BreakLine";

const Header = () => {
  return (
    <React.Fragment>
      <Name />
      <MyInfo />
      <BreakLine />
    </React.Fragment>
  );
};

export default Header;
