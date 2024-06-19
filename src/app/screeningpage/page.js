'use client'
import { Box, Button, Grid, HStack } from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiInstructure } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import Link from 'next/link';

function AccesPage() {
  return (
    <Grid
      bgImage="url('/accesspage.PNG')"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        textAlign="center"
        maxW="lg"
        p={8}
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="md"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.37)"
        backdropFilter="blur(15px)"
        border="1px solid rgba(255, 255, 255, 0.18)"
      >
        <HStack spacing={15} justifyContent="center">
          <Link href='#'>
            <Button
              fontSize="1.2rem"
              px="6"
              py="3"
              bg="linear-gradient(145deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))"
              color="white"
              borderRadius="md"
              cursor="pointer"
              textDecoration="none"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              transition="background-color 0.3s ease, transform 0.1s ease-out"
              _hover={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15))", transform: "scale(1.05)" }}
              _active={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.25))" }}
              _focus={{ outline: "none" }}
              border="1px solid rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(10px)"
              leftIcon={<FaChalkboardTeacher />} 
            >
              Teacher
            </Button>
          </Link>
          <Link href='/#'>
            <Button
              fontSize="1.2rem"
              px="6"
              py="3"
              bg="linear-gradient(145deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))"
              color="white"
              borderRadius="md"
              cursor="pointer"
              textDecoration="none"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              transition="background-color 0.3s ease, transform 0.1s ease-out"
              _hover={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15))", transform: "scale(1.05)" }}
              _active={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.25))" }}
              _focus={{ outline: "none" }}
              border="1px solid rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(10px)"
              leftIcon={<SiInstructure />} 
            >
              Instructor
            </Button>
          </Link>
          <Link href='/dashboard'>
            <Button
              fontSize="1.2rem"
              px="6"
              py="3"
              bg="linear-gradient(145deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))"
              color="white"
              borderRadius="md"
              cursor="pointer"
              textDecoration="none"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
              transition="background-color 0.3s ease, transform 0.1s ease-out"
              _hover={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15))", transform: "scale(1.05)" }}
              _active={{ bg: "linear-gradient(145deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.25))" }}
              _focus={{ outline: "none" }}
              border="1px solid rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(10px)"
              leftIcon={<PiStudentBold />} 
            >
              Student
            </Button>
          </Link>
        </HStack>
      </Box>
    </Grid>
  );
}

export default AccesPage;
