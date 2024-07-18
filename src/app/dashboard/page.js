'use client'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import DashTopCard from '../components/DashTopCard';
import MyProgressChart from '../components/MyProgressChart';
// import DashPopularLessons from '../components/DashPopularLessons';
import DashAccordion from '../components/DashAccordion';
import DashPopularCourse from '../components/DashPopularCourses';

const Dashboard = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg='#D8EFD3' h={'87vh'}>
      <Box width={'100%'} height='86vh' overflowY={"scroll"}>
        <Flex direction={isMobile ? 'column' : 'row'} align={'center'} rowGap={'10px'} gap={'20px'}>
          <Box p={'3px'} id='onebox' width={isMobile ? '100%' : 'auto'}>
            <Flex direction={'column'}>
              <Box>
                <DashTopCard />
              </Box>
              <Box>
                <DashPopularCourse />
              </Box>
            </Flex>
          </Box>
          <Box id='twobox' width={isMobile ? '100%' : 'auto'}>
            <Flex direction={'column'}>
              <Box>
                <DashAccordion />
              </Box>
              <Box mt={isMobile ? '20px' : '60px'}>
                <MyProgressChart />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
