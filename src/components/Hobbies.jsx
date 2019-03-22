import React, { Component } from "react";
import Title from "../common/Title";
import Hobby from "../common/Hobby";

class Hobbies extends Component {
  render() {
    const { hobbies } = this.props;
    return (
      <div id="Hobbies">
        <Title title={hobbies[0]} titlepic="heart" />
        <div className="hobbies">
          {hobbies
            .filter(item => item !== "Hobbies")
            .map(hobby => (
              <Hobby key={hobby} hobby={hobby} />
            ))}
        </div>
      </div>
    );
  }
}

export default Hobbies;
