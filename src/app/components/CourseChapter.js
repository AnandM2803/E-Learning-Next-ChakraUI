import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Text, Icon } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Accordion = ({ chapterName, children }) => {
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
        <Text fontWeight="bold" ml='130px'>{chapterName}</Text>
        <Icon as={isActive ? ChevronDownIcon : ChevronRightIcon} marginLeft="auto" />
      </Flex>
      {isActive && <Box padding="2">{children}</Box>}
    </Box>
  );
};

const CourseChapter = () => {
  const scrollbarwidthset = {
    '&::-webkit-scrollbar': {
      width: '3px', 
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'black', 
    },
  };
  return (
    <ChakraProvider>
      <Box width="100%" height="55vh" overflowY="auto" padding="4"  css={scrollbarwidthset}>
        <Accordion chapterName='Chapter 1'>
          <p>Content for section 1.</p>
        </Accordion>
        <Accordion chapterName='Chapter 2'>
          <p>Content for section 2.</p>
        </Accordion>
        <Accordion chapterName='Chapter 3'>
          <p>Content for section 3.</p>
        </Accordion>
        <Accordion chapterName='Chapter 4'>
          <p>Content for section 4.</p>
        </Accordion>
        <Accordion chapterName='Chapter 5'>
          <p>Content for section 5.</p>
        </Accordion>
        <Accordion chapterName='Chapter 6'>
          <p>Content for section 6.</p>
        </Accordion>
        <Accordion chapterName='Chapter 7'>
          <p>Content for section 7.</p>
        </Accordion>
        <Accordion chapterName='Chapter 8'>
          <p>Content for section 8.</p>
        </Accordion>
        <Accordion chapterName='Chapter 9'>
          <p>Content for section 9.</p>
        </Accordion>
        <Accordion chapterName='Chapter 10'>
          <p>Content for section 10.</p>
        </Accordion>
        <Accordion chapterName='Chapter 11'>
          <p>Content for section 11.</p>
        </Accordion>
        <Accordion chapterName='Chapter 12'>
          <p>Content for section 12.</p>
        </Accordion>
        <Accordion chapterName='Chapter 13'>
          <p>Content for section 13.</p>
        </Accordion>
        <Accordion chapterName='Chapter 14'>
          <p>Content for section 14.</p>
        </Accordion>
        <Accordion chapterName='Chapter 15'>
          <p>Content for section 15.</p>
        </Accordion>

      </Box>
    </ChakraProvider>
  );
};

export default CourseChapter;
