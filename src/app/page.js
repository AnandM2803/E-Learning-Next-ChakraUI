"use client";
import { Box, Button, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
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
          padding='8px'
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
          <LoginPage />
          <SignUpPage />
        </HStack>
      </Box>
    </Grid>
    </ChakraProvider>
  );
}

export default Home;
