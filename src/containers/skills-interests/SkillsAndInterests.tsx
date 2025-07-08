import React from "react";
import "./SkillsAndInterests.css";
import { Fade } from "react-awesome-reveal";
import OtherInterests from "./OtherInterests";
import SkillSection from "./SkillSection";

interface EducationAndExperienceProps {
  theme: any;
}

const SkillsInterests: React.FC<EducationAndExperienceProps> = ({ theme }) => {
  return (
    <div className="skills-interests-main" id="skills-interests">
      <div className="basic-skills-interests-review">
        <Fade direction="right" duration={1000} >
          <div className="heading-div">
            <div className="heading-img-div">
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  What I Do?
                </h1>
              </div>
            </div>
          </div>
        </Fade>
        <SkillSection theme={theme} />
        <OtherInterests theme={theme} />
      </div>
    </div>
  );
};

export default SkillsInterests;
