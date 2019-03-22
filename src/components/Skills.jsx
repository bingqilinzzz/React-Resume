import React, { Component } from "react";
import Title from "../common/Title";
import Skill from "../common/Skill";

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
      <div id="Skills">
        <Title title={skills[0].title} titlepic="wrench" />
        <div className="skills">
          {skills.map(skill => (
            <Skill
              key={skill.name}
              skillname={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
