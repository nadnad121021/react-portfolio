import React from "react";
// import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import About from "../../containers/about/About";
// import HeaderV2 from "../../components/header/HeaderV2";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectInfoButton from "../../components/projectInfoButton/ProjectInfoButton";

interface HomeProps {
  theme: any; // Replace `any` with a Theme type if you have one
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <div>
      <Header theme={theme} /> 
      <Greeting theme={theme} />
      <About theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
      <ProjectInfoButton theme={{ body: "#fff", text: "#000" }}/>
    </div>
  );
};

export default Home;
