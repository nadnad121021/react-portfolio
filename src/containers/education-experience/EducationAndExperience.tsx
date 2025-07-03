import React from "react";
import "./EducationAndExperience.css";
// import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import Education from "./Edcucation";
import EducationAndExperienceImg from "./EducationAndExperienceImg";
import Experience from "./Experience";
// import DegreeCard from "../../components/degreeCard/DegreeCard";

type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;

};

interface EducationsProps {
  theme: Theme;
}

const EducationAndExperience: React.FC<EducationsProps> = ({ theme }) => {
  return (
    <div className="education-main" id="education-experience">
        <div className="basic-education">
          <Fade direction="down" duration={2000} >
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationAndExperienceImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education & Experience
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Qualifications and Experience Overview
                  {/* An overview of my educational achievements and work experience, reflecting the knowledge and skills acquired throughout my career. */}
                </h3>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
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
