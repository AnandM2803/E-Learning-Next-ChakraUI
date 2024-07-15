"use client";
import { Box, VStack, SimpleGrid, Image, Flex, Text, Icon } from "@chakra-ui/react";
import Courses from "../../../../public/courselist";
import { FaCheck } from "react-icons/fa";

function CourseCompleted() {
  return (
    <Box p={5} overflowY={'scroll'} h={'87vh'}>
      {Courses.map((details, index) => (
        <SimpleGrid
          key={index}
          columns={{ base: 1, md: 3 }}
          spacing={2}
          mb={2}
          p={2}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          boxShadow="sm"
        >
          <Box width={'fit-content'}>
            <Image
              src={details.image}
              alt={details.name}
              height="120px"
              width="240px" 
              borderRadius="md"
            />
          </Box>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold">
              {details.name}
            </Text>
            <Text noOfLines={1}>{details.description}</Text>
            <Text color="gray.600">Author: {details.author}</Text>
          </VStack>
          <Flex
            align={{ base: 'center', md: 'flex-start' }}
            justify={{ base: 'center', md: 'end' }}
          >
            <Box border="2px solid" borderColor="green.500" p={1} borderRadius="12px">
              <Flex align="center">
                <Text fontSize="md" color="green.500" fontWeight="bold" mr={1}>
                  Completed
                </Text>
                <Icon as={FaCheck} color="green.500" />
              </Flex>
            </Box>
          </Flex>
        </SimpleGrid>
      ))}
    </Box>
  );
}

export default CourseCompleted;
