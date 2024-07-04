'use client'
import { FormControl, FormLabel, Box, Input, Button, VStack } from "@chakra-ui/react";

const PasswordReset = () => {
  return (
    <Box
      maxW="xs"
      mx="auto"
      mt={1}
      p={2}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <form>
        <VStack spacing={2}>
          <FormControl isRequired>
            <FormLabel fontSize={'13px'}>Current Password</FormLabel>
            <Input width={'100%'} h={'33px'}
              placeholder="Enter current password"
              type="password"
              name="currentPassword"
              fontSize={'13px'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={'13px'}>New Password</FormLabel>
            <Input width={'100%'} h={'33px'}
              placeholder="Enter new password"
              type="password"
              name="newPassword"
              fontSize={'13px'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={'13px'}>Confirm Password</FormLabel>
            <Input width={'100%'} h={'33px'}
              placeholder="Enter confirm password"
              type="password"
              name="confirmPassword"
              fontSize={'13px'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <Button colorScheme="blue" width="fit-content" h={'25px'} type="submit" fontSize={'13px'}>
            Reset Password
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default PasswordReset;
