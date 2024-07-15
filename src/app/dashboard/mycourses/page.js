'use client'
import { Box, Text, Image, VStack, useMediaQuery, Wrap, WrapItem, chakra } from "@chakra-ui/react";
import Link from "next/link";
import Courses from "../../../../public/courselist";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CourseCard = ({ id, name, ratings, author, image, description }) => {
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
        <Image src={image} alt={name} maxWidth="100%" height="120px" borderRadius="md" />
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

  let selectedCourse = Courses.filter((course) => enrolledCourseCards.includes(course.id));

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
            <Box key={index} mr="15px"> {/* Adjust margin right for spacing */}
              <CourseCard
                id={course.id}
                name={course.name}
                ratings={course.ratings}
                author={course.author}
                image={course.image}
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
            {/* Ensure each WrapItem has a width to control layout */}
            <CourseCard
              id={course.id}
              name={course.name}
              ratings={course.ratings}
              author={course.author}
              image={course.image}
              description={course.description}
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  }
};

export default MyCourses;
