import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/tonyshu001",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tianbo-shu-6a50b3246/",
  },
];

const links = [
  {
    description: "Projects",
    id: "projects",
  },
  {
    description: "Contact Me",
    id: "contactme",
  },

]

const Header = () => {
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 100) {
        // Scrolling down
        document.getElementById("header").style.transform = "translateY(-200px)";
      } else {
        // Scrolling up
        document.getElementById("header").style.transform = "translateY(0)";
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialLinks = socials.map((item) => {
    return (<a key={item.icon} href={item.url}>
      <FontAwesomeIcon icon={item.icon} size="2x"/>
    </a>)
  })

  const internalLinks = links.map((item) => {
    return (<a key={item.id} href={`/#${item.id}`} onClick={handleClick(item.id)}>
      {item.description}
    </a>)
  })


  return (
    <Box
      id="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socialLinks}
            </HStack>
            
          </nav>
          <nav>
            <HStack spacing={8}>
              {internalLinks}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
