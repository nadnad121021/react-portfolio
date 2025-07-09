export interface ISettings {
  isSplash: boolean;
}

export interface IProjectInfo {
  title: string;
  description: string;
  tools: string[];
  deployedOn: string;
  repoLink: string;
}

export interface IGreeting {
  title: string;
  logo_name: string;
  nickname: string;
  quote: string;
  subTitle: string;
  resumeLink: string;
  portfolio_repository: string;
  githubProfile: string;
}

export interface IAboutMe {
  title: string;
  description: string;
  fileName: string;
}

export interface ISocialLink {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

export interface ISkillCategory {
  title: string;
  fileName: string;
  skills: string[];
  softwareSkills: {
    skillName: string;
    fontAwesomeClassname: string;
    style: Record<string, string>;
  }[];
}

export interface ISkills {
  data: ISkillCategory[];
}

export interface IOtherInterestData {
  login: string;
  avatarUrl: string;
  fontAwesomeClassname: string;
  style: Record<string, string>;
}

export interface IOtherInterest {
  title: string;
  fileName: string;
  descriptions: string[];
  data: IOtherInterestData[];
}

export interface IDegree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

export interface IExperience {
  title: string;
  subtitle: string;
  description: string;
  header_image_path: string;
  sections: {
    title: string;
    work?: boolean;
    experiences: {
      title: string;
      company: string;
      company_url: string;
      logo_path: string;
      duration: string;
      location: string;
      description: string;
      color: string;
    }[];
  }[];
}

export interface IReview {
  name: string;
  title: string;
  profile_path: string;
  website_url: string;
  comment: string;
}

export interface IProjectTool {
    skillName: string;
    fontAwesomeClassname: string;
    style: Record<string, string>;
}

export interface IProject {
  name: string;
  role: string;
  description: string;
  logo_path: string;
  duration: string;
  website_url: string;
  during: string;
  tools: IProjectTool[];
  isExerciseOnly: boolean;
}

export interface IContact {
  contactSection: {
    title: string;
    profile_image_path: string;
    description: string;
  };
  addressSection: {
    title: string;
    subtitle: string;
    locality: string;
    country: string;
    region: string;
    zipCode: string;
    streetAddress: string;
    avatar_image_path: string;
    location_map_link: string;
  };
}

export interface TPortfolioInfo {
  settings: ISettings;
  projectInfo: IProjectInfo;
  greeting: IGreeting;
  aboutMe: IAboutMe[];
  socialMediaLinks: ISocialLink[];
  skills: ISkills;
  otherInterests: IOtherInterest;
  degrees: IDegree[];
  experience: IExperience;
  reviews: IReview[];
  projects: IProject[];
  contact: IContact;
}
