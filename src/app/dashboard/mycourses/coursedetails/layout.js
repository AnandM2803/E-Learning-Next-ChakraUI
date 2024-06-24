"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import Courses from "../../../../../public/courselist";
import CourseChapter from "@/app/components/CourseChapter";

const ReactProjectDescription = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showShareBox, setShowShareBox] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const searchparams = useSearchParams();
  const selectedcourse = Courses.find(
    (course) => course.id === searchparams.get("id")
  );

  const toggleShareBox = () => {
    setShowShareBox(!showShareBox);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedcourse.videoUrl);
    setCopyButtonText("Copied");
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 3000);
  };

  const closeShareBox = () => {
    setShowShareBox(false);
  };

  if (!selectedcourse) {
    return <Heading>Nothing to See</Heading>;
  }

  return (
    <Box p={4} position="relative" bg="#F9FBE7" h="90vh">
      <Flex columnGap="20px" h="100%">
        <VStack w="60%" align="start" spacing={4} h="100%">
          <Flex flexDirection="column" alignItems="start" w="100%" h="100%">
            <Flex mb={1} alignItems="center" width="100%" h="fit-content">
              <Box flex="1">
                <Box fontWeight="bold" fontSize="20px">
                  {selectedcourse.name}
                </Box>
                <Box fontSize="10px" color="gray">
                  {selectedcourse.profName}
                </Box>
              </Box>
              <Flex position="relative">
                <FaShare
                  size="20px"
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    borderRadius: "50%",
                  }}
                  onClick={toggleShareBox}
                />
                <MdOutlineSaveAlt
                  size="20px"
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    borderRadius: "50%",
                  }}
                />

                {showShareBox && (
                  <Box
                    position="absolute"
                    top="100%"
                    transform="translateX(-100%)"
                    zIndex="1"
                    border="1px solid gray.800"
                    borderRadius="20px"
                    p={2}
                    backgroundColor="white"
                    width="400px"
                  >
                    <Flex alignItems="center">
                      <Box flex="1">
                        <input
                          type="text"
                          value={selectedcourse.videoUrl}
                          readOnly
                          style={{
                            width: "100%",
                            border: "none",
                            backgroundColor: "transparent",
                            fontSize: "14px",
                          }}
                        />
                      </Box>
                      <Box ml={2}>
                        <button
                          onClick={copyToClipboard}
                          style={{
                            cursor: "pointer",
                            padding: "8px 12px",
                            backgroundColor: "#46C2CB",
                            color: "white",
                            border: "none",
                            borderRadius: "5px 15px",
                          }}
                        >
                          {copyButtonText}
                        </button>
                        <span
                          onClick={closeShareBox}
                          style={{
                            cursor: "pointer",
                            marginLeft: "8px",
                            fontSize: "18px",
                          }}
                        >
                          &#10006;
                        </span>
                      </Box>
                    </Flex>
                  </Box>
                )}
              </Flex>
            </Flex>

            <Box width="100%" height="315" mt={0}>
              {children}
            </Box>

            <Tabs
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              variant="unstyled"
              mt="20px"
              flex="1"
              w="100%"
            >
              <TabList
                borderBottom="1px solid gray"
                display="flex"
                columnGap={"40px"}
              >
                <Tab
                  _selected={{
                    borderBottom: "2px solid #46C2CB",
                    color: "blue",
                  }}
                  mx={4}
                  p={0}
                  border="none"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  Description
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: "2px solid #46C2CB",
                    color: "blue",
                  }}
                  mx={4}
                  p={0}
                  border="none"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  Review
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: "2px solid #46C2CB",
                    color: "blue",
                  }}
                  mx={4}
                  p={0}
                  border="none"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  Discussion
                </Tab>
                <Tab
                  _selected={{
                    borderBottom: "2px solid #46C2CB",
                    color: "blue",
                  }}
                  mx={4}
                  p={0}
                  border="none"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  Resources
                </Tab>
              </TabList>

              <TabPanels
                border="1px solid white"
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                bg="#E1F0DA"
                flex="1"
                w="100%"
              >
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>
                    Learn React JS, the popular JavaScript library for building
                    user interfaces. This course covers all the basics,
                    including components, state, and props. By the end,
                    you&apos;ll be able to build dynamic and responsive web
                    applications.
                  </p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>
                    This course has received positive feedback for its clear
                    explanations and practical examples. Students appreciate the
                    hands-on approach and the comprehensive coverage of key
                    React concepts. Many find it a valuable resource for both
                    beginners and intermediate developers.
                  </p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>
                    Engage with fellow learners in our discussion forums. Share
                    your projects, ask questions, and collaborate on challenges.
                    This is a great opportunity to deepen your understanding and
                    network with other React enthusiasts.
                  </p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>
                    Access a curated list of additional resources including
                    documentation, tutorials, and tools to enhance your learning
                    experience. These resources are designed to help you
                    continue learning and stay updated with the latest in React
                    development.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </VStack>

        <VStack w="38%" spacing={4} align="start">
          <Box
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            p={4}
            w="100%"
            h="fit-content"
          >
            <Box mb={2} fontWeight="bold" fontSize="15px">
              About the Course
            </Box>
            <Flex alignItems="center" rowGap="5px">
              <Box mr={2}>
                <Image
                  src="/profile2.jpg"
                  alt="profile image"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "60px",
                    marginBottom: "10px",
                  }}
                />
              </Box>
              <Box>
                <Box fontSize="15px" fontWeight="bold" color="gray">
                  {selectedcourse.profName}
                </Box>
                <Box fontSize="13px" color="black">
                  A React course teaches the essentials of building dynamic user
                  interfaces with React.js, emphasizing component-based
                  architecture and state management techniques.
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            w="100%"
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
          >
            <Text fontWeight="bold" color="black" ml="30px">
              Course Completion
            </Text>
            <CourseChapter />
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ReactProjectDescription;
