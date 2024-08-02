'use client'
import { Box, Text, Image, VStack, useMediaQuery, Wrap, WrapItem, chakra } from "@chakra-ui/react";
import Link from "next/link";
// import Courses from "../../../../public/courselist";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState,useEffect } from "react";

const CourseCard = ({ id, name, ratings, author, image, description }) => {
  const imageUrl = `http://localhost:5000/${image}`;
  return (
    <Link href={`/dashboard/mycourses/coursedetails?id=${id}`}>
      <Box
       borderWidth="1px"
       borderRadius="15px"
       boxShadow="2px 2px 2px 2px"
        p="3"
        height="100%"
        width={{ base: "250px", md: "200px" }}
        textAlign="center"
        _hover={{ boxShadow: "xl" }}
        m="8px"
      >
        <Image src={imageUrl} alt={name} maxWidth="100%" height="120px" borderRadius="md" />
        <VStack align="start" spacing={2} mt="2" textAlign="left">
          <Text fontWeight="bold" fontSize="md" isTruncated  width={'100%'}>{name}</Text>
          <Text fontSize="sm" color="gray.500" noOfLines={2}>{description}</Text>
          <Box display="flex" alignItems="center" mt="2">
            <Text fontSize="sm" color="gray.600">{ratings}</Text>
          </Box>
          <Text fontSize="sm" color="gray.700" mt="1">By {author}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

const MyCourses = () => {
  const enrolledCourseCards = useSelector((state) => state.courses.enrolledCourses);
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/course/getall");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  let selectedCourse = courses.filter((course) => enrolledCourseCards.includes(course._id));

  const responsive = {
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 430 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
  };

  if (isSmallerThanMd) {
    return (
      <Box mt={4}>
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          autoPlay
          autoPlaySpeed={4000}
          infinite
          keyBoardControl
          containerStyle={{ overflow: "hidden" }}
          itemClass="carousel-item-padding-5-px"
        >
          {selectedCourse.map((course, index) => (
            <Box key={index} mr="15px"> 
              <CourseCard
                id={course._id}
                name={course.courseName}
                ratings={course.courseRating}
                author={course.author}
                image={course.courseImg}
                description={course.description}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    );
  } else {
    return (
      <Wrap spacing="30px" mt={4} justify="center">
        {selectedCourse.map((course, index) => (
          <WrapItem key={index} width={{ base: "250px", md: "200px" }}>
            <CourseCard
              id={course._id}
              name={course.courseName}
              ratings={course.courseRating}
              author={course.author}
              image={course.courseImg}
              description={course.description}
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  }
};

export default MyCourses;
