'use client'
import {Box,Flex,Text } from "@chakra-ui/react";

const myprogress={
    fontWeight: 'bold',
  fontSize: '70px',
  background: 'linear-gradient(90deg, #a53a1f, #2851ac)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
  display:'grid',
  placeItems:"center",
  h:'80vh'
}
function Myprogress() {
  return (
    
      <Flex columnGap='10px'>
        <Box rowGap='10px' display='flex' flexDirection='column'  w='100%' >
        <Text sx={myprogress}>My-progress</Text>
        </Box>
      </Flex>
  );
}

export default Myprogress;
