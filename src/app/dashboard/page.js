'use client'
import { Box, Flex } from '@chakra-ui/react';
import DashTopCard from '../components/DashTopCard';
import MyProgressChart from '../components/MyProgressChart';
import DashPopularLessons from '../components/DashPopularLessons';
import DashAccordion from '../components/DashAccordion';

const Dashboard = () => {
  return (
    <Box h='90vh' position="relative" bg="#EBF7FF">
      <Flex justify="space-between" alignItems="flex-start">
        <Box position="relative" minHeight="35vh" w='40%' ml='18px' mr='10px'>
          <DashTopCard />
        </Box>
        <Box 
          position="absolute" 
          top="2" 
          right="20px" 
          width="320px" 
          height="200px" 
          p="4"
          boxShadow="lg" 
          borderRadius="md" 
          bg="#F6F5F2"
          marginBottom="30px"
        >
          <DashAccordion />
        </Box>
      </Flex>
      <Box 
        position="absolute" 
        top="220px" 
        right="20px" 
        width="320px" 
        height="360px" 
        p="4"
        boxShadow="lg" 
        borderRadius="md" 
        bg="#F6F5F2"
      >
        <MyProgressChart  h='340px'/>
      </Box>
      <Box width='60.6%' height='auto' position='relative'  bottom='37px' left='20px' p='0' m='0'>
        <DashPopularLessons />
      </Box>
    </Box>
  );
};

export default Dashboard;
