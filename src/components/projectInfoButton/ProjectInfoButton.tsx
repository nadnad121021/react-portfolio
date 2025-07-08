import React, { useEffect, useState } from "react";
import "./ProjectInfoButton.css";
import { projectInfo } from "../../portfolio";

type ProjectInfoButtonProps = {
  theme: any;
};

const ProjectInfoButton: React.FC<ProjectInfoButtonProps> = ({ theme }) => {
  
  const [visible, setVisible] = useState(false);

  const scrollFunction = () => {
    const btn = document.getElementById("projectInfoButton");
    if (!btn) return;

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      btn.style.visibility = "visible";
    } else {
      btn.style.visibility = "hidden";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <div
      id="projectInfoButton"
      className="project-info-button"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        visibility: "hidden",
      }}
      title="Project Info"
    >
      <i className="fas fa-info-circle" id="infoIcon" aria-hidden="true" />
      {visible && (
        <div
          className="project-info-dialog"
          style={{
            backgroundColor: theme.body,
            color: theme.text,
            border: `1px solid ${theme.text}`,
          }}
        >
          <strong>{projectInfo.title}</strong>
          <ul>
            <li><strong>Tools:</strong> {projectInfo.tools.join(", ")}</li>
            <li><strong>Deployed On:</strong> {projectInfo.deployedOn}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectInfoButton;
