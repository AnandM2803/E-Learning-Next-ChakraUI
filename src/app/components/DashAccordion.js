import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Image, Text, Icon } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Accordion = ({ profilePic, name, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" marginBottom="4" width="auto"> 
      <Flex
        alignItems="center"
        backgroundColor="gray.100"
        padding="2"
        cursor="pointer"
        onClick={toggleAccordion}
      >
        <Box rounded="full" overflow="hidden" marginRight="2">
          <Image src={profilePic} alt="Profile Picture" boxSize="29px" objectFit="cover" />
        </Box>
        <Text fontWeight="bold">{name}</Text>
        <Icon as={isActive ? ChevronDownIcon : ChevronRightIcon} marginLeft="auto" />
      </Flex>
      {isActive && <Box padding="2">{children}</Box>}
    </Box>
  );
};

const DashAccordion = () => {
  return (
    <ChakraProvider>
      <div style={{ width: "100%", height:'50%'}}> 
        <Accordion profilePic="/profile1.jpg" name="John Doe">
          <p>Content for section 1.</p>
        </Accordion>
        <Accordion profilePic="/profile2.jpg" name="Jane Smith">
          <p>Content for section 2.</p>
        </Accordion>
        <Accordion profilePic="/profile3.jpg" name="Michael Johnson">
          <p>Content for section 3.</p>
        </Accordion>
      </div>
    </ChakraProvider>
  );
};

export default DashAccordion;
