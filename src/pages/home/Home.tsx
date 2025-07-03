import React from "react";
// import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import About from "../../containers/about/About";
import HeaderV2 from "../../components/header/HeaderV2";
// import Header from "../../components/header/Header";
import EducationAndExperience from "../../containers/education-experience/EducationAndExperience";
import ProjectAndReview from "../../containers/project-review/ProjectAndReview";
import Contact from "../../containers/contact/Contact";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";

interface HomeProps {
  theme: any; // Replace `any` with a Theme type if you have one
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <div>
      {/* <Header theme={theme} />  */}
      <HeaderV2 theme={theme} /> 
      <Greeting theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <EducationAndExperience theme={theme} />
      <ProjectAndReview theme={theme} />
      <Contact theme={theme} />
      {/* <Footer theme={theme} /> */}
      {/* <TopButton theme={theme} /> */}
    </div>
  );
};

export default Home;
