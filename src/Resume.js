import React, { Component } from "react";
import "./App.css";
import { StyledResume } from "./common/Resume.styled";
import dataEn from "./assets/data-en.json";
import dataFr from "./assets/data-fr.json";
import Header from "./components/Header";
import WorkExperience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Footer from "./common/Footer";

class App extends Component {
  render() {
    const {
      match: {
        params: { langue }
      }
    } = this.props;
    const data = langue === "fr" ? dataFr : dataEn;

    return (
      <StyledResume>
        <Header langue={langue} />
        <WorkExperience works={data.works} />
        <Education educations={data.educations} />
        <Skills skills={data.skills} />
        <Hobbies hobbies={data.hobbies} />
        <Footer type="resume" />
      </StyledResume>
    );
  }
}

export default App;
