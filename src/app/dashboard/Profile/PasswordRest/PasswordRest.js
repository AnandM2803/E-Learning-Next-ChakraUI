'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, Box, Input, Button, VStack, useMediaQuery, useToast, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const PasswordReset = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isTablet] = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const toast = useToast();

  const [studentId, setStudentId] = useState(null);
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem('student'));
    const id = student ? student._id : null;
    setStudentId(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentId) {
      toast({
        title: 'Error',
        description: 'Student ID is missing.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/student/update/${studentId}`, { password: formData.newPassword });
      console.log('Password updated successfully', response.data);
      toast({
        title: 'Password updated successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      localStorage.setItem('student', JSON.stringify(response.data));
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      toast({
        title: 'Error updating password',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box
      maxW='xs'
      mx='auto'
      mt={1}
      p={2}
      borderWidth={1}
      borderRadius='lg'
      boxShadow='lg'
      bg='white'
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel fontSize={isMobile || isTablet ? 'sm' : 'md'}>New Password</FormLabel>
            <InputGroup>
              <Input
                width='100%'
                h='33px'
                placeholder='Enter new password'
                type={showNewPassword ? 'text' : 'password'}
                name='newPassword'
                fontSize={isMobile || isTablet ? 'sm' : 'md'}
                _placeholder={{ color: 'gray.500' }}
                value={formData.newPassword}
                onChange={handleChange}
              />
              <InputRightElement h='33px'>
                <IconButton
                  variant='ghost'
                  h='full'
                  onClick={() => setShowNewPassword((show) => !show)}
                  icon={showNewPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={isMobile || isTablet ? 'sm' : 'md'}>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                width='100%'
                h='33px'
                placeholder='Enter confirm password'
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                fontSize={isMobile || isTablet ? 'sm' : 'md'}
                _placeholder={{ color: 'gray.500' }}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <InputRightElement h='33px'>
                <IconButton
                  variant='ghost'
                  h='full'
                  onClick={() => setShowConfirmPassword((show) => !show)}
                  icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme='blue'
            width='fit-content'
            h='25px'
            type='submit'
            fontSize={isMobile || isTablet ? 'sm' : 'md'}
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default PasswordReset;
