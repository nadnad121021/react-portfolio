import React from "react";
// import HeaderV2 from "../../components/header/HeaderV2";
import Header from "../../components/header/Header";
import ProjectAndReview from "../../containers/project-review/ProjectAndReview";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectInfoButton from "../../components/projectInfoButton/ProjectInfoButton";

interface ProjectsAndReviewsProps {
  theme: any; // Replace `any` with a Theme type if you have one
}

const ProjectsAndReviews: React.FC<ProjectsAndReviewsProps> = ({ theme }) => {
  return (
    <div>
      <Header theme={theme} /> 
      <ProjectAndReview theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
      <ProjectInfoButton theme={{ body: "#fff", text: "#000" }}/>
    </div>
  );
};

export default ProjectsAndReviews;
