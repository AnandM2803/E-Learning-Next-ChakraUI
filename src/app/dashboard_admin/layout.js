'use client'
import { ChakraProvider,Box,Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import AdminSideBar from "../components/AdminSideBar";
import AdminHeader from "../components/AdminHeader";

function Layout({ children }) {
  return (
    <ChakraProvider>
      <Flex columnGap='5px'>
        <AdminSideBar />
        <Box rowGap='7px' display='flex' flexDirection='column'  w='100%' >
          <AdminHeader />
          
            {children}
        
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Layout;
