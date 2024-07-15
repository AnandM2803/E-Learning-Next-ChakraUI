'use client'
import React from 'react';
import { Box, VStack, Text, Button, Center, Image, useMediaQuery } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BoxCarousel = ({ title, description, imageSrc }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="#4892B9"
      p="6"
      borderWidth="2px"
      borderColor="4892B9"
      shadow="2px 2px 2px"
      width={isMobile ? '90%' : 'auto'}
      borderRadius="15px"
      h="100%"
      mx={isMobile ? 'auto' : '0'} // Center horizontally on mobile
      mb={isMobile ? '20px' : '0'} // Add margin bottom on mobile to separate cards
    >
      <Box
        bg="#4892B9"
        p="2"
        display="flex"
        alignItems="center"
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <VStack spacing="4" align="stretch" w={isMobile ? '100%' : '70%'}>
          <Text fontSize="19px" color="white" w='100%'>{title}</Text>
          <Text fontSize="13px" color="white" w='100%'>{description}</Text>
          <Center>
            <Button
              bg="white"
              variant="outline"
              size="sm"
              w="100px"
              color="#4892B9"
              mt={isMobile ? '10px' : '0'} // Add margin top on mobile
            >
              Explore more
            </Button>
          </Center>
        </VStack>
        {!isMobile && (
          <Box
            style={{
              width: '30%',
              marginLeft: '12px',
              height: '140px',
              overflow: 'hidden',
              borderRadius: '10px',
              color: 'red'
            }}
          >
            <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="100%" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const DashTopCard = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Carousel width={isMobile ? '100%' : '700px'}>
      <Box>
        <BoxCarousel
          title="New Exams are Available Now!"
          description="Welcome to our new exams. Attend and check your results. How long have you practiced for your papers? We provide the best service for everyone. This platform boosts your performance."
          imageSrc="/teacher1.png"
        />
      </Box>
      <Box>
        <BoxCarousel
          title="Elevate Your Learning Experience!"
          description="Explore our diverse range of courses and expert instruction tailored to your goals. Unleash your potential and excel in your chosen field with our dynamic online learning platform."
          imageSrc="/teacher2.png"
        />
      </Box>
      <Box>
        <BoxCarousel
          title="Ignite Your Passion for Learning!"
          description="Discover new skills and broaden your knowledge. Our resources are designed to inspire and empower you."
          imageSrc="/tracher3.png"
        />
      </Box>
    </Carousel>
  );
};

export default DashTopCard;
