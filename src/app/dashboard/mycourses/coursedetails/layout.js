"use client";
import { useState, Suspense } from "react";
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

import { MdOutlineSaveAlt } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import Courses from "../../../../../public/courselist";
import CourseChapter from "@/app/components/CourseChapter";
import ShareIcon from "../shareicons/ShareIcons";

const ReactProjectDescription = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showShareBox, setShowShareBox] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const searchparams = useSearchParams();

  const selectedcourse = Courses.find(
    (course) => course.id === searchparams.get("id")
  );

  if (!selectedcourse) {
    return <Heading>Nothing to See</Heading>;
  }

  return (
    <Box p={4} position="relative" bg="#F9FBE7">
      <Flex
        columnGap="20px"
        flexDirection={{ base: "column", md: "row" }}
        wrap="wrap"
      >
        <VStack
          w={{ base: "100%", md: "60%" }}
          align="start"
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
          <Flex flexDirection="column" alignItems="start" w="100%">
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
                <ShareIcon />
              </Flex>
            </Flex>
            {/* video component */}
            <Box width="100%" height="315px" mt={0}>
              {children}
            </Box>
            {/* Tab List */}
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
                columnGap={"20px"}
                flexWrap="wrap"
              >
                <Tab
                  _selected={{
                    borderBottom: "2px solid #46C2CB",
                    color: "blue",
                  }}
                  mx={2}
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
                  mx={2}
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
                  mx={2}
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
                  mx={2}
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
                  <p>{selectedcourse.tabCourseDescription}</p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>{selectedcourse.tabCourseReviewe}</p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>{selectedcourse.tabCourseDiscussion}</p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>{selectedcourse.tabCourseResources}</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </VStack>
        {/* about course */}
        <VStack
          w={{ base: "100%", md: "38%" }}
          spacing={4}
          align="start"
          mt={{ base: 4, md: 0 }}
        >
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
                  {selectedcourse.aboutCourseDescription}
                </Box>
              </Box>
            </Flex>
          </Box>
          {/* course Completion */}
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

const ReactProjectDescriptionWrapper = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ReactProjectDescription {...props} />
  </Suspense>
);

export default ReactProjectDescriptionWrapper;
