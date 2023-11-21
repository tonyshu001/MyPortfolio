import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Fact-checking system",
    description:
      "This project developed an innovative automated system for fact-checking claims related to climate change."
      + "Utilizing a blend of advanced NLP techniques, the system efficiently processes vast amount of data"
      + " to verify the truthfulness of various statements.",
    getImageSrc: () => require("../images/fact_checking.png"),
  },
  {
    title: "E-ticket",
    description:
      "This ASP.NET based web application revolutionizes the movie ticket purchasing experience by offering a user-friendly online platform.",
    getImageSrc: () => require("../images/e_ticket.png"),
  },
  {
    title: "Password manager with security and usability",
    description:
      "A password manager meticulously designed to balance stringent security with intuitive usability, ensuring safe and effortless password management.",
    getImageSrc: () => require("../images/password_manager.png"),
  },
  {
    title: "AI agent for Reversi",
    description:
      "A Reversi AI agent project, ingeniously employing Monte Carlo Tree Search and Minimax.",
    getImageSrc: () => require("../images/reversi.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
