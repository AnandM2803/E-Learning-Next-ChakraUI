'use client'
import { Box, Flex, Text, Badge, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';
import Mentor from "../../../../public/mentorlist";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePriceChange } from "react-icons/md";

function Mentors() {
  return (
    <Box p={4} maxHeight="87vh" overflowY="auto">
      {Mentor.map((details, index) => (
        <Flex
          key={index}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
          mb={4}
          align="center"
          boxShadow="md"
          direction={{ base: "column", md: "row" }}
          minWidth={0}
        >
          <Image
            src={details.photoUrl}
            alt={details.mentorName}
            boxSize="150px"
            borderRadius="md"
            objectFit="cover"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
          />
          <Box flex="1" w="fit-content" maxWidth="50%" id="first flex" flexShrink={1} overflow="hidden" p='20px'>
            <Flex align="center" mb={2} width={'100%'}>
              <Text fontSize="lg" fontWeight="bold">{details.mentorName}</Text>
              <Badge 
                ml={2} 
                colorScheme="green" 
                display="flex" 
                alignItems="center"
                fontSize="md"
                height="30px"
                minWidth="30px" 
                borderRadius="50%" 
                justifyContent="center" 
                p={2} 
              >
                <IoIosCheckmarkCircle />
              </Badge>
            </Flex>
            <Flex align="center" mb={2} width={'100%'}>
              <GrTechnology />
              <Text ml={2}>{details.technologyName}</Text>
            </Flex>
            <Flex align="center" mb={1} width={'100%'}> 
              <IoLocation />
              <Text ml={2}>{details.location}</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" align="flex-start">
              <Flex align="center" mb={2}>
                <FaThumbsUp />
                <Text ml={2}>{details.vote}</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <SlCalender />
                <Text ml={2}>{details.day}</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <MdOutlinePriceChange />
                <Text ml={2}>{details.price}</Text>
              </Flex>
              <Link href={`/instructor/mentors/profiledetails?id=${details.id}`}>
                <Button colorScheme="blue">View Profile</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default Mentors;
