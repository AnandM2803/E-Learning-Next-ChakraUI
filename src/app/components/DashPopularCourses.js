import { Box, HStack, VStack, Text, Button, Image } from "@chakra-ui/react";
import Link from 'next/link';
import Courses from "../../../public/courselist";

const DashPopularCourse = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="xl">
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">Popular Courses</Text>
        <Link href="/dashboard/courses">
          <Button size="sm">View All</Button>
        </Link>
      </HStack>
      <Box overflowX="auto" maxW="xl">
        <HStack spacing={4}>
          {Courses.map((details, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={details.image} alt={details.name} height="110px" width="100%" objectFit="cover" borderRadius="md" />
              <VStack p={2} align="start">
                <Text fontWeight="bold" fontSize="md" mt={2} mb={1}>{details.name}</Text>
                <Text fontSize="sm">Ratings: {details.ratings}</Text>
                <Text fontSize="sm">Course Fees: {details.courseFees}</Text>
                <Link href="/dashboard/courses">
                  <Button size="sm" mt={2}>Visit</Button>
                </Link>
              </VStack>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default DashPopularCourse;
