import React from "react";
import Header from "../../components/header/Header";
import Contact from "../../containers/contact/Contact";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectInfoButton from "../../components/projectInfoButton/ProjectInfoButton";

interface ContactProps {
  theme: any; // Replace `any` with a Theme type if you have one
}

const ContactMe: React.FC<ContactProps> = ({ theme }) => {
  return (
   
    <div>
      <Header theme={theme} /> 
      <Contact theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
      <ProjectInfoButton theme={{ body: "#fff", text: "#000" }}/>
    </div>
  );
};

export default ContactMe;
