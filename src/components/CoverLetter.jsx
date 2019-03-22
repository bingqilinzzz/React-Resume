import React from "react";
import { StyledResume } from "../common/Resume.styled";
import Header from "./Header";
import {
  StyledHR,
  StyledIcon,
  StyledParagraph,
  StyledPhase,
  StyledFooter1,
  StyledFooter
} from "./CoverLetter.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const CoverLetter = () => {
  return (
    <StyledResume>
      <Header />
      <StyledHR>Dear HR Manager</StyledHR>
      <StyledParagraph>
        <StyledIcon>
          <FontAwesomeIcon icon="graduation-cap" />
        </StyledIcon>
        <StyledPhase>
          This letter is to express my interest in your posting on your website
          for an experienced, detailed-oriented, front end web developer. With
          around over 1 year of hands-on experience efficiently coding websites
          and applications using modern language and Framework like HTML, CSS,
          and JavaScript, Familiar with Git version control system and Shell
          Command, I also learning React in my freetime. I am confident I will
          be an excellent addition to your organization.
        </StyledPhase>
      </StyledParagraph>
      <StyledParagraph>
        <StyledIcon>
          <FontAwesomeIcon icon={["fab", "gitlab"]} />
        </StyledIcon>
        <StyledPhase>
          I have a bachelor’s degree in computer science and also have
          communication skills, fluente in English, intermediate in French,
          native language in Chinese. Building state-of-the-art, easy to use,
          user friendly websites and applications is truly a passion of mine. I
          actively seek out new technologies.
        </StyledPhase>
      </StyledParagraph>
      <StyledParagraph>
        <StyledIcon>
          <FontAwesomeIcon icon="link" />
        </StyledIcon>
        <StyledPhase>
          I’ve attached a copy of my resume that details my experience, I do
          have links to the web site I’ve had the honor of working on,
          unfortunately, the links in my previous work not available at all
          cause It’s been too long. But I have some new production in my GitHub
          buiding by React.js. There is a personal protfil resume online was
          built in React.js by myself.{" "}
          <Link to="http://julie.lemontv.me/">(http://julie.lemontv.me/)</Link>
        </StyledPhase>
      </StyledParagraph>
      <StyledParagraph>
        <StyledIcon>
          <FontAwesomeIcon icon={["fab", "twitch"]} />
        </StyledIcon>
        <StyledPhase>
          I can be reached anytime via my cell phone, 438-927-0910 or via email
          at julie@lemontv.me. Thank you for your time and consideration. I look
          forward to speaking with you about this opportunity.
        </StyledPhase>
      </StyledParagraph>
      <StyledFooter1>Best Regards</StyledFooter1>
      <StyledFooter>Qingyun Zhang</StyledFooter>
      <Footer type="coverletter" />
    </StyledResume>
  );
};

export default CoverLetter;
