import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetail from "./components/ProjectDetail"; 
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Experience from "./components/Experience";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <Header />
          
          <Routes>
          <Route path="/" element={
              <>
                <LandingSection />
                <ProjectsSection /> 
              </>
            } />
            <Route path="projects/:projectTitle" element={<ProjectDetail />} />
            <Route path="contact" element={<ContactMeSection />} />
            <Route path="/experience" element = {<Experience />} />
          </Routes>
          <Footer />
          <Alert />
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
