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
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [data, setData] = useState({
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
    if (!data.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationError.email = "Please provide a valid email address";
    }

    if (!data.password.trim()) {
      validationError.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(data.password)) {
      validationError.password =
        "Password length should be 6 characters long and contain at least one letter and one number";
    }

    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      setData({
        email: "",
        password: "",
      });

      alert("Logged in Successfully");
      router.push("/screeningpage");
    }
  };

  return (
    <Grid placeItems="center" h="100vh" bg="#F3F7EC">
      <Text fontSize="30px" fontWeight="bold">
        Login
      </Text>
      <form
        style={{
          backgroundColor: "#DAD3BE",
          padding: "50px",
          borderRadius: "30px",
          boxShadow: "5px 4px black",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl mt={8}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            value={data.email}
            id="email"
            type="email"
            placeholder="Enter your email"
            cursor="pointer"
            name="email"
            onChange={handleChange}
            w="180px"
            h="35px"
            borderRadius="20px"
            boxShadow="5px 4px black"
            p="3px"
            pl="10px"
          />
          <br />
          {error.email && (
            <Text as="span" color="red">
              {error.email}
            </Text>
          )}
        </FormControl>
        <FormControl mt={8}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            value={data.password}
            id="password"
            type="password"
            cursor="pointer"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            w="180px"
            h="35px"
            borderRadius="20px"
            boxShadow="5px 4px black"
            p="3px"
            pl="10px"
          />
          <br />
          {error.password && (
            <Text as="span" color="red">
              {error.password}
            </Text>
          )}
        </FormControl>
        <FormControl mt={10} align="center">
          <Button
            type="submit"
            cursor="pointer"
            w="100px"
            h="30px"
            borderRadius="20px"
            color="white"
            boxShadow="5px 4px black"
            backgroundColor="teal"
          >
            Login
          </Button>
        </FormControl>
      </form>
      <Link
        href="/signup"
        color="black"
        position="relative"
        left="6px"
        bottom="110px"
        fontWeight="bold"
      >
        Don&apos;t have an account?
      </Link>
    </Grid>
  );
}

export default Login;
