"use client";
import React, { useState } from "react";
import { ChakraProvider, Box, Flex, Text, Icon, Link, Stack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { usePathname, useSearchParams } from "next/navigation";
import { PiVideoFill } from "react-icons/pi";

const Accordion = ({ chapterName, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      marginBottom="4"
      width="auto"
    >
      <Flex
        alignItems="center"
        backgroundColor="gray.100"
        padding="2"
        cursor="pointer"
        onClick={toggleAccordion}
      >
        <Text fontWeight="bold" ml="130px">
          {chapterName}
        </Text>
        <Icon
          as={isActive ? ChevronDownIcon : ChevronRightIcon}
          marginLeft="auto"
        />
      </Flex>
      {isActive && <Box padding="2"><Stack spacing={2}>{children}</Stack></Box>}
    </Box>
  );
};

const CourseChapter = () => {
  const pathName = usePathname();
  const id = useSearchParams().get("id");
  const scrollbarwidthset = {
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "black",
    },
  };
  return (
    <ChakraProvider>
      <Box
        width="100%"
        height="55vh"
        overflowY="auto"
        padding="4"
        css={scrollbarwidthset}
      >
        <Accordion chapterName="Chapter 1">
          <Link href={`${pathName}?id=${id}&chapter=1`}> <Flex alignItems='center'><PiVideoFill /><Text>Watch Chapter 1</Text></Flex></Link>
          <Link href={`${pathName}?id=${id}&chapter=2`}><Flex alignItems='center'><PiVideoFill /><Text>Watch Chapter 2</Text></Flex></Link>
        </Accordion>
        <Accordion chapterName="Chapter 2">
          <Link href={`${pathName}?id=${id}&chapter=2`}>Watch Chapter 2</Link>
        </Accordion>
        <Accordion chapterName="Chapter 3">
          <Link href={`${pathName}?id=${id}&chapter=3`}>Watch Chapter 3</Link>
        </Accordion>
        <Accordion chapterName="Chapter 4">
          <Link href={`${pathName}?id=${id}&chapter=4`}>Watch Chapter 4</Link>
        </Accordion>
        <Accordion chapterName="Chapter 5">
          <Link href={`${pathName}?id=${id}&chapter=5`}>Watch Chapter 5</Link>
        </Accordion>
        <Accordion chapterName="Chapter 6">
          <Link href={`${pathName}?id=${id}&chapter=6`}>Watch Chapter 6</Link>
        </Accordion>
        <Accordion chapterName="Chapter 7">
          <Link href={`${pathName}?id=${id}&chapter=7`}>Watch Chapter 7</Link>
        </Accordion>
        <Accordion chapterName="Chapter 8">
          <Link href={`${pathName}?id=${id}&chapter=8`}>Watch Chapter 8</Link>
        </Accordion>
        <Accordion chapterName="Chapter 9">
          <Link href={`${pathName}?id=${id}&chapter=9`}>Watch Chapter 9</Link>
        </Accordion>
        <Accordion chapterName="Chapter 10">
          <Link href={`${pathName}?id=${id}&chapter=10`}>Watch Chapter 10</Link>
        </Accordion>
        <Accordion chapterName="Chapter 11">
          <Link href={`${pathName}?id=${id}&chapter=11`}>Watch Chapter 11</Link>
        </Accordion>
        <Accordion chapterName="Chapter 12">
          <Link href={`${pathName}?id=${id}&chapter=12`}>Watch Chapter 12</Link>
        </Accordion>
        <Accordion chapterName="Chapter 13">
          <Link href={`${pathName}?id=${id}&chapter=13`}>Watch Chapter 13</Link>
        </Accordion>
        <Accordion chapterName="Chapter 14">
          <Link href={`${pathName}?id=${id}&chapter=14`}>Watch Chapter 14</Link>
        </Accordion>
        <Accordion chapterName="Chapter 15">
          <Link href={`${pathName}?id=${id}&chapter=15`}>Watch Chapter 15</Link>
        </Accordion>
      </Box>
    </ChakraProvider>
  );
};

export default CourseChapter;
