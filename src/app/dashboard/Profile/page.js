'use client'
import { Box, VStack, Flex, Text, Image, SimpleGrid, Heading, useMediaQuery } from "@chakra-ui/react";
import UploadPic from "./UploadPic";
import ProfileTabs from "@/app/components/ProfileTabs/ProfileTabs";


const ProfileDetails = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <Box p={2} bg="gray.50" borderRadius="md" boxShadow="md" h={'87vh'} mt={1} overflowY={'scroll'}>
      <Flex direction={isMobile ? 'column' : 'row'} align={isMobile ? "center" : "flex-start"} gap={isMobile ? '0' : '10px'}>
        <Box p={2} bg="white" borderRadius="md" boxShadow="md" h={isMobile ? 'auto' : '550px'} width={isMobile ? '100%' : '270px'} mb={isMobile ? '4' : '0'}>
          <SimpleGrid columns={1} spacing={2}>
            <VStack spacing={3}>
              <Box position="relative" boxSize="80px">
                <Image
                  borderRadius="full"
                  boxSize="87px"
                  src="/MyProfilePic.jpg"
                  alt="Anand"
                  mb={2}
                />
                <Box position="absolute" bottom={0} right={0}>
                  <UploadPic />
                </Box>
              </Box>
              <Text fontSize="13" fontWeight="bold">Ananda Kumar M</Text>
              <Text fontSize="12" color="gray.600">Std ID: 1105</Text>
              <Text fontSize="12" color="gray.600">Under Graduate</Text>
            </VStack>
          </SimpleGrid>
        </Box>
        <Box p={1} mt={isMobile ? '4' : '1'} h={isMobile ? 'auto' : '540px'} w={isMobile ? '100%' : '100%'}>
          <VStack spacing={2} align="start" columnGap={isMobile ? '0' : '40px'} h={isMobile ? 'auto' : '538px'}>
            {/* profile container  */}
            <ProfileTabs />
            {/* hello container  */}
            <Box bg="white" borderRadius="md" boxShadow="md" w={'100%'} h={'370px'} p={2}>
                
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileDetails;
