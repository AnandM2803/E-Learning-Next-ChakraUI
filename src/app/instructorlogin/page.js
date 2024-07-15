"use client";
import {
  Box,
  Text,
  Grid,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function InstructorLogin() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = {};
    if (!data.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationError.email = "Please provide a valid email address";
    }

    if (!data.password.trim()) {
      validationError.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(data.password)) {
      validationError.password = "Proper Password Required";
    }

    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      setData({
        email: "",
        password: "",
      });

      alert("Logged in Successfully");
      router.push("/instructor");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Grid placeItems="center" bg="white">
      <form
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            value={data.email}
            id="email"
            type="email"
            placeholder="Enter instructor email"
            name="email"
            onChange={handleChange}
          />
          {error.email && (
            <Text as="span" color="red" mt={2}>
              {error.email}
            </Text>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              value={data.password}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={toggleShowPassword}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
          {error.password && (
            <Text as="span" color="red" mt={2}>
              {error.password}
            </Text>
          )}
        </FormControl>
        <FormControl mt={6} align="center">
          <Button type="submit" colorScheme="teal" w="full">
            Login
          </Button>
        </FormControl>
        <Link href="/signup" color="teal.500" mt={4} display="block" textAlign="center">
          Don&apos;t have an account?
        </Link>
      </form>
    </Grid>
  );
}

export default InstructorLogin;
