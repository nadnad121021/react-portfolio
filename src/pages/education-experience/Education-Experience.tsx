import React from "react";
import Header from "../../components/header/Header";
import EducationExperience from "../../containers/education-experience/EducationAndExperience";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectInfoButton from "../../components/projectInfoButton/ProjectInfoButton";


interface SkillsInterestsProps {
  theme: any; // Replace `any` with a Theme type if you have one
}

const EducationAndExperience: React.FC<SkillsInterestsProps> = ({ theme }) => {
  return (
    <div>
      <Header theme={theme} /> 
      <EducationExperience theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
      <ProjectInfoButton theme={{ body: "#fff", text: "#000" }}/>
    </div>
  );
};

export default EducationAndExperience;
