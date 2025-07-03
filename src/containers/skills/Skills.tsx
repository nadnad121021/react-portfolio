import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";

interface SkillsProps {
   theme: {
    text: string;
    secondaryText: string;
    [key: string]: string;
  }
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <div className="main" id="skills-interests">
      <div className="skills-header-div">
        <Fade direction="down" duration={2000} >
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
};

export default Skills;
