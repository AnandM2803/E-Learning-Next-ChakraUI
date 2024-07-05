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
        "Proper Password Required";
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
    <Grid placeItems="center" h="97vh" bg="#F3F7EC" p={{ base: 4, md: 8 }}>
      <Text fontSize="30px" fontWeight="bold" mt={60}>
        Login
      </Text>
      <form
        style={{
          backgroundColor: "#DAD3BE",
          padding: "20px",
          borderRadius: "30px",
          boxShadow: "5px 4px black",
          marginBottom: "120px",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl mt={4}>
          <FormLabel htmlFor="email" p={5}>Email</FormLabel>
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
        <FormControl mt={4}>
          <FormLabel htmlFor="password" p={5}>Password</FormLabel>
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
        <FormControl mt={6} align="center">
          <Button
            fontSize={{ base: "1rem", md: "1.2rem" }}
            px={{ base: 4, md: 6 }}
            py={{ base: 2, md: 3 }}
            type="submit"
            cursor="pointer"
            w="100px"
            h="30px"
            borderRadius="20px"
            color="white"
            boxShadow="5px 4px black"
            backgroundColor="teal"
            p={8}
            m={{ base: 2, md: 4 }}
          >
            Login
          </Button>
        </FormControl>
        <Link href="/signup" color="black" padding="10px" fontWeight="bold" mt='10px' paddingTop='10px'>
          Don&apos;t have an account?
        </Link>
      </form>
    </Grid>
  );
}

export default Login;

