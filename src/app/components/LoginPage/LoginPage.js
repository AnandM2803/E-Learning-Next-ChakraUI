'use client'
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Tabs, TabList, TabPanels, Tab, TabPanel,Button,Icon
  } from '@chakra-ui/react'

  import { LuLogIn } from "react-icons/lu";
import Login from '@/app/login/page';
import AdminLogin from '@/app/adminlogin/page';
import InstructorLogin from '@/app/instructorlogin/page';
  function LoginPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button
  onClick={onOpen}
  fontSize={{ base: "1rem", md: "1.2rem" }}
  px={{ base: 4, md: 6 }}
  py={{ base: 2, md: 3 }}
  bg="#4A5568"
  color="white"
  borderRadius="md"
  cursor="pointer"
  textDecoration="none"
  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
  transition="background-color 0.3s ease, transform 0.1s ease-out"
  _hover={{ bg: "#2D3748", transform: "scale(1.05)" }}
  _active={{ bg: "#1A202C" }}
  _focus={{ outline: "none" }}
  w={{ base: "full", md: "auto" }}
  m={{ base: 2, md: 4 }}
>
  <Icon as={LuLogIn} mr={2} />
  Login
</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Student</Tab>
    <Tab>Admin</Tab>
    <Tab>Instructor</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <AdminLogin />
    </TabPanel>
    <TabPanel>
      <InstructorLogin />
    </TabPanel>
  </TabPanels>
</Tabs>
            </ModalBody>
  

            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default LoginPage;