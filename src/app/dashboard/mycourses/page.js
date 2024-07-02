'use client'
import { Box, Text, Image, VStack, useMediaQuery } from "@chakra-ui/react";
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
        boxShadow="2px 2px 2px 2px"
        p="1"
        height="100%"
        ml='8px'
        textAlign="center"
      >
        <Image src={image} alt={name} maxWidth="100%" height="80px" borderRadius="md" ml='2px' />
        <VStack align="start" spacing={1} mt="2">
          <Text fontWeight="bold" fontSize="sm" isTruncated>{name}</Text>
          <Box height="2rem">
            <Text fontSize="xs" color="gray" noOfLines={2}>{description}</Text>
          </Box>
          <Text fontSize="xs" color="gray">{ratings}</Text>
          <AiFillStar size="12px" color="teal" />
          <Text fontSize="xs" color="black">By {author}</Text>
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
    // Render carousel for mobile view
    const responsive = {
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 50, // optional, added for better UI/UX
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 50, // optional, added for better UI/UX
      },
    };

    return (
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
    );
  } else {
    // Render vertical scrollable container for normal layout
    return (
      <Wrap spacing={8} mt={1} justify="center" overflowX="auto" maxW="80vw">
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
