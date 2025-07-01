import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto: hello@example.com" },
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Socials */}
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
              {socials.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} size="1x" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation Links */}
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="/#projects-section">Projects</a>
              <a onClick={handleClick("contactme")} href="/#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
