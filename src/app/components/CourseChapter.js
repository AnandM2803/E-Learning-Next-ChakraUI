"use client";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Icon,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { usePathname, useSearchParams } from "next/navigation";
import { PiVideoFill } from "react-icons/pi";
import Courses from "../../../public/courselist";

const Accordion = ({ chapterName, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      marginBottom="4"
      width="auto"
    >
      <Flex
        alignItems="center"
        backgroundColor="gray.100"
        padding="2"
        cursor="pointer"
        onClick={toggleAccordion}
      >
        <Text fontWeight="bold">{chapterName}</Text>
        <Icon
          as={isActive ? ChevronDownIcon : ChevronRightIcon}
          marginLeft="auto"
        />
      </Flex>
      {isActive && (
        <Box padding="2">
          <Stack spacing={2}>{children}</Stack>
        </Box>
      )}
    </Box>
  );
};

const CourseChapter = () => {
  const pathName = usePathname();
  const id = useSearchParams().get("id");
  const searchparams=useSearchParams();
  const selecteCourse=Courses.find((courses) =>courses.id===searchparams.get('id'));

  const scrollbarwidthset = {
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "black",
    },
  };

  return (
    <ChakraProvider>
      <Box
        width="100%"
        height={{ base: "auto", md: "55vh" }} 
        overflowY={{ base: "visible", md: "auto" }}
        padding={{ base: "2", md: "4" }}
        css={scrollbarwidthset}
      >
        <Accordion chapterName={selecteCourse.chapter1Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=1`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter1VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter2Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=2`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter2VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter3Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=3`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"  
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter3VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter4Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=4`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter4VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter5Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=5`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter5VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter6Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=6`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter6VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter7Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=7`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter7VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selecteCourse.chapter8Name}>
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=8`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">{selecteCourse.chapter8VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName="Chapter 9">
          <ChakraLink
            href={`${pathName}?id=${id}&chapter=9`}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <PiVideoFill />
            <Text ml="2">Watch Chapter 9</Text>
          </ChakraLink>
        </Accordion>
        
      </Box>
    </ChakraProvider>
  );
};

export default CourseChapter;
