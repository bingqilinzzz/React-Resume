import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressCard,
  faBriefcase,
  faCircle,
  faUniversity,
  faWrench,
  faHeart,
  faCaretDown,
  faGraduationCap,
  faLink
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faGitlab,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faEnvelope,
  faAddressCard,
  faLinkedin,
  faFacebook,
  faBriefcase,
  faCircle,
  faUniversity,
  faWrench,
  faHeart,
  faCaretDown,
  faGraduationCap,
  faGitlab,
  faLink,
  faTwitch
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
