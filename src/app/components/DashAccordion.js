"use client";
import React, { useState } from "react";
import { ChakraProvider, Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Accordion = ({ profilePic, name, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <Box
      backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      marginBottom="4"
      width="auto"
    >
      <Flex
        alignItems="center"
        backgroundColor="#fff"
        borderRadius="8px"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        padding={{ base: "1", md: "2" }}
        cursor="pointer"
        onClick={toggleAccordion}
      >
        <Box rounded="full" overflow="hidden" marginRight="2">
          <Image
            src={profilePic}
            alt="Profile Picture"
            boxSize={{ base: "20px", md: "29px" }}
            objectFit="cover"
          />
        </Box>
        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
          {name}
        </Text>
        <Icon
          as={isActive ? ChevronDownIcon : ChevronRightIcon}
          marginLeft="auto"
        />
      </Flex>
      {isActive && <Box padding={{ base: "1", md: "2" }}>{children}</Box>}
    </Box>
  );
};

const DashAccordion = () => {
  return (
    <ChakraProvider>
      <Box width="100%" height="auto">
        <Accordion profilePic="/profile1.jpg" name="John Doe">
          <p>Content for section 1.</p>
        </Accordion>
        <Accordion profilePic="/profile2.jpg" name="Jane Smith">
          <p>Content for section 2.</p>
        </Accordion>
        <Accordion profilePic="/profile3.jpg" name="Michael Johnson">
          <p>Content for section 3.</p>
        </Accordion>
      </Box>
    </ChakraProvider>
  );
};

export default DashAccordion;
