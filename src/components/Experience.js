import React, { useState } from 'react';
import {
    Flex,
    Box,
    VStack,
    HStack,
    Text,
    Button,
    Image,
    Heading,
    Container,
    Stack,
    Icon,
    UnorderedList,
    ListItem,
    Table, 
    Tbody, 
    Tr, 
    Td,
  } from '@chakra-ui/react';
import '../css/experience.css';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import profilePic from '../data/images/identification_photo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faL } from "@fortawesome/free-solid-svg-icons";
import { Divider } from '@chakra-ui/react';
import uniMelbLogo from '../data/images/unimelb_logo.png'; 
import WaikatoLogo from '../data/images/waikato_logo.png'
import yunjiLogo from '../data/images/yunji_logo.png';



const ExperiencePage = () => {
    const resumeUrl = '/cv/Tianbo_Shu_Resume.pdf';
    const name = 'Tony Shu';
    const email = 'tonyshu0902@gmail.com';
    const phone = '+61 405146189';
    const address = '199 William St, Melbourne, VIC, Australia';

    const [showEducation, setShowEducation] = useState(false);
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const toggleEducation = () => {
      setShowEducation(!showEducation);
    };

    const toggleWorkExperience = () => {
      setShowWorkExperience(!showWorkExperience);
    };

    const toggleShowSKills = () => {
      setShowSkills(!showSkills);
    };
  
    const getIcon = (isActive) => {
      return isActive ? faChevronUp : faChevronDown;
    };



  return (
    <Container maxW="container.md" py={{ base: 30, md: 12 }}>
    <VStack spacing={5}>
    <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }} 
          w="full"
          p={{ base: 4, md: 6 }} // Padding responsive
          mb={6} 
        >
          <Image
            boxSize="150px" 
            borderRadius="full"
            src={profilePic}
            alt={name}
            objectFit="cover" 
            boxShadow="lg" 
            border="2px" 
            borderColor="gray.200" 
            mr={{ base: 0, md: 6 }} 
            mb={{ base: 4, md: 0 }}
            />

          <VStack align="start" spacing={3} flex="1" ml={{ base: 0, md: 48 }}>
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

        <Box className="profile-section" p={5} boxShadow="sm" rounded="lg" mt={-10} bg="white">
            <Heading as="h3" size="md" fontWeight="bold" mb={4}>Profile</Heading>
            <Text fontSize="md" color="gray.700">
                I am a keen developer with great communication skills and a strong foundation in web
                development, and proficiency in frameworks. I completed my Bachelor degree in 2021, and
                will be completing my Masters of Computer Science in 06/2024. I completed an internship
                in 2022 and would love to gain more professional experience, both for my growth and
                development, and ideally to find a company I can grow with and contribute to. I hold a
                student visa, which enables me to have unlimited working hours during the summer break.
            </Text>
        </Box>

      <Button as="a" href={resumeUrl} download leftIcon={<Icon as={EmailIcon} />} colorScheme="blue">
        Download CV
      </Button>


      <div className="collapsible-section" onClick={toggleEducation}>
        <span>Education</span>
        <FontAwesomeIcon icon={getIcon(showEducation)} className="fa-icon" />
      </div>
      {showEducation && (

          <VStack spacing={4} align="start" className="education-background">
            <Box className="education-highlight" p={5}>
              <Flex alignItems="center" justifyContent="flex-start">
                <Image 
                  src={uniMelbLogo} 
                  boxSize="50px" 
                  alt="UniMelb Logo" 
                  borderRadius="full" 
                  mr={4} // Added margin to the right of the logo
                />
                <VStack align="start" spacing={1} ml={4}> {/* Optionally add marginLeft here */}
                  <Text fontSize="md" fontWeight="semibold">University of Melbourne, Melbourne, VIC</Text>
                  <HStack justifyContent="space-between" width="full">
                    <Text fontSize="lg" fontWeight="bold">Master of Computer Science</Text>
                    <Text fontSize="md" fontWeight="semibold">07/2022 - 06/2024</Text>
                  </HStack>
                  <Text fontSize="md">WAM: <Text as="span" fontWeight="bold">81.875/100</Text></Text>
                  <Text fontSize="md" fontWeight="semibold">Main subjects:</Text>
                  <Text fontSize="md">Research Methods, Machine Learning, Natural Language Processing, AI Planning, Mobile Computing, Database Management Systems</Text>
                  <Text fontSize="md" fontWeight="semibold">Awards:</Text>
                  <UnorderedList>
                    <ListItem><Text>Melbourne Engineering and InformationTechnology Foundation Scholarship, 2022 - 2024 </Text></ListItem>
                    <ListItem><Text>Melbourne Welcome Grant, 2022 </Text></ListItem>
                  </UnorderedList>
                </VStack>
              </Flex>
            </Box>

              <Box p={5}>
              <Text fontSize="md" className="project-description">
                  As a Master's student in Computer Science at the University of Melbourne, I have immersed myself in a comprehensive study of advanced topics within the field, such as AI and machine learning. The program's research-oriented approach has significantly enhanced my academic capabilities. I have developed a deep understanding of how to critically analyze scientific papers, identify research gaps, and engage in scientific and academic writing.
                </Text>
                <Text fontSize="md" className="project-description">
                  A key aspect of my studies has been the improvement of my communication skills, evident through my successful academic presentations, and proactive interactions within group work and academic community.
                </Text>
                <Text fontSize="md" className="project-description">
                  My current research focuses on trajectory compression and query processing over compressed data. This work has been a blend of theoretical understanding and practical application, leading to the submission of a well-received research proposal, which earned a remarkable 95% score. Additionally, my academic presentation on the subject was awarded a perfect score of 100%, reflecting my proficiency in conveying complex concepts clearly and effectively.
                </Text>
                <Text fontSize="md" className="project-description">
                This journey has not only broadened my technical expertise but also sharpened my ability to tackle complex problems with innovative solutions in a professional context.
                </Text>

                <Flex justifyContent="center" width="full" mt={4}>
                <Button
                  as="a"
                  href="/transcripts/Tianbo_master_transcript.pdf" // Update with the actual path to your transcript
                  download
                  leftIcon={<DownloadIcon />}
                  colorScheme="blue"
                  mt={4}
                >
                  Download Transcript
                </Button>
                </Flex>
              </Box>

          {/* Separator for multiple education entries */}
          <Divider my={5} />

          <Box className="education-highlight" p={5}>
              <Flex alignItems="center" justifyContent="flex-start">
                <Image 
                  src={WaikatoLogo} 
                  boxSize="50px" 
                  alt="Waikato Logo" 
                  borderRadius="full" 
                  mr={4} 
                />
                <VStack align="start" spacing={1} ml={4}> {/* Optionally add marginLeft here */}
                  <Text fontSize="md" fontWeight="semibold">University of Waikato, Hamilton, New Zealand</Text>
                  <HStack justifyContent="space-between" width="full">
                    <Text fontSize="lg" fontWeight="bold">Bachelor of Science in Computer Science</Text>
                    <Text fontSize="md" fontWeight="semibold">02/2019 - 11/2021</Text>
                  </HStack>
                  <Text fontSize="md">GPA: <Text as="span" fontWeight="bold">8.67/9</Text></Text>
                  <Text fontSize="md" fontWeight="semibold">Main subjects:</Text>
                  <Text fontSize="md">Object-Orinted Programming, Data Structures & Algorithms, Design & Analysis of Algorithms, Web Development, Mobile Computing, Database Design, Data Mining</Text>
                  <Text fontSize="md" fontWeight="semibold">Awards:</Text>
                  <UnorderedList>
                    <ListItem><Text>Dean's List, 2021 </Text></ListItem>
                    <ListItem><Text>Dean's List, 2020 </Text></ListItem>
                    <ListItem><Text>Undergraduate High Achievement Bursary for International Students, 2019 </Text></ListItem>
                  </UnorderedList>
                </VStack>
              </Flex>
            </Box>

            <Box p={5}>
              <Text fontSize="md" className="project-description">
              My computer science journey started at the University of Waikato, where I built a strong base in programming, software development, and computational theories. More importantly, It’s where I found my passion for the field of computer science.
                </Text>
                <Text fontSize="md" className="project-description">
                  I stood out as a top student, maintaining a perfect GPA for two consecutive years. I also spent a lot of time helping my fellow students understand the material taught in our classes and prepare for exams. I believe that teaching others is a great way to make sure you really know the topic yourself. Plus, it was a great chance to work on my communication skills.
                </Text>
                

                <Flex justifyContent="center" width="full" mt={4}>
                <Button
                  as="a"
                  href="/transcripts/Tianbo_bachelor_transcript.pdf" // Update with the actual path to your transcript
                  download
                  leftIcon={<DownloadIcon />}
                  colorScheme="blue"
                  mt={4}
                >
                  Download Transcript
                </Button>
                </Flex>
              </Box>
        </VStack>
    )}
      

      <div className="collapsible-section" onClick={toggleWorkExperience}>
        <span>Work Experience</span>
        <FontAwesomeIcon icon={getIcon(showWorkExperience)} className="fa-icon" />
      </div>
      
        {showWorkExperience && (
          <VStack spacing={4} align="start" className="education-background">
          <Box className="education-highlight" p={5}>
            <Flex alignItems="center" justifyContent="flex-start">
              <Image 
                src={yunjiLogo} 
                boxSize="50px" 
                alt="yunji Logo" 
                borderRadius="full" 
                mr={4} // Added margin to the right of the logo
              />
              <VStack align="start" spacing={1} ml={4}> {/* Optionally add marginLeft here */}
                <Text fontSize="md" fontWeight="semibold">Yunji Technology, Beijing, China</Text>
                <HStack justifyContent="space-between" width="full">
                  <Text fontSize="lg" fontWeight="bold">Java Developer Intern</Text>
                  <Text fontSize="md" fontWeight="semibold">01/2022 - 04/2022</Text>
                </HStack>
                
                <Text fontSize="md" fontWeight="semibold">Contribution:</Text>
                <UnorderedList>
                  <ListItem><Text>Addressed data inconsistency between CRM systems and company databases through API integration </Text></ListItem>
                  <ListItem><Text>Reduced code redundancy in existing projects </Text></ListItem>
                  <ListItem><Text>Developed database structures for new web applications</Text></ListItem>
                </UnorderedList>
              </VStack>
            </Flex>
          </Box>

          <Box pl={5} pr={5} pb={5} pt={0} boxShadow="sm" rounded="lg" bg="white" mt={-3}>
              <UnorderedList mt={3} spacing={2}>
                <ListItem>
                  <Text fontSize="md" className="project-description">Developed batch processing within REST APIs, reducing API calls by 75%. This integration significantly enhanced the efficiency and consistency of data flow between systems.</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="md" className="project-description">Conducted code refactoring using the SOLID principles, leading to a 20% reduction in redundant code. This optimization resulted in improved performance and maintainability of the software.</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="md" className="project-description">Designed over 20 unique tables for different objects required in the company’s website processing logic, and implemented indexing for efficient data retrieval. The database structures were noted for their efficient and robust design.</Text>
                </ListItem>
              </UnorderedList>
            </Box>
            </VStack>
        )}


      <div className="collapsible-section" onClick={toggleShowSKills}>
        <span>Skills</span>
        <FontAwesomeIcon icon={getIcon(showSkills)} className="fa-icon" />
      </div>

      
      {showSkills && (
        <Box className="skills-section" p={5} boxShadow="sm" rounded="lg" bg="white" mt={5}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight="semibold">Programming Languages</Td>
                <Td>Java, C#, Python, PHP, JavaScript</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold">Web Development</Td>
                <Td>Responsive Web Design, REST API Deployment</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold">Frameworks</Td>
                <Td>React.js, .NET MVC, Spring Technologies</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold">Database Management</Td>
                <Td>MySQL, PostgreSQL</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold">Software Development</Td>
                <Td>Agile Methodologies, SOLID, TDD, Version Control</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold">Others</Td>
                <Td>Machine Learning, Data Structures & Algorithms, AWS</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )} 
      
      </VStack>

       <Box className="back-to-home-wrapper">
         <Link to="/" className="back-to-home">Back to Home</Link>
       </Box>
     </Container>
  );
};

export default ExperiencePage;
