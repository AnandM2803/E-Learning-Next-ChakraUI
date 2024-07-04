
'use client'
import { Box,Flex,SimpleGrid,Heading,Text,VStack } from "@chakra-ui/react"
import ProfileFormEdit from "../ProfileFormEdit/ProfileFormEdit"

const ProfileDetails=()=>
{
    return(
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
    )
}
export default ProfileDetails;