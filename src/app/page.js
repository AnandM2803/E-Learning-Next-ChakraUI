"use client";
import { Box, Button, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import { LuLogIn } from "react-icons/lu";
import { SiGnuprivacyguard } from "react-icons/si";
import Link from "next/link";

function Home() {
  return (
    <Grid
      bgImage="url('/landing.PNG')"
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
        backgroundColor="#fff"
        borderRadius="14px"
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      >
        <Heading as="h1" fontSize="3xl" mb={4}>
          Discover a World of Knowledge with [Your E-Learning Platform&apos;s
          Name]
        </Heading>
        <Text fontSize="lg" mb={8}>
          Expand your horizons with seamless learning experiences tailored to
          your success.
        </Text>
        <HStack spacing={30} justifyContent="center">
          <Link href="/login">
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
              leftIcon={<LuLogIn />}
              spacing={4}
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
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
              leftIcon={<SiGnuprivacyguard />}
              spacing={4}
            >
              SignUp
            </Button>
          </Link>
        </HStack>
      </Box>
    </Grid>
  );
}

export default Home;
