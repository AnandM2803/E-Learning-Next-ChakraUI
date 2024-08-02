'use client';
import { Box, VStack, Flex, Text, Image, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import UploadPic from "./UploadPic";
import ProfileTabs from "@/app/components/ProfileTabs/ProfileTabs";
import { useProfile } from "@/app/components/ProfileContext";
import { useState, useEffect } from "react";

const ProfileDetails = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery("(min-width: 481px) and (max-width: 768px)");
  const [student, setStudent] = useState(null);
  const { profilePic, handleImageUpload } = useProfile();

  useEffect(() => {
    const studentData = localStorage.getItem('student');
    console.log('Retrieved student data from localStorage:', studentData); // Debugging line

    if (studentData) {
      try {
        const parsedStudentData = JSON.parse(studentData);
        console.log('Parsed student data:', parsedStudentData); // Debugging line
        setStudent(parsedStudentData);
      } catch (error) {
        console.error('Error parsing student data from localStorage:', error);
      }
    } else {
      console.warn('No student data found in localStorage');
    }
  }, []);

  if (!student) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={2} bg="gray.50" borderRadius="md" boxShadow="md" h={'87vh'} mt={1} overflowY={isMobile ? 'scroll' : 'hidden'}>
      <Flex
        direction={isMobile ? 'column' : isTablet ? 'column' : 'row'}
        align={isMobile || isTablet ? "center" : "flex-start"}
        gap={isMobile ? '0' : isTablet ? '0' : '10px'}
      >
        <Box
          p={2}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          h={isMobile ? 'auto' : isTablet ? 'auto' : '85vh'}
          width={isMobile ? '100%' : isTablet ? '100%' : '270px'}
          mb={isMobile ? '4' : isTablet ? '4' : '0'}
          mt={'1.5px'}
        >
          <SimpleGrid columns={1} spacing={2}>
            <VStack spacing={3}>
              <Box position="relative" boxSize="80px">
                <Image
                  borderRadius="full"
                  boxSize="87px"
                  src={profilePic}
                  alt="Profile Picture"
                  mb={2}
                />
                <Box position="absolute" bottom={0} right={0}>
                  <UploadPic onImageUpload={handleImageUpload} />
                </Box>
              </Box>
              {student && (
                <>
                  <Text fontSize="13" fontWeight="bold">{student.firstName} {student.lastName}</Text>
                  <Text fontSize="12" color="gray.600">{student.email}</Text>
                  <Text fontSize="12" color="gray.600">{student.phone}</Text>
                </>
              )}
            </VStack>
          </SimpleGrid>
        </Box>
        <Box
          p={1}
          mt={isMobile ? '2' : isTablet ? '2' : '0'}
          h={isMobile ? 'auto' : isTablet ? 'auto' : '85vh'}
          w={isMobile ? '100%' : isTablet ? '100%' : '100%'}
          overflowY={'scroll'}
        >
          <VStack
            spacing={2}
            align="start"
            columnGap={isMobile ? '0' : isTablet ? '0' : '40px'}
            h={isMobile ? 'auto' : isTablet ? 'auto' : '100%'}
          >
            <ProfileTabs />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileDetails;
