import { Box, VStack, Flex, Text, Image, SimpleGrid, Heading } from "@chakra-ui/react";
import UploadPic from "./UploadPic";
import ProfileFormEdit from "./ProfileFormEdit/ProfileFormEdit";

const ProfileDetails = () => {
  return (
    <Box p={2} bg="gray.50" borderRadius="md" boxShadow="md" h={'87vh'} mt={1}>
      <Flex direction='row' align="flex-start" gap={'10px'}>
        <Box p={2} bg="white" borderRadius="md" boxShadow="md" h={'550px'} width={'270px'}>
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
        <Box p={1} mt={1} h={'540px'} w={'900px'}>
          <VStack spacing={2} align="start" columnGap={'40px'} h={'538px'}>
            {/* profile container  */}
            <Box bg="white" borderRadius="md" boxShadow="md" pl={2} p={2} w={'100%'}>
              <Flex justifyContent="space-between" align="center" mb={2}>
                <Heading size="md">Personal Information</Heading>
                <ProfileFormEdit />
              </Flex>
              <SimpleGrid columns={1} spacing={2} pl={3}>
                <VStack spacing={1} align="start">
                  <Flex align="center">
                    <Text fontWeight="bold" w="120px" fontSize={'13px'}>First Name</Text>
                    <Text>:</Text>
                    <Text ml={4} fontSize={'12px'}>Ananda</Text>
                  </Flex>
                  <Flex align="center">
                    <Text fontWeight="bold" w="120px" fontSize={'13px'}>Last Name</Text>
                    <Text>:</Text>
                    <Text ml={4} fontSize={'12px'}>Kumar M</Text>
                  </Flex>
                  <Flex align="center">
                    <Text fontWeight="bold" w="120px" fontSize={'13px'}>Email ID</Text>
                    <Text>:</Text>
                    <Text ml={4} fontSize={'12px'}>anand1999m@gmail.com</Text>
                  </Flex>
                  <Flex align="center">
                    <Text fontWeight="bold" w="120px" fontSize={'13px'}>Phone No</Text>
                    <Text>:</Text>
                    <Text ml={4} fontSize={'12px'}>+91 9731091911</Text>
                  </Flex>
                  <Flex align="center">
                    <Text fontWeight="bold" w="120px" fontSize={'13px'}>Address</Text>
                    <Text>:</Text>
                    <Text ml={4} fontSize={'12px'} flexWrap={'nowrap'}>T Dasarahalli Bangalore, Karnataka</Text>
                  </Flex>
                </VStack>
              </SimpleGrid>
            </Box>
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
