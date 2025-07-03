import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";
import { aboutMe } from "../../portfolio";
import Programmer from './Programmer'
import Beginner from './Beginner'

interface Theme {
  text: string;
  secondaryText: string;
  [key: string]: string;
}

interface SkillsProps {
   theme: {
    text: string;
    secondaryText: string;
    [key: string]: string;
  }
}

const GetAboutMeSvg: React.FC<{ fileName: string; theme: Theme }> = ({
  fileName,
  theme,
}) => {
  switch (fileName) {
    case "programmer":
      return <Programmer theme={theme} />;
    case "beginner":
      return <Beginner theme={theme} />;
    // case "CloudInfraImg":
    //   return <CloudInfraImg theme={theme} />;
    default:
      return null
  }
};

const About: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <div className="main" id="about">
      <div className="about-header-div">
        <Fade direction="down" duration={2000} >
          <h1 className="about-header" style={{ color: theme.text }}>
            About Me
          </h1>
        </Fade>
      </div>

      {
        aboutMe.map((skill,i)=>(
        <div className="about-main-div" key={i}>
            <Fade direction={i%2==0?"left":'right'} duration={2000}>
              <div className="about-image-div">
                  <GetAboutMeSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="about-text-div" key={i}>
              <Fade direction={i%2==0?"left":'right'} duration={2000}>
                <h1 className="about-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade direction={i%2==0?"left":'right'} duration={2000}>
                <div>
                  <p
                      className="subTitle about-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skill.description}
                    </p>
                </div>
              </Fade>
            </div>
        </div>
        ))
      }
    </div>
  );
};

export default About;
