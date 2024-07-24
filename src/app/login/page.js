'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputProps, InputRightElement, useToast, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Login successful', response.data);

      // success login
      toast({
        title: "Login successful.",
        description: "You have been logged in successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error('Login failed', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      }

      //login error
      toast({
        title: "Login failed.",
        description: error.response?.data?.message || "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleLogin}>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter student email"
          />
        </FormControl>
        <FormControl id="password" mb={6} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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
        <Button colorScheme="teal" type="submit" width="full">Login</Button>
      </form>
    </Box>
  );
}

export default Login;

