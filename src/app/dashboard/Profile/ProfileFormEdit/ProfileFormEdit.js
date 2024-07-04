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
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  useMediaQuery
} from '@chakra-ui/react'
import { BiEdit } from "react-icons/bi";

function ProfileFormEdit() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  
  return (
    <>
      <Button onClick={onOpen}><BiEdit /></Button>

      <Modal isOpen={isOpen} onClose={onClose} size={isMobile ? "full" : "xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input 
                    placeholder='First name' 
                    type='text' 
                    name='first name'
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input 
                    placeholder='Last name' 
                    type='text' 
                    name='last name'
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Phone No</FormLabel>
                  <Input 
                    placeholder='Phone Number' 
                    name='phone'
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Textarea 
                    placeholder='Enter address' 
                    name='address'
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileFormEdit;
