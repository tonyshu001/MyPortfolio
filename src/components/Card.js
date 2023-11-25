import { Heading, HStack, Image, Text, VStack,Spacer, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';

const Card = ({ title, description, imageSrc, linkTo }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} align="start" bg="white" p={4} borderRadius="md" boxShadow="xl">
      <Image borderRadius="md" src={imageSrc} alt={title} objectFit="cover" />
      <Heading size="lg" color="black">{title}</Heading>
      <Text fontSize="md" color="black">{description}</Text>
      <Spacer />
      <Link as={RouterLink} to={linkTo} style={{ alignSelf: 'flex-start' }}>
        <Text fontSize="sm" color="blue.500" textDecoration="underline">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x"  />
        </Text>
      </Link>
    </VStack>
  );
};

export default Card;
