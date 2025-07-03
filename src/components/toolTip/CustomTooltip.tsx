import React from "react";
import "./CustomTooltip.css";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <span className="tooltip-container" tabIndex={0}>
      {children}
      <span className="tooltip-bubble">{content}</span>
    </span>
  );
};

export default CustomTooltip;
