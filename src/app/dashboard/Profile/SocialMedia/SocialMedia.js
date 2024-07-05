'use client'
import React from 'react';
import { ChakraProvider, Box, VStack, HStack, IconButton, Input, Button, Text, useMediaQuery } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMediaForm = () => {
  const [isSmallerThanTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider>
      <Box bg="white" p={3} rounded="md" w="full" maxW="lg" mx="auto" boxShadow="lg">
        <VStack spacing={3} align="stretch">
          <HStack spacing={3} flexDirection={isSmallerThanTablet ? "column" : "row"} alignItems="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} isRound={true}/>
            {!isSmallerThanTablet && <Text fontSize={'14px'}>Facebook</Text>}
            <Input placeholder="Enter Facebook link" ml={isSmallerThanTablet ? 0 : '15px'} fontSize={'12px'} h={'33px'} />
          </HStack>
          <HStack spacing={3} flexDirection={isSmallerThanTablet ? "column" : "row"} alignItems="center">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} isRound={true}/>
            {!isSmallerThanTablet && <Text fontSize={'14px'}>Twitter</Text>}
            <Input placeholder="Enter Twitter link" ml={isSmallerThanTablet ? 0 : '20px'} fontSize={'12px'} h={'33px'}/>
          </HStack>
          <HStack spacing={3} flexDirection={isSmallerThanTablet ? "column" : "row"} alignItems="center">
            <IconButton aria-label="Instagram" icon={<FaInstagram />} isRound={true}/>
            {!isSmallerThanTablet && <Text fontSize={'14px'}>Instagram</Text>}
            <Input placeholder="Enter Instagram link" ml={isSmallerThanTablet ? 0 : '20px'} fontSize={'12px'} h={'33px'}/>
          </HStack>
          <HStack spacing={3} flexDirection={isSmallerThanTablet ? "column" : "row"} alignItems="center">
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound={true}/>
            {!isSmallerThanTablet && <Text fontSize={'14px'}>LinkedIn</Text>}
            <Input placeholder="Enter LinkedIn link" ml={isSmallerThanTablet ? 0 : '13px'} fontSize={'12px'} h={'33px'} />
          </HStack>
          <HStack spacing={3} flexDirection={isSmallerThanTablet ? "column" : "row"} alignItems="center">
            <IconButton aria-label="GitHub" icon={<FaGithub />} isRound={true}/>
            {!isSmallerThanTablet && <Text fontSize={'14px'}>GitHub</Text>}
            <Input placeholder="Enter GitHub link" ml={isSmallerThanTablet ? 0 : '19px'} fontSize={'12px'} h={'33px'}/>
          </HStack>
          <Button colorScheme="blue" alignSelf="flex-end" fontSize={'14px'} h={'25px'} w={'fit-content'} mt={3}>
            Update Profile
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default SocialMediaForm;
