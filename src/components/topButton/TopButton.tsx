import React, { useEffect } from "react";
import "./TopButton.css";

type Theme = {
  body: string;
  text: string;
};

type TopButtonProps = {
  theme: Theme;
};

const TopButton: React.FC<TopButtonProps> = ({ theme }) => {
  const GoUpEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollFunction = () => {
    const topButton = document.getElementById("topButton");
    if (!topButton) return;

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const onMouseEnter = (color: string, bgColor: string) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");

    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }

    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color: string, bgColor: string) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");

    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }

    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        visibility: "hidden", // default state
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
};

export default TopButton;
