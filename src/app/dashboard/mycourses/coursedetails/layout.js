"use client";
import { useState, Suspense,useEffect } from "react";
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

import { useSearchParams } from "next/navigation";

import CourseChapter from "@/app/components/CourseChapter";
import ShareIcon from "../shareicons/ShareIcons";
import TextEditor from "../../Profile/TextEditor/TextEditor";

const ReactProjectDescription = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const searchparams = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/course/getall");
        const data = await response.json();
        console.log("Fetched courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const selectedCourse = courses.find(
    (course) => course._id === searchparams.get("id")
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedCourse) {
    return <Heading>Nothing to See</Heading>;
  }

  return (
    <Box p={4} position="relative" bg="#F9FBE7" h={'87vh'} overflowY={'scroll'}>
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
                  {selectedCourse.courseName}
                </Box>
                <Box fontSize="10px" color="gray">
                  {selectedCourse.author}
                </Box>
              </Box>
              <Flex position="relative">
                <ShareIcon />
              </Flex>
            </Flex>
            {/* video component */}
            <Box width={["auto", "100%"]} height={{md:"315px",base:'auto'}} mt={{ base: 2, md: 0 }} p={'5px'}>
              {children}
            </Box>
            {/* Tab List */}
            <Tabs
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              variant="unstyled"
              mt={{ base: 2, md: 0 }}
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
                  <p>{selectedCourse.tabCourseDescription}</p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <TextEditor />
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>{selectedCourse.tabCourseDiscussion}</p>
                </TabPanel>
                <TabPanel
                  backgroundColor="#fff"
                  borderRadius="8px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                >
                  <p>{selectedCourse.tabCourseResources}</p>
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
                    width: "170px",
                    height: "60px",
                    marginBottom: "10px",
                  }}
                />
              </Box>
              <Box>
                <Box fontSize="15px" fontWeight="bold" color="gray">
                  {selectedCourse.author}
                </Box>
                <Box fontSize="13px" color="black">
                  React is onep source Javascript liberary.To develop web application
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