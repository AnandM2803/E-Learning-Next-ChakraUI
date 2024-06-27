'use client'
import { Box, Heading, Text, Image, HStack, VStack, Button, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import Courses from "../../../../public/courselist";
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from "react-redux";

const CourseCard = ({ id,name, ratings, courseFees, author, image, description }) => {
 
  return (
    <Link href={`/dashboard/mycourses/coursedetails?id=${id}`}>
    <Box borderWidth="1px" borderRadius="15px" boxShadow="2px 2px 2px 2px" width="180px" p="1" height="220px" mr='8px'  templateColumns={{sm:'repeat(2,1fr)',
      md:'repeat(3,1fr)',lg:'repeat(4,1fr)'
    }}>
      <Image src={image} alt={name} maxWidth="100%" height="80px" borderRadius="md" ml='2px' />

      <VStack align="start" spacing={1} mt="2">
        <Text fontWeight="bold" fontSize="sm" isTruncated>{name}</Text>
        <Box height="2rem">
          <Text fontSize="xs" color="gray" noOfLines={2}>{description}</Text>
        </Box>
        <HStack spacing={1}>
          <Text fontSize="xs" color="gray">{ratings}</Text>
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} size="12px" color={i < Math.round(ratings) ? "teal" : "gray"} />
          ))}
        </HStack>
        <Text fontSize="xs" color="black">By {author}</Text>
      </VStack>
    </Box>
    </Link>
  );
};

const MyCourses = () => {
  const enrolledCourseCards=useSelector((state)=>state.courses.enrolledCourses)
  let selectedCourse=[];
  Courses.forEach((courses)=>{
    if(enrolledCourseCards.includes(courses.id))
      {
        selectedCourse.push(courses)
      }
  })
  console.log(enrolledCourseCards)
  return (
    <Wrap spacing={8} mt={1} justify="center" overflowX="auto" maxW="80vw">
      {selectedCourse.map((course, index) => (
        <WrapItem key={index}>
          <CourseCard
          id={course.id}
            name={course.name}
            ratings={course.ratings}
            courseFees={course.courseFees}
            author={course.author}
            image={course.image}
            description={course.description}
            videoUrl={course.videoUrl}
            profName={course.profName}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default MyCourses;
