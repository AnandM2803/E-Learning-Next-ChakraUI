'use client'
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { ProfileProvider } from "../components/ProfileContext";

function Layout({ children }) {
  return (
    <ChakraProvider>
      <ProfileProvider>
        <Flex columnGap='7px'>
          <SideBar />
          <Box rowGap='7px' display='flex' flexDirection='column' w='100%'>
            <Header />
            {children}
          </Box>
        </Flex>
      </ProfileProvider>
    </ChakraProvider>
  );
}

export default Layout;
