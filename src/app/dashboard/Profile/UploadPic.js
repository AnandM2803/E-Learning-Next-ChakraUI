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
  useMediaQuery
} from '@chakra-ui/react'
import { FaCamera } from "react-icons/fa";
import { useState } from 'react';

function UploadPic({ onImageUpload }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      reader.readAsDataURL(file);
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} size={isMobile ? '16px' : '20px'}><FaCamera /></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='file' accept='image/*' onChange={handleFileChange} size={isMobile ? 'xs' : 'sm'} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadPic;
