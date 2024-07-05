'use client'
import { Box, Flex, SimpleGrid, Heading, Text, VStack, useMediaQuery } from "@chakra-ui/react"
import ProfileFormEdit from "../ProfileFormEdit/ProfileFormEdit"

const ProfileDetails = () => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");

    return (
        <Box bg="white" borderRadius="md" boxShadow="md" pl={2} p={2} width={'100%'}>
            <Flex justifyContent="space-between" align="center" mb={2} width={'100%'}>
                <Heading size="md">Personal Information</Heading>
                <ProfileFormEdit />
            </Flex>
            <SimpleGrid columns={1} spacing={2} pl={3} width={'100%'}>
                <VStack spacing={1} align='start' width={'100%'}>
                    <Flex align="center" width={'100%'}>
                        <Text fontWeight="bold" w="120px" fontSize={'13px'}>First Name</Text>
                        <Text>:</Text>
                        <Text ml={4} fontSize={'12px'} overflow={'hidden'} textOverflow={'ellipsis'}>Ananda</Text>
                    </Flex>
                    <Flex align="center" width={'100%'}>
                        <Text fontWeight="bold" w="120px" fontSize={'13px'} overflow={'hidden'} textOverflow={'ellipsis'}>Last Name</Text>
                        <Text>:</Text>
                        <Text ml={4} fontSize={'12px'}>Kumar M</Text>
                    </Flex>
                    <Flex align="center" width={'100%'}>
                        <Text fontWeight="bold" w="120px" fontSize={'13px'}>Email ID</Text>
                        <Text>:</Text>
                        <Text ml={4} fontSize={'12px'} whiteSpace={'nowrap'}overflow={'hidden'} textOverflow={'ellipsis'}>anand1999m@gmail.com</Text>
                    </Flex>
                    <Flex align="center" width={'100%'}>
                        <Text fontWeight="bold" w="120px" fontSize={'13px'}>Phone No</Text>
                        <Text>:</Text>
                        <Text ml={4} fontSize={'12px'}>+91 9731091911</Text>
                    </Flex>
                    <Flex align="center" width={'100%'}>
                        <Text fontWeight="bold" w="120px" fontSize={'13px'}>Address</Text>
                        <Text>:</Text>
                        <Text ml={4} fontSize={'12px'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow={'ellipsis'}>
                            T Dasarahalli Bangalore, Karnataka
                        </Text>
                    </Flex>
                </VStack>
            </SimpleGrid>
        </Box>
    )
}

export default ProfileDetails;
