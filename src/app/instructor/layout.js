'use client'
import { ChakraProvider,Box,Flex } from "@chakra-ui/react";
import InstructorSideBar from "../components/InstructorSideBar";
import InstructoreHeader from "../components/InstructoreHeader";
function Layout({ children }) {
  return (
    <ChakraProvider>
      <Flex columnGap='5px'>
        <InstructorSideBar />
        <Box rowGap='7px' display='flex' flexDirection='column'  w='100%' >
          <InstructoreHeader />
          
            {children}
        
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Layout;
