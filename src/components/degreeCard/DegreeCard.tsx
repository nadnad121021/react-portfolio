import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";

type Degree = {
  title: string;
  subtitle: string;
  duration: string;
  descriptions: string[];
  logo_path?: string;
  alt_name?: string;
  website_link?: string;
};

type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;
};

interface DegreeCardProps {
  key:number
  degree: Degree;
  theme: Theme;
}

const DegreeCard: React.FC<DegreeCardProps> = ({ degree, theme }) => {
  return (
    <div className="degree-card">
      {degree.logo_path && (
        <Flip direction={"vertical"} duration={2000}>
          <div className="degree-card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={`/images/education-experience/${degree.logo_path}`}
              alt={degree.alt_name || "degree-logo"}
            />
          </div>
        </Flip>
      )}
      <Fade direction="right" duration={2000}>
        <div
          className="degree-card-body"
          style={{ width: degree.logo_path ? "90%" : "100%" }}
        >
          <div
            className="degree-body-header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="degree-body-header-title">
              <h2 className="degree-card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="degree-card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="degree-body-header-duration">
              <h3 className="degree-duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="degree-body-content">
            {degree.descriptions.map((sentence, index) => (
              <p
                key={index}
                className="degree-content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            ))}
            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="degree-visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="degree-btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default DegreeCard;
