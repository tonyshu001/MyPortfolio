import React from 'react';
import {
    Flex,
    Box,
    VStack,
    Text,
    Button,
    Image,
    Heading,
    Container,
    Stack,
    Icon
  } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';

const ExperiencePage = () => {
    const resumeUrl = '/cv/Tianbo_Shu_Resume.pdf';
    const profilePic = '../data/images/identification_photo.jpg';
    const name = 'Tony Shu';
    const email = 'tony.shu@email.com';
    const phone = '123-456-7890';
    const address = '1234 Address St, City, Country';

  return (
    <Container maxW="container.md" py={10}>
    <VStack spacing={5}>
      <Flex alignItems="center">
        <Image
          boxSize="100px"
          borderRadius="full"
          src={profilePic}
          alt={name}
          mr={4}
        />
        <VStack align="start" spacing={1}>
          <Heading as="h2" size="lg">{name}</Heading>
          <Stack direction="row" align="center">
            <Icon as={EmailIcon} w={4} h={4} mr={2} />
            <Text fontSize="md">{email}</Text>
          </Stack>
          <Stack direction="row" align="center">
            <Icon as={PhoneIcon} w={4} h={4} mr={2} />
            <Text fontSize="md">{phone}</Text>
          </Stack>
          <Stack direction="row" align="center">
            <Icon as={InfoIcon} w={4} h={4} mr={2} />
            <Text fontSize="md">{address}</Text>
          </Stack>
        </VStack>
      </Flex>

      <Button as="a" href={resumeUrl} download leftIcon={<Icon as={EmailIcon} />} colorScheme="blue">
        Download CV
      </Button>

        {/* Education Section */}
        <Box w="100%">
          <Heading as="h3" size="lg" className="content h2">Education</Heading>
          <Text fontSize="md" className="project-description">Your degree and university name here.</Text>
          <Text className="collapsible-section active">Education Details</Text> {/* Dummy collapsible section */}
        </Box>

        {/* Work Experience Section */}
        <Box w="100%">
          <Heading as="h3" size="lg" className="content h2">Work Experience</Heading>
          <Text fontSize="md" className="project-description">Your job title and company name here.</Text>
          <Text className="collapsible-section active">Work Experience Details</Text> {/* Dummy collapsible section */}
        </Box>

        {/* Skills Section */}
        <Box w="100%">
          <Heading as="h3" size="lg" className="content h2">Skills</Heading>
          <Text fontSize="md" className="project-description">List your skills here.</Text>
          <Text className="collapsible-section active">Skills Details</Text> {/* Dummy collapsible section */}
        </Box>
      </VStack>

      <Box className="back-to-home-wrapper">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </Box>
    </Container>
  );
};

export default ExperiencePage;
