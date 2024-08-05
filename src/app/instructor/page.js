'use client'
import { Box, Image, Text, Button, Heading, Stack, SimpleGrid,Flex } from '@chakra-ui/react';
import Link from 'next/link';
// import Mentor from '../../../public/mentorlist';
import { useState,useEffect } from 'react';

const Instructors = () => {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/instructor/getall");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);
  const topMentors = profile
    .filter((details) => details.ratings > 4.5)
    .slice(0, 3);

  return (
    <Box p="3" height={'87.5vh'}>
      <Heading as="h1" mb="3" textAlign="left" fontSize={'25px'}>
        Popular Instructors
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {topMentors.map((details, index) => (
          <Box key={index} borderWidth="2px"  overflow="hidden" backgroundColor="#fff" borderRadius="8px"
          boxShadow="0 4px 12px rgba(0,0,0,0.1)">
            <Image 
              src={`http://localhost:5000/${details.photoUrl}`} 
              alt={`${details.mentorName}'s picture`} 
              width="100%" 
              height="190px" 
              objectFit="cover" 
            />
            <Box p="4">
              <Stack spacing="2">
                <Heading size="md">{details.mentorName}</Heading>
                <Text>Technology: {details.technologyName}</Text>
                <Text>Rating: {details.ratings}</Text>
                <Text>Location: {details.location}</Text>
              </Stack>
              <Flex justify="center" mt={4}>
                <Link href="/instructor/mentors" passHref>
                  <Button size="sm" bg="teal" color="white">
                    Visit
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Instructors;
