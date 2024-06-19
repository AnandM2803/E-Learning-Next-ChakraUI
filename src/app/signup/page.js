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
    
  
    if (!data.firstname.trim()) {
      validationError.firstname = "First Name is required";
    } else if (!/^[a-zA-Z]+$/.test(data.firstname)) {
      validationError.firstname = "Please provide a valid first name";
    }

    
    if (!data.lastname.trim()) {
      validationError.lastname = "Last Name is required";
    } else if (!/^[a-zA-Z]+$/.test(data.lastname)) {
      validationError.lastname = "Please provide a valid last name";
    }

   
    if (!data.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationError.email = "Please provide a valid email address";
    }

   
    if (!data.password.trim()) {
      validationError.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(data.password)) {
      validationError.password = "Password length should be 6 characters long and contain at least one letter and one number";
    }

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
    <Grid placeItems="center" h="100vh" bg="#F3F7EC">
      <form
        style={{
          backgroundColor: "#DAD3BE",
          padding: "50px",
          borderRadius: "30px",
          boxShadow: "5px 4px black",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel htmlFor="firstname">First Name</FormLabel>
          <Input
            value={data.firstname}
            id="firstname"
            type="text"
            placeholder="Enter firstname"
            cursor="pointer"
            name="firstname"
            onChange={handleChange}
            w="180px"
            h="35px"
            borderRadius="20px"
            boxShadow="5px 4px black"
            p="3px"
            pl="10px"
          />
          <br />
          {error.firstname && (
            <Text as="span" color="red">
              {error.firstname}
            </Text>
          )}
        </FormControl>
        <FormControl mt={8}>
          <FormLabel htmlFor="lastname">Last name</FormLabel>
          <Input
            value={data.lastname}
            id="lastname"
            type="text"
            placeholder="Enter last name"
            cursor="pointer"
            name="lastname"
            onChange={handleChange}
            w="180px"
            h="35px"
            borderRadius="20px"
            boxShadow="5px 4px black"
            p="3px"
            pl="10px"
          />
          <br />
          {error.lastname && (
            <Text as="span" color="red">
              {error.lastname}
            </Text>
          )}
        </FormControl>
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
            Signup
          </Button>
        </FormControl>
      </form>
      <Link
        href="/login"
        color="black"
        position="relative"
        left="6px"
        bottom='126px'
        fontWeight="bold"
      >
        Already have an account?
      </Link>
    </Grid>
  );
}

export default Signup;
