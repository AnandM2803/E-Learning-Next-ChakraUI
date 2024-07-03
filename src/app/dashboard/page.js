'use client'
import { Box, Flex } from '@chakra-ui/react';
import DashTopCard from '../components/DashTopCard';
import MyProgressChart from '../components/MyProgressChart';
import DashPopularLessons from '../components/DashPopularLessons';
import DashAccordion from '../components/DashAccordion';

const Dashboard = () => {
  return (
    <Box h='90vh' position="relative" bg="#EBF7FF">
      <Flex 
        justify="space-between" 
        alignItems="flex-start" 
        direction={['column', 'column', 'row']}
      >
        <Box 
          position="relative" 
          minHeight={['auto', 'auto', '35vh']} 
          w={['100%', '100%', '40%']} 
          ml={['0', '0', '18px']} 
          mr={['0', '0', '10px']} 
          mb={['4', '4', '0']}
        >
          <DashTopCard />
        </Box>
        <Box 
          position={['relative', 'relative', 'absolute']} 
          top={['0', '0', '2']} 
          right={['0', '0', '20px']} 
          width={['100%', '100%', '320px']} 
          height={['auto', 'auto', '200px']} 
          p="4"
          backgroundColor="#fff"
          borderRadius="8px"
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          mb={['4', '4', '30px']}
        >
          <DashAccordion />
        </Box>
      </Flex>
      <Box 
        position={['relative', 'relative', 'absolute']} 
        top={['0', '0', '220px']} 
        right={['0', '0', '20px']} 
        width={['100%', '100%', '320px']} 
        height={['auto', 'auto', '360px']} 
        p="4"
        backgroundColor="#fff"
        borderRadius="8px"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        mb={['4', '4', '0']}
      >
        <MyProgressChart h={['auto', 'auto', '340px']} />
      </Box>
      <Box 
        width={['100%', '100%', '60.6%']} 
        height='auto' 
        position='relative'  
        bottom={['0', '0', '37px']} 
        left={['0', '0', '20px']} 
        p='0' 
        m='0'
      >
        <DashPopularLessons />
      </Box>
      
    </Box>
  );
};

export default Dashboard;

