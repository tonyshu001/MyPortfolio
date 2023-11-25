import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../data/images/profile_pic.jpg';



const greeting = "Hello, I am Tony!";
const bio1 = "A master of computer science student";
const bio2 = "skilled in full stack development";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}> {}
      <Avatar alt="selfie" src={profilePic} size="2xl"/>
      <Heading as="h1" size="xl" color="white">{greeting}</Heading>
      <Heading as="h2" size="lg" color="gray.300">{bio1}</Heading>
      <Heading as="h2" size="lg" color="gray.300">{bio2}</Heading>
    </VStack>


  </FullScreenSection>
);

export default LandingSection;
