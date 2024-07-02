'use client';
import { Flex, Box, Text, VStack, Grid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { Progress } from "@chakra-ui/react";

const StudentDetails = [
    {
        image: '/studentprof1.jpg',
        name: 'Jese Leos',
        day: 'Today',
        progressValue: 70,
        text: 'How to budget and forecast your business'
    },
    {
        image: '/studentprof2.jpg',
        name: 'Trent Walton',
        day: 'Today',
        progressValue: 40,
        text: 'Powerful business writing'
    },
    {
        image: '/studentprof3.jpg',
        name: 'Omran Clark',
        day: 'Yesterday',
        progressValue: 10,
        text: 'Sales and persuasion skills for Startup'
    },
    {
        image: '/studentprof4.jpg',
        name: 'Rock',
        day: 'Today',
        progressValue: 0,
        text: 'Management and persuasion skills for Startup'
    },
    {
        image: '/studentprof6.jpg',
        name: 'Den Andrew',
        day: 'on July 2023',
        progressValue: 20,
        text: 'How to budget and forecast our business'
    },
];

const AdminStudentEnrolled = () => {
    return (
        <Grid gap={2} p={4} border='1px solid white' backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
            <Text fontSize="14px" fontWeight="bold">Students Enrolled</Text>
            {StudentDetails.map((student, index) => (
                <Flex key={index} alignItems="center" gap={2} borderBottom='1px gray solid' pb={2} mb={2}>
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='30px'
                            src={student.image}
                            alt={student.name}
                        />
                    </Box>
                    <VStack alignItems="flex-start" flex={1}>
                        <Flex alignItems="center" width="100%" gap={2} wrap="nowrap">
                            <Text fontWeight="bold" fontSize='10px' color='blue' whiteSpace="nowrap">{student.name}</Text>
                            <Text ml={1} color="gray.500" fontSize='10px' whiteSpace="nowrap">{student.day}</Text>
                            <Box width="100%">
                                <Progress colorScheme='green' size='sm' value={student.progressValue} width='90px' borderRadius='10px' ml={'35px'} />
                            </Box>
                        </Flex>
                        <Text fontSize="12px" mt={2}>{student.text}</Text>
                    </VStack>
                </Flex>
            ))}
        </Grid>
    );
}

export default AdminStudentEnrolled;
