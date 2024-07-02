'use client'
import { Box, VStack, HStack, useMediaQuery } from "@chakra-ui/react";
import AdminTopCard from "../components/AdminTopCard";
import AdminCourseChart from "../components/AdminCourseChart";
import AdminTaskChart from "../components/AdminTaskChart";
import AdminStudentEnrolled from "../components/AdminStudentEnrolled";
import AdminPopularTask from "../components/AdminPopularTask";
import AdminGroupProgress from "../components/AdminGroupProgress";

const Admin = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box 
      backgroundColor="#F3F4F6" 
      ml={{ base: "0", md: "9px" }}  
      p={{ base: "4", md: "0" }}
      overflowY="scroll"
      h={isMobile ? '100%' :'86vh'}
    >
      <VStack gap="20px" h="100%">
        <Box><AdminTopCard /></Box>

        {/* Bar chart container */}
        <HStack 
          gap={isMobile ? "20px" : "25px"} 
          overflowX={isMobile ? "auto" : "unset"} 
          flexWrap="nowrap" 
          justifyContent={isMobile ? "flex-start" : "space-between"} 
          w="90%"  // Ensure full width on mobile
        >
          <Box flexShrink="0" w={isMobile ? "100%" : "45%"} minWidth="200px"><AdminCourseChart /></Box>
          <Box flexShrink="0" w={isMobile ? "100%" : "45%"} minWidth="200px"><AdminTaskChart /></Box>
        </HStack>

        {/* Card container */}
        <HStack gap="30px">
          <Box><AdminStudentEnrolled /></Box>
          <Box><AdminPopularTask /></Box>
          <Box><AdminGroupProgress /></Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Admin;
