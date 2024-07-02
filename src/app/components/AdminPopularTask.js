import { Grid, Box, Text, VStack } from "@chakra-ui/react";

const popularTaskDetails = [
    {
        text: 'How to Budget and Forecast Your Business',
        people: '1,245 people participated',
    },
    {
        text: 'Leadership: Practical Skills',
        people: '1,999 people participated',
    },
    {
        text: 'Product Management Foundations',
        people: '245 people participated',
    },
    {
        text: 'Growth Leadership',
        people: '2,045 people participated',
    },
    {
        text: 'Taskname',
        people: '1,245 people participated',
    },
];

const AdminPopularTask = () => {
    return(
    <Grid
    gap={3.5} p={4} border='1px solid white' backgroundColor="#fff"
    borderRadius="8px"
    boxShadow="0 4px 12px rgba(0,0,0,0.1)"
    >
        <Text fontSize="14px" fontWeight="bold">Popular Tasks</Text>
        {popularTaskDetails.map((task, index) => (
            <VStack
            key={index} alignItems="flex-start" gap={2} borderBottom='1px gray solid' pb={2} mb={2}
            >
                <Box>
                    <Text fontWeight="bold" fontSize='13px'>
                        {task.text}
                    </Text>
                </Box>
                <Box>
                    <Text color="gray.500" fontSize='10px'>
                        {task.people}
                    </Text>
                </Box>
            </VStack>
        ))}
    </Grid>
    )
};

export default AdminPopularTask;
