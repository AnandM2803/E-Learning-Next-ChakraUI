"use client";
import React, { useState,useEffect } from "react";
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
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/course/getall");
        const data = await response.json();
        console.log("Fetched courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const selectedCourse = courses.find((course) => course._id === id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedCourse) {
    return <div>No course found</div>;
  }
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
        <Accordion chapterName={selectedCourse.chapter1Name}>
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
            <Text ml="2">{selectedCourse.chapter1VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter2Name}>
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
            <Text ml="2">{selectedCourse.chapter2VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter3Name}>
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
            <Text ml="2">{selectedCourse.chapter3VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter4Name}>
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
            <Text ml="2">{selectedCourse.chapter4VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter5Name}>
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
            <Text ml="2">{selectedCourse.chapter5VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter6Name}>
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
            <Text ml="2">{selectedCourse.chapter6VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter7Name}>
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
            <Text ml="2">{selectedCourse.chapter7VideoName}</Text>
          </ChakraLink>
        </Accordion>
        <Accordion chapterName={selectedCourse.chapter8Name}>
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
            <Text ml="2">{selectedCourse.chapter8VideoName}</Text>
          </ChakraLink>
        </Accordion>
        
      </Box>
    </ChakraProvider>
  );
};

export default CourseChapter;