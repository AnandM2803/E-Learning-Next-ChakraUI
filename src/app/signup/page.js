'use client'
import {
  Box,
  Text,
  Grid,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

function Signup() {
  const router = useRouter();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = {};
    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });

      alert("Form Submitted Successfully");
      router.push('/screeningpage');
    }
  };

  return (
    <Grid
      placeItems="center"
      minH="100vh"
      bg="#F3F7EC"
      display="flex"
      alignItems="center"
    >
      <Box
        bg="#DAD3BE"
        p="50px"
        borderRadius="30px"
        boxShadow="5px 4px black"
        width={{ base: "90%", sm: "400px", md: "500px" }} 
        mx="auto" 
        maxH="80vh" 
        overflow="hidden"
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              value={data.firstname}
              id="firstname"
              type="text"
              placeholder="Enter firstname"
              name="firstname"
              onChange={handleChange}
              borderRadius="20px"
              p="10px"
            />
            {error.firstname && (
              <Text color="red">{error.firstname}</Text>
            )}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              value={data.lastname}
              id="lastname"
              type="text"
              placeholder="Enter last name"
              name="lastname"
              onChange={handleChange}
              borderRadius="20px"
              p="10px"
            />
            {error.lastname && (
              <Text color="red">{error.lastname}</Text>
            )}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              value={data.email}
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              borderRadius="20px"
              p="10px"
            />
            {error.email && (
              <Text color="red">{error.email}</Text>
            )}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              value={data.password}
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              borderRadius="20px"
              p="10px"
            />
            {error.password && (
              <Text color="red">{error.password}</Text>
            )}
          </FormControl>
          <Button
            type="submit"
            w="60%"
            borderRadius="20px"
            color="white"
            backgroundColor="teal"
            _hover={{ backgroundColor: "darkcyan" }}
          >
            Signup
          </Button>
          <FormControl mt={2} textAlign="center">
            <ChakraLink href="/login" color="black" fontWeight="bold">
              Already have an account? Login here.
            </ChakraLink>
          </FormControl>
        </form>
      </Box>
    </Grid>
  );
}

export default Signup;
