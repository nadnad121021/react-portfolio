import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
  theme: {
    body: string;
    text: string;
  };
}

const onMouseEnter = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  color: string,
  bgColor: string
) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  color: string,
  bgColor: string
) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const Button: React.FC<ButtonProps| any> = ({ text, className = "", href, newTab = false, theme }) => {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
