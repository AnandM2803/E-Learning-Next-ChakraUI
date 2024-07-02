"use client";
import { Box, VStack, HStack } from "@chakra-ui/react";
import AdminTopCard from "../components/AdminTopCard";
import AdminCourseChart from "../components/AdminCourseChart";
import AdminTaskChart from "../components/AdminTaskChart";
import AdminStudentEnrolled from "../components/AdminStudentEnrolled";
import AdminPopularTask from "../components/AdminPopularTask";
import AdminGroupProgress from "../components/AdminGroupProgress";

const Admin = () => {
  return (
    <Box 
      backgroundColor={"#F3F4F6"} 
      ml={{ base: "0", md: "9px" }}  
      p={{ base: "4", md: "0" }}
      h="86vh"
      overflowY="auto"
    >
      <VStack gap='20px'>
        <Box><AdminTopCard /></Box>
        <HStack gap='30px'>
          <Box><AdminCourseChart/></Box>
          <Box><AdminTaskChart /></Box>
        </HStack>
        <HStack gap='30px'>
          <Box><AdminStudentEnrolled /></Box>
          <Box><AdminPopularTask /></Box>
          <Box><AdminGroupProgress /></Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Admin;
