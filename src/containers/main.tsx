import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Splash from "../pages/splash/splash";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Opensource from "../pages/opensource/Opensource";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import Error404 from "../pages/errors/error404/Error";
import { settings } from "../portfolio";

interface MainContainerProps {
  theme: any;
}

const MainContainer: React.FC<MainContainerProps> = ({ theme }) => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            settings.isSplash ? (
              <Splash theme={theme} />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />
        {settings.isSplash && (
          <Route path="/splash" element={<Splash theme={theme} />} />
        )}
        <Route path="/home" element={<Home theme={theme} />} />
        {/* <Route path="/education" element={<Education theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/opensource" element={<Opensource theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="*" element={<Error404 theme={theme} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
