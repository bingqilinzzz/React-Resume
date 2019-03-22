import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./Resume";
import CoverLetter from "./components/CoverLetter";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/coverletter" exact component={CoverLetter} />
        <Route path="/:langue?" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
