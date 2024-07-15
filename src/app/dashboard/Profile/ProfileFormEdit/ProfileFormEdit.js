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
import TextEditor from '../TextEditor/TextEditor';

function ProfileFormEdit() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const [isTablet] = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")

  return (
    <>
      <Button onClick={onOpen}><BiEdit /></Button>

      <Modal isOpen={isOpen} onClose={onClose} size={isMobile ? "full" : (isTablet ? "xl" : "lg")}>
        <ModalOverlay />
        <ModalContent
          width={isMobile ? "100%" : "auto"}
          maxWidth={isMobile ? "100%" : "xl"}
          height={isMobile ? "100vh" : "auto"}
          maxHeight={isMobile ? "100vh" : "auto"}
          borderRadius={isMobile ? "none" : "md"} 
        >
          <ModalHeader fontSize={'19px'}>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={isMobile ? "auto" : "inherit"}>
            <form>
              <Stack spacing={isMobile ? 3 : 4}>
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>First name</FormLabel>
                  <Input 
                    placeholder='First name' 
                    type='text' 
                    name='first name'
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Last name</FormLabel>
                  <Input 
                    placeholder='Last name' 
                    type='text' 
                    name='last name'
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>User Name</FormLabel>
                  <Input 
                    placeholder='user name' 
                    type='text' 
                    name='user name'
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Email</FormLabel>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Phone No</FormLabel>
                  <Input 
                    placeholder='Phone Number' 
                    name='phone'
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Address</FormLabel>
                  <Textarea 
                    placeholder='Enter address' 
                    name='address'
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"} 
                    borderRadius={'10px'}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Bio</FormLabel>
                  <TextEditor />
                </FormControl>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} size={'sm'} borderRadius={'10px'}>
              Submit
            </Button>
            <Button variant='ghost' onClick={onClose} size={'sm'} borderRadius={'10px'}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileFormEdit;
