"use client";
import { Box, Button, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import { LuLogIn } from "react-icons/lu";
import { SiGnuprivacyguard } from "react-icons/si";
import NextLink from "next/link";
import { ChakraProvider } from "@chakra-ui/react";

function Home() {
  return (
    <ChakraProvider>
    <Grid
      bgImage="url('/landing.PNG')"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={{ base: 4, md: 8 }}
    >
      <Box
        textAlign="center"
        backgroundColor="#fff"
        borderRadius="14px"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 4, md: 8 }}
        >
          Discover a World of Knowledge with [Your E-Learning Platform&apos;s
          Name]
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={{ base: 4, md: 8 }}>
          Expand your horizons with seamless learning experiences tailored to
          your success.
        </Text>
        <HStack
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <NextLink href="/login" passHref>
            <Button
              fontSize={{ base: "1rem", md: "1.2rem" }}
              px={{ base: 4, md: 6 }}
              py={{ base: 2, md: 3 }}
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
              leftIcon={<LuLogIn />}
              w={{ base: "full", md: "auto" }}
              m={{ base: 2, md: 4 }} 
            >
              Login
            </Button>
          </NextLink>
          <NextLink href="/signup" passHref>
            <Button
              fontSize={{ base: "1rem", md: "1.2rem" }}
              px={{ base: 4, md: 6 }}
              py={{ base: 2, md: 3 }}
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
              leftIcon={<SiGnuprivacyguard />}
              w={{ base: "full", md: "auto" }}
              m={{ base: 2, md: 4 }} 
            >
              Sign Up
            </Button>
          </NextLink>
        </HStack>
      </Box>
    </Grid>
    </ChakraProvider>
  );
}

export default Home;
