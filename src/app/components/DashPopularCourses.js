'use client'
import { Box, HStack, Text, Button, Image, Flex, useMediaQuery } from "@chakra-ui/react";
import Link from 'next/link';
// import Courses from "../../../public/courselist";
import { useState,useEffect } from "react";

const DashPopularCourse = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/course/getall");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Box 
      borderWidth="1px"
      backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      p={2}
      maxW={isMobile ? "100%" : isTablet ? "500px" : "700px"}
      h={'fit-content'}
      overflowY={isMobile ? "auto" : "hidden"}
    >
      <HStack justifyContent="space-between" mb={2}>
        <Text fontSize="15px" fontWeight="bold">Popular Courses</Text>
        <Link href="/dashboard/courses">
          <Button size="sm" bg="teal">View All</Button>
        </Link>
      </HStack>
      <Box overflowX="auto" maxW="100%" >
        <HStack spacing={4} minWidth="max-content" flexDirection={isMobile ? "column" : "row"}>
          {courses.slice(0,6).map((details, index) => (
            <Box 
              key={index}
              maxW={isMobile ? "100%" : "200px"}
              borderWidth="1px"
              backgroundColor="#fff"
              borderRadius="8px"
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              overflow="hidden"
              flexShrink={0}
              mb={isMobile ? 4 : 0}
            >
              <Image src={`http://localhost:5000/${details.courseImg}`}  alt={details.courseName} height="90px" width="100%" objectFit="cover" />
              <Flex p={2} direction="column" align="center" justify="space-between" h="full">
                <Box>
                  <Text fontWeight="bold" fontSize="sm" mt={2} mb={1}>{details.courseName}</Text>
                  <Text fontSize="sm">Ratings: {details.courseRating}</Text>
                  <Text fontSize="sm">Course Fees: {details.coursePrice}</Text>
                </Box>
                <Link href="/dashboard/courses">
                  <Button size="sm" mt={2} bg="teal">Visit</Button>
                </Link>
              </Flex>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default DashPopularCourse;
