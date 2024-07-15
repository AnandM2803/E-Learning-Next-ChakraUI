"use client";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  Icon,
  useMediaQuery,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Accordion = ({ profilePic, name, children, isTable }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLargerThanMobile] = useMediaQuery("(min-width: 480px)");

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  const renderAccordionContent = () => {
    if (isTable) {
      return (
        <Table variant="simple" marginBottom="4">
          <Tbody>
            <Tr>
              <Td>
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  boxSize="29px"
                  objectFit="cover"
                  marginRight="2"
                />
              </Td>
              <Td>
                <Text fontWeight="bold" fontSize="md">
                  {name}
                </Text>
              </Td>
              <Td>
                <Icon
                  as={isActive ? ChevronDownIcon : ChevronRightIcon}
                  onClick={toggleAccordion}
                  cursor="pointer"
                />
              </Td>
            </Tr>
            {isActive && (
              <Tr>
                <Td colSpan={3}>{children}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      );
    } else {
      return (
        <Box
          backgroundColor="#fff"
          borderRadius="8px"
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          marginBottom="4"
          width="auto"
        >
          <Flex
            alignItems="center"
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            padding={{ base: "1", md: "2" }}
            cursor="pointer"
            onClick={toggleAccordion}
          >
            <Box rounded="full" overflow="hidden" marginRight="2">
              <Image
                src={profilePic}
                alt="Profile Picture"
                boxSize={{ base: isLargerThanMobile ? "29px" : "20px", md: "29px" }}
                objectFit="cover"
              />
            </Box>
            <Text fontWeight="bold" fontSize={{ base: isLargerThanMobile ? "lg" : "md", md: "lg" }}>
              {name}
            </Text>
            <Icon
              as={isActive ? ChevronDownIcon : ChevronRightIcon}
              marginLeft="auto"
              onClick={toggleAccordion}
              cursor="pointer"
            />
          </Flex>
          {isActive && <Box padding={{ base: "1", md: "2" }}>{children}</Box>}
        </Box>
      );
    }
  };

  return renderAccordionContent();
};

const DashAccordion = () => {
  const [isTabletView] = useMediaQuery("(max-width: 1024px)"); 

  return (
    <ChakraProvider>
      <Box width="100%" height="auto">
        {isTabletView ? (
          <>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile1.jpg" name="John Doe" isTable>
                <p>Content for section 1.</p>
              </Accordion>
            </Box>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile2.jpg" name="Jane Smith" isTable>
                <p>Content for section 2.</p>
              </Accordion>
            </Box>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile3.jpg" name="Michael Johnson" isTable>
                <p>Content for section 3.</p>
              </Accordion>
            </Box>
          </>
        ) : (
          <>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile1.jpg" name="John Doe">
                <p>Content for section 1.</p>
              </Accordion>
            </Box>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile2.jpg" name="Jane Smith">
                <p>Content for section 2.</p>
              </Accordion>
            </Box>
            <Box marginBottom="4"  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">
              <Accordion profilePic="/profile3.jpg" name="Michael Johnson">
                <p>Content for section 3.</p>
              </Accordion>
            </Box>
          </>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default DashAccordion;
