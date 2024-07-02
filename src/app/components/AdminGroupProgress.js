import { Grid, Box, Text, VStack, Flex, Progress } from "@chakra-ui/react";

const groupDetails = [
  {
    group: 'group1',
    text: 'No of people in group',
    progressValue: 20,
  },
  {
    group: 'group2',
    text: 'No of people in group',
    progressValue: 40,
  },
  {
    group: 'group3',
    text: 'No of people in group',
    progressValue: 80,
  },
  {
    group: 'group4',
    text: 'No of people in group',
    progressValue: 0,
  },
  {
    group: 'group5',
    text: 'No of people in group',
    progressValue: 50,
  },
];

const AdminGroupProgress = () => {
  return (
    <Grid gap={3.5} p={3.5} border='1px solid white' backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)" width='100%' mx='auto'>
      <Text fontSize="14px" fontWeight="bold" mb={0.5}>Group Progress</Text>
      {groupDetails.map((groupDetail, index) => (
        <Flex key={index} alignItems="center" gap={2} borderBottom='1px gray solid' pb={2} mb={2}>
          <Box flex="1">
            <VStack align="start" spacing={1}>
              <Text fontWeight="bold" fontSize='14px'>
                {groupDetail.group}
              </Text>
              <Text color="gray.500" fontSize='12px' whiteSpace="nowrap">
                {groupDetail.text}
              </Text>
            </VStack>
          </Box>
          <Box flex="2" width={'100%'}>
            <Progress colorScheme='blue' width={'90px'} size='sm' value={groupDetail.progressValue} borderRadius='10px' ml={'25px'} />
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};

export default AdminGroupProgress;
