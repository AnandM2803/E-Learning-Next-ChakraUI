'use client'
import { Box, Button, Grid, VStack, useMediaQuery,HStack } from "@chakra-ui/react";
import { RiAdminFill } from "react-icons/ri";
import { SiInstructure } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import Link from 'next/link';

function AccessPage() {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Grid
      bg="#F0EBE3"
      minH="100vh"
      placeItems="center"
    >
      <Box
        textAlign="center"
        maxW="xl"
        p={8}
        bg="blanchedalmond" 
        borderRadius="md"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      >
        {isMobile ? (
          <VStack spacing={12} justify="center"> 
            <Link href="#">
              <Button
                fontSize="1rem"
                px="3"
                py="2"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<RiAdminFill />}
              >
                Admin
              </Button>
            </Link>
            <Link href="#">
              <Button
                fontSize="1rem"
                px="3"
                py="2"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<SiInstructure />}
              >
                Instructor
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                fontSize="1rem"
                px="3"
                py="2"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<PiStudentBold />}
              >
                Student
              </Button>
            </Link>
          </VStack>
        ) : (
          <HStack spacing={40} justify="center">
            <Link href="/dashboard_admin">
              <Button
                fontSize="1.2rem"
                px="6"
                py="3"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<RiAdminFill />}
              >
                Admin
              </Button>
            </Link>
            <Link href="#">
              <Button
                fontSize="1.2rem"
                px="6"
                py="3"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<SiInstructure />}
              >
                Instructor
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                fontSize="1.2rem"
                px="6"
                py="3"
                bg="#4A5568"
                color="white"
                borderRadius="md"
                cursor="pointer"
                textDecoration="none"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                transition="background-color 0.3s ease, transform 0.1s ease-out"
                _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
                _active={{ bg: "#1A202C" }}
                _focus={{ outline: "none" }}
                leftIcon={<PiStudentBold />}
              >
                Student
              </Button>
            </Link>
          </HStack>
        )}
      </Box>
    </Grid>
  );
}

export default AccessPage;
