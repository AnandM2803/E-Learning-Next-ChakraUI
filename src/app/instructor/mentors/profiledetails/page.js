'use client';
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Collapse,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Mentor from "../../../../../public/mentorlist";
import { useSearchParams } from "next/navigation";

function ProfileDetails() {
  const searchParams = useSearchParams();
  const selectedProfileId = searchParams.get("id");
  const selectedProfile = Mentor.find(
    (profile) => profile.id === selectedProfileId
  );
  const [visibleTimings, setVisibleTimings] = useState({});

  const toggleTimings = (day) => {
    setVisibleTimings((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  if (!selectedProfile) {
    return <Text>Profile not found</Text>;
  }

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      ml={"7px"}
      maxWidth={"auto"}
      h={'87vh'}
      overflowY={'scroll'}
    >
      <Box
        backgroundColor={"#6EACDA"}
        p={8}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        display={{ base: "block", md: "flex" }}
      >
        <HStack spacing={4} mb={4} direction={{ base: "column", md: "row" }}>
          <Image
            src={selectedProfile.photoUrl}
            alt={selectedProfile.mentorName}
            width={{ base: "100px", md: "150px" }}
            height={{ base: "100px", md: "150px" }}
            borderRadius="full"
            mb={{ base: 4, md: 0 }}
          />
          <VStack
            align="start"
            spacing={2}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              fontSize={{ base: "14px", md: "17px" }}
              fontWeight="bold"
              color={"white"}
            >
              {selectedProfile.mentorName}
            </Text>
            <Text fontSize={{ base: "13px", md: "16px" }} color={"white"}>
              {selectedProfile.technologyName}
            </Text>
            <Text
              fontSize={{ base: "13px", md: "16px" }}
              color={"white"}
              gap={"4px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Icon as={MdStarRate} /> {selectedProfile.ratings}
            </Text>
            <Text
              fontSize={{ base: "13px", md: "16px" }}
              color={"white"}
              gap={"4px"}
              display={"flex"}
              alignItems={"center"}
              whiteSpace={"nowrap"}
            >
              <Icon as={FaLocationDot} /> {selectedProfile.location}
            </Text>
          </VStack>
        </HStack>

        <VStack
          align="start"
          spacing={2}
          ml={{ base: 0, md: "580px" }}
          mt={{ base: 4, md: 0 }}
        >
          <Box backgroundColor={"white"} width={"220px"} height={"90px"} p={3}>
            <Text color={"black"} fontSize={"14px"}>
              Starting Price
            </Text>
            <Text
              fontSize={{ base: "14px", md: "17px" }}
              fontWeight="bold"
              color={"#6EACDA"}
              mt={"8px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Icon as={FaDollarSign} /> {selectedProfile.price}.00/Hr
            </Text>
          </Box>
          <Text
            fontSize={{ base: "13px", md: "14px" }}
            color={"white"}
            gap={"4px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Icon as={FaThumbsUp} /> {selectedProfile.vote} Vote
          </Text>
        </VStack>
      </Box>

      <Box
        backgroundColor={"white"}
        width={"100%"}
        height={"auto"}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        mt={"23px"}
        p={8}
      >
        <Text
          fontSize="17"
          fontWeight="bold"
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.200"
          bg="#EEEEEE"
          height={"fit-content"}
          width={"fit-content"}
          p={3}
        >
          About Me
        </Text>
        <Text fontSize="15" color={"gray.500"} mt={"13px"}>
          {selectedProfile.aboutMe}
        </Text>
      </Box>

      {/* Timings section */}
      <Box
        backgroundColor={"white"}
        width={"100%"}
        height={"auto"}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        mt={"23px"}
        p={8}
      >
        <Text
          fontSize="17"
          fontWeight="bold"
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.200"
          bg="#EEEEEE"
          height={"auto"}
          width={"auto"}
          p={3}
        >
          Available Timings
        </Text>
        {Object.keys(selectedProfile.timings).map((day) => (
          <Box
            key={day}
            mb={2}
            mt={"6px"}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
            bg="#EEEEEE"
          >
            <Button
              variant="link"
              onClick={() => toggleTimings(day)}
              fontWeight="bold"
              fontSize="16"
              borderWidth="1px"
              borderRadius="md"
              borderColor="gray.200"
              bg="#EEEEEE"
              p={3}
            >
              {day}
            </Button>
            <Collapse in={visibleTimings[day]}>
              <Flex wrap="wrap" mt={2} spacing={2}>
                {selectedProfile.timings[day].length > 0 ? (
                  selectedProfile.timings[day].map((time) => (
                    <Box
                      key={time}
                      p={2}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor="gray.200"
                      bg="white"
                      mr={2}
                      mb={2}
                    >
                      <Text fontSize={"14px"}>{time}</Text>
                    </Box>
                  ))
                ) : (
                  <Text>Not Available</Text>
                )}
              </Flex>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileDetails;
