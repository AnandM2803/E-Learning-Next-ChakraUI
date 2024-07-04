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
    Input,
    Button,
    Center
  } from '@chakra-ui/react'
  import { FaCamera } from "react-icons/fa";


  function UploadPic() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} size={'20px'}><FaCamera /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Picture</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input type='file' placeholder='upload Picture' size={'sm'} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Upload
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default UploadPic;