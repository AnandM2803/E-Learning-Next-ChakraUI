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
  InputGroup,
  InputRightElement,
  IconButton,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function InstructorSignUp() {
  const router = useRouter();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = {};

    // Basic validation
    if (!data.firstname) validationError.firstname = "First name is required";
    if (!data.lastname) validationError.lastname = "Last name is required";
    if (!data.email) validationError.email = "Email is required";
    if (!data.password) validationError.password = "Password is required";
    if (data.password !== data.confirmPassword)
      validationError.confirmPassword = "Passwords do not match";

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast({
        title: "Login successful.",
        description: "You have been logged in successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position:'top'
      });
      router.push('/login');
    }
  };

  return (
    <Grid placeItems="center" >
      <Box
        bg="white"
        p={2}
        borderRadius="md"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isInvalid={error.firstname}>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              value={data.firstname}
              id="firstname"
              type="text"
              placeholder="Enter first name"
              name="firstname"
              onChange={handleChange}
              borderRadius="md"
            />
            {error.firstname && (
              <Text color="red.500" mt={2}>{error.firstname}</Text>
            )}
          </FormControl>
          <FormControl mb={4} isInvalid={error.lastname}>
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              value={data.lastname}
              id="lastname"
              type="text"
              placeholder="Enter lastname"
              name="lastname"
              onChange={handleChange}
              borderRadius="md"
            />
            {error.lastname && (
              <Text color="red.500" mt={2}>{error.lastname}</Text>
            )}
          </FormControl>
          <FormControl mb={4} isInvalid={error.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              value={data.email}
              id="email"
              type="email"
              placeholder="Enter instructor email"
              name="email"
              onChange={handleChange}
              borderRadius="md"
            />
            {error.email && (
              <Text color="red.500" mt={2}>{error.email}</Text>
            )}
          </FormControl>
          <FormControl mb={4} isInvalid={error.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                value={data.password}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
                borderRadius="md"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {error.password && (
              <Text color="red.500" mt={2}>{error.password}</Text>
            )}
          </FormControl>
          <FormControl mb={4} isInvalid={error.confirmPassword}>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <InputGroup>
              <Input
                value={data.confirmPassword}
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                name="confirmPassword"
                onChange={handleChange}
                borderRadius="md"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {error.confirmPassword && (
              <Text color="red.500" mt={2}>{error.confirmPassword}</Text>
            )}
          </FormControl>
          <Button
            type="submit"
            w="full"
            colorScheme="teal"
            borderRadius="md"
            mt={4}
          >
            Signup
          </Button>
        </form>
      </Box>
    </Grid>
  );
}

export default InstructorSignUp;
