import React from "react";
import "./EducationAndExperience.css";
import { Fade } from "react-awesome-reveal";
import Experience from "./Experience";
import Education from "./Education";
import EducationExperienceImg from "./EducationExperienceImg";

interface EducationAndExperienceProps {
  theme: any;
}

const EducationAndExperience: React.FC<EducationAndExperienceProps> = ({ theme }) => {
  return (
    <div className="education-experience-main" id="education-experience">
      <div className="basic-education-experience-review">
        <Fade direction="right" duration={1000} >
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationExperienceImg theme={theme} />
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education & Experience
                </h1>
                Qualifications and Experience Overview
              </div>
            </div>
          </div>
        </Fade>
        <Education theme={theme} />
        <Experience theme={theme} />
      </div>
    </div>
  );
};

export default EducationAndExperience;
