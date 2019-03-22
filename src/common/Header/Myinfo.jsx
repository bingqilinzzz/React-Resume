import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataEn from "../../assets/data-en.json";
import dataFr from "../../assets/data-fr.json";
import {
  StyledInfoIcon,
  StyledInfoContent,
  StyledInfo,
  StyledInfo3
} from "./Name.styled";

class MyInfo extends Component {
  render() {
    const data = this.props.langue === "fr" ? dataFr : dataEn;
    return (
      <div id="MyInfo">
        <StyledInfo3>
          <StyledInfo>
            <StyledInfoIcon>
              <FontAwesomeIcon icon="phone" />
            </StyledInfoIcon>
            <StyledInfoContent>{data.myinfo.phoneNumber}</StyledInfoContent>
          </StyledInfo>
          <StyledInfo>
            <StyledInfoIcon>
              <FontAwesomeIcon icon="envelope" />
            </StyledInfoIcon>
            <StyledInfoContent>{data.myinfo.email}</StyledInfoContent>
          </StyledInfo>
          <StyledInfo>
            <StyledInfoIcon>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </StyledInfoIcon>
            <StyledInfoContent>
              <a
                href="https://www.linkedin.com/in/qingyun-zhang-416a61126/"
                target="_blanket"
              >
                {dataEn.myinfo.linkedin}
              </a>
            </StyledInfoContent>
          </StyledInfo>
        </StyledInfo3>

        <StyledInfo>
          <StyledInfoIcon>
            <FontAwesomeIcon icon="address-card" />
          </StyledInfoIcon>
          <StyledInfoContent>{dataEn.myinfo.address}</StyledInfoContent>
        </StyledInfo>
      </div>
    );
  }
}

export default MyInfo;
