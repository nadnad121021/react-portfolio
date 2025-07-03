import React from "react";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./Experience.css";
import { Accordion, Panel } from "baseui/accordion";
import { experience } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";


// Types
interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description?: string;
  [key: string]: any; // Additional props if needed
}

interface Theme {
  text: string;
  headerColor: string;
  [key: string]: string;
}

interface ExperienceProps {
  theme: Theme;
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {

  return (
    <div className="main" id="experience">
      <div className="educations-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Experience
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        <div className="experience-accord">
          <Accordion
          >
            {experience.sections.map((section) => (
              <Panel
                title={section.title}
                key={section.title}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: theme.body,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: theme.headerColor,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: theme.text,
                      ":hover": {
                        color: theme.secondaryText,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: theme.body,
                    }),
                  },
                }}
              >
                {section.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={experience}
                  theme={theme}
                />
              ))}
              </Panel>
            ))}
          </Accordion>
           
        </div>
      </div>
    </div>

  );
}

export default Experience;
