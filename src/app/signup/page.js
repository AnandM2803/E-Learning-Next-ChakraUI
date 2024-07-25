'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/studentsignupauth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (response.ok) {
        toast({
          title: 'Signup Successful.',
          description: 'You have successfully signed up.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      } else {
        const errorData = await response.json();
        toast({
          title: 'Signup Failed.',
          description: errorData.msg || 'An error occurred during signup.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Signup Error.',
        description: 'An unexpected error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="300px" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl id="firstName" isRequired>
            <FormLabel fontSize="sm">First Name</FormLabel>
            <Input
              placeholder='Enter student first name'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel fontSize="sm">Last Name</FormLabel>
            <Input
              placeholder="Enter student last name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel fontSize="sm">Username</FormLabel>
            <Input
              placeholder="Enter student username"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input
              placeholder="Enter student email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel fontSize="sm">Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter student password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="sm"
                height="35px"
              />
              <InputRightElement>
                <IconButton
                  variant="link"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel fontSize="sm">Phone Number</FormLabel>
            <Input
              placeholder="Enter student phone number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel fontSize="sm">Address</FormLabel>
            <Input
              placeholder="Enter student address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              size="sm"
              height="35px"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            width="auto"
            size="sm"
            height="35px"
          >
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
