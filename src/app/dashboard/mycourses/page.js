'use client'
import { Box, Text, Image, VStack, useMediaQuery, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import Courses from "../../../../public/courselist";
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CourseCard = ({ id, name, ratings, author, image, description }) => {
  return (
    <Link href={`/dashboard/mycourses/coursedetails?id=${id}`}>
      <Box
        borderWidth="1px"
        borderRadius="15px"
        boxShadow="lg"
        p="4"
        height="100%"
        width="200px"
        textAlign="center"
        _hover={{ boxShadow: "xl" }}
        m="8px"
      >
        <Image src={image} alt={name} maxWidth="100%" height="120px" borderRadius="md" />
        <VStack align="start" spacing={1} mt="2">
          <Text fontWeight="bold" fontSize="md" isTruncated>{name}</Text>
          <Box height="2rem">
            <Text fontSize="sm" color="gray.500" noOfLines={2}>{description}</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <AiFillStar size="14px" color="teal" />
            <Text fontSize="sm" color="gray.600" ml="1">{ratings}</Text>
          </Box>
          <Text fontSize="sm" color="gray.700">By {author}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

const MyCourses = () => {
  const enrolledCourseCards = useSelector((state) => state.courses.enrolledCourses);
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");

  let selectedCourse = Courses.filter((course) => enrolledCourseCards.includes(course.id));

  if (isSmallerThanMd) {
   
    const responsive = {
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 30,
      },
    };

    return (
      <Box mt={4}>
        <Carousel
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          centerMode={true}
          showDots={true}
        >
          {selectedCourse.map((course, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <CourseCard
                id={course.id}
                name={course.name}
                ratings={course.ratings}
                author={course.author}
                image={course.image}
                description={course.description}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    );
  } else {
    
    return (
      <Wrap spacing="30px" mt={4} justify="center">
        {selectedCourse.map((course, index) => (
          <WrapItem key={index}>
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
