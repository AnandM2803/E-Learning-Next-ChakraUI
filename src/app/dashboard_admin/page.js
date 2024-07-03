'use client'
import { Box, VStack, HStack, useMediaQuery } from "@chakra-ui/react";
import AdminTopCard from "../components/AdminTopCard";
import AdminCourseChart from "../components/AdminCourseChart";
import AdminTaskChart from "../components/AdminTaskChart";
import AdminStudentEnrolled from "../components/AdminStudentEnrolled";
import AdminPopularTask from "../components/AdminPopularTask";
import AdminGroupProgress from "../components/AdminGroupProgress";
import React, { useState } from "react";

const Admin = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedView, setSelectedView] = useState('Week');

  const handleChangeView = (view) => {
    setSelectedView(view);
  };
  return (
    <Box 
      backgroundColor="#F3F4F6" 
      ml={{ base: "0", md: "9px" }}  
      p={{ base: "4", md: "0" }}
      overflowY="scroll"
      h={isMobile ? '100%' :'86vh'}
      overflowX={isMobile ? 'unset':'unset'}
    >
      <VStack gap="20px" h="100%">
        <Box><AdminTopCard onChangeView={handleChangeView} /></Box>

        {/* Card container */}
        <HStack 
          gap={isMobile ? "20px" : "30px"} 
          overflowX={isMobile ? "auto" : "unset"} 
          flexWrap="nowrap" 
          justifyContent={isMobile ? "flex-start" : "space-between"} 
          w="90%" 
        >
          <Box flexShrink="0" w={isMobile ? "100%" : "30%"} minWidth="200px"><AdminStudentEnrolled /></Box>
          <Box flexShrink="0" w={isMobile ? "100%" : "30%"} minWidth="200px"><AdminPopularTask /></Box>
          <Box flexShrink="0" w={isMobile ? "100%" : "30%"} minWidth="200px"><AdminGroupProgress /></Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Admin;
