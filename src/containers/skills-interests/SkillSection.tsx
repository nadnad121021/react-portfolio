import React from "react";
import "./SkillSection.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { Fade } from "react-awesome-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import ProjectImg from "./ProjectImg";
import OtherInterestImg from "./OtherInterestImg";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";
// import DesignImg from "./DesignImg";

interface Theme {
  text: string;
  secondaryText: string;
  [key: string]: string;
}

interface SkillSectionProps {
  theme: any;
}

interface SkillData {
  title: string;
  fileName: string;
  // imagePath: string;
  softwareSkills: any[]; // Ideally type this based on your structure
  skills: string[];
}

const GetSkillSvg: React.FC<{ fileName: string; theme: Theme }> = ({
  fileName,
  theme,
}) => {
  switch (fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={theme} />;
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    case "ProjectImg":
      return <ProjectImg theme={theme} />;
    case "OtherInterestImg":
      return <OtherInterestImg theme={theme} />;
    default:
      return null
  }
};

const SkillSection: React.FC<SkillSectionProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { skills } = portfolio as TPortfolioInfo
  return (
    <>
      {skills.data.map((skill: SkillData, i: number) => (
        <div key={i} className="skills-main-div">
          <Fade direction="left" duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade direction="right" duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skill.title}
              </h1>
            </Fade>
            <Fade direction="right" duration={1500}>
              <SoftwareSkill logos={skill.softwareSkills} />
            </Fade>
            <Fade direction="right" duration={2000}>
              <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
            </Fade>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillSection;
