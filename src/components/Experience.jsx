import React, { Component } from "react";
import Title from "../common/Title";
import TimeLine from "../common/TimeLine";

class WorkExperience extends Component {
  render() {
    const { works } = this.props;
    return (
      <div id="WorkExperience">
        <Title title={works[0].title} titlepic="briefcase" />
        {works.map(work => (
          <TimeLine
            key={work.start}
            TimeStart={work.start}
            TimeEnd={work.end}
            CompanyName={work.company}
            PositionName={work.position}
            Description={work.description}
            Responsbility={work.responsbility}
          />
        ))}
      </div>
    );
  }
}

export default WorkExperience;
