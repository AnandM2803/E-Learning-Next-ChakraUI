'use client';
import { useState, useEffect } from 'react';
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
  useMediaQuery,
  useToast
} from '@chakra-ui/react';
import { BiEdit } from "react-icons/bi";
import axios from 'axios';
import TextEditor from '../TextEditor/TextEditor';

function ProfileFormEdit() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const toast = useToast();
  
  const [studentId, setStudentId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem('student'));
    const id = student ? student._id : null;
    setStudentId(id);

    if (id) {
      const fetchStudentData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/student/getbyid/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching student data', error);
        }
      };
      fetchStudentData();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentId) {
      toast({
        title: "Error",
        description: "Student ID is missing.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      return;
    }
    try {
      const response = await axios.put(`http://localhost:5000/api/student/update/${studentId}`, formData);
      console.log(`Updated ID ${studentId}`);
      console.log('Profile updated successfully', response.data);
      toast({
        title: "Profile updated successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      
      onClose();
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      toast({
        title: "Error updating profile",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <Stack spacing={isMobile ? 3 : 4}>
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>First name</FormLabel>
                  <Input 
                    placeholder='First name'
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
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
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
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
                    name='userName'
                    value={formData.userName}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"}
                    borderRadius={'10px'}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize={'14px'}>Phone No</FormLabel>
                  <Input 
                    placeholder='Phone Number'
                    type="text"
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.address}
                    onChange={handleChange}
                    _placeholder={{ color: 'gray.500' }}
                    size={isMobile ? "xs" : "sm"}
                    borderRadius={'10px'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={'14px'}>Bio</FormLabel>
                  <TextEditor />
                </FormControl>
              </Stack>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit' size={'sm'} borderRadius={'10px'}>
                  Submit
                </Button>
                <Button variant='ghost' onClick={onClose} size={'sm'} borderRadius={'10px'}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileFormEdit;
