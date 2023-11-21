import { Heading, HStack, Image, Text, VStack,Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} align="start" bg="white" p={4} borderRadius="md" boxShadow="xl">
      <Image borderRadius="md" src={imageSrc} alt={title} objectFit="cover" />
      <Heading size="lg" color="black">{title}</Heading>
      <Text fontSize="md" color="black">{description}</Text>
      <Spacer />
      <Text fontSize="sm" color="blue.500" textDecoration="underline">
        See more <FontAwesomeIcon icon={faArrowRight} size="1x"  />
      </Text>
    </VStack>
  );
};

export default Card;
