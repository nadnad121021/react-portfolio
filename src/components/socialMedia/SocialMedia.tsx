import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";

interface SocialMediaProps {
  theme: {
    text: string;
  };
}

interface MediaItem {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

const IconWrapper = styled.span<{ backgroundcolor: string; theme: SocialMediaProps['theme'] }>`
  i {
    background-color: ${(props) => props.backgroundcolor};
    borderRadius: 50%;
    padding: 2px;
    color: white;
    text-align: center;
  }

  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const SocialMedia: React.FC<SocialMediaProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { socialMediaLinks } = portfolio as TPortfolioInfo

  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media: MediaItem, i: number) => (
        <a
          key={i}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper backgroundcolor={media.backgroundColor} theme={theme}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
