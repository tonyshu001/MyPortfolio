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
import '../css/experience.css';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import profilePic from '../data/images/identification_photo.jpg';

const ExperiencePage = () => {
    const resumeUrl = '/cv/Tianbo_Shu_Resume.pdf';
    const name = 'Tony Shu';
    const email = 'tonyshu0902@gmail.com';
    const phone = '+61 405146189';
    const address = '199 William St, Melbourne, VIC, Australia';

  return (
    <Container maxW="container.md" py={{ base: 30, md: 12 }}>
    <VStack spacing={5}>
    <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }} // Align items differently on mobile vs desktop
          w="full"
          p={{ base: 4, md: 6 }} // Padding responsive
          mb={6} // Margin bottom for spacing between this and next section
        >
          <Image
            boxSize="150px" // increased from 100px to 150px
            borderRadius="full"
            src={profilePic}
            alt={name}
            objectFit="cover" // ensures the image covers the area without stretching
            boxShadow="lg" // adds a large shadow for a subtle depth effect
            border="2px" // optional: adds a border
            borderColor="gray.200" // optional: sets the border color
            mr={{ base: 0, md: 6 }} // adjust margin as needed
            mb={{ base: 4, md: 0 }}
            />

          <VStack align="start" spacing={3} flex="1">
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
