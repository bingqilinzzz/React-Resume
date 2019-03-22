import React, { Component } from "react";
import Title from "../common/Title";
import TimeLine from "../common/TimeLine";

class Education extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div id="Education">
        <Title title={educations[0].title} titlepic="university" />
        {educations.map(item => (
          <TimeLine
            key={item.start}
            TimeStart={item.start}
            TimeEnd={item.end}
            CompanyName={item.university}
            PositionName={item.major}
            Description={item.deploma}
            Responsbility={item.majorcourse}
          />
        ))}
      </div>
    );
  }
}

export default Education;
