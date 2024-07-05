'use client'
import { FormControl, FormLabel, Box, Input, Button, VStack, useMediaQuery } from "@chakra-ui/react";

const PasswordReset = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

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
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel fontSize={isMobile || isTablet ? 'sm' : 'md'}>Current Password</FormLabel>
            <Input
              width="100%"
              h="33px"
              placeholder="Enter current password"
              type="password"
              name="currentPassword"
              fontSize={isMobile || isTablet ? 'sm' : 'md'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={isMobile || isTablet ? 'sm' : 'md'}>New Password</FormLabel>
            <Input
              width="100%"
              h="33px"
              placeholder="Enter new password"
              type="password"
              name="newPassword"
              fontSize={isMobile || isTablet ? 'sm' : 'md'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={isMobile || isTablet ? 'sm' : 'md'}>Confirm Password</FormLabel>
            <Input
              width="100%"
              h="33px"
              placeholder="Enter confirm password"
              type="password"
              name="confirmPassword"
              fontSize={isMobile || isTablet ? 'sm' : 'md'}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            width="fit-content"
            h="25px"
            type="submit"
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
