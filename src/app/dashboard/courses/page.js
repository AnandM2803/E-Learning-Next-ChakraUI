'use client';
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  chakra,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineFilter,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { addEnrolledCourses } from "@/lib/enrolledCourse/enrolledCourse";
import { useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RotatedIconButton = chakra(IconButton, {
  baseStyle: {
    transform: "rotate(90deg)",
  },
});

const CourseCard = ({
  id,
  name,
  ratings,
  courseFees,
  author,
  image,
  description,
}) => {
  const dispatch = useDispatch();

  const handleEnrollClick = () => {
    dispatch(addEnrolledCourses(id));
  };

  const formattedFees =
    courseFees === "0"
      ? "Free"
      : Number(courseFees).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        });
        const imageUrl = `http://localhost:5000/${image}`;

  return (
    <Box
      borderWidth="1px"
      borderRadius="15px"
      boxShadow="2px 2px 2px 2px"
      width="179px"
      p="1"
      height="250px"
      mr="8px"
      overflowY="visible"
      id="courseboxcontainer"
      ml={["70px","auto"]}
    >
      
        <Image
          src={imageUrl}
          alt={name}
          maxWidth="190px"
          height="80px"
          borderRadius="md"
          ml="7px"
        />
        <VStack align="start" spacing={1} mt="2" id="coursevstack1">
          <Text fontWeight="bold" fontSize="sm" isTruncated>
            {name}
          </Text>
          <Box height="2rem">
            <Text fontSize="xs" color="gray" noOfLines={2}>
              {description}
            </Text>
          </Box>
          <HStack spacing={1} id="coursehstack1">
            <Text fontSize="xs" color="gray">
              {ratings}
            </Text>
            {/* {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                size="12px"
                color={i < Math.round(ratings) ? "teal" : "gray"}
              />
            ))} */}
          </HStack>
          <Text fontSize="xs" fontWeight="bold">
            {formattedFees}
          </Text>
          <Text fontSize="xs" color="black">
            By {author}
          </Text>
          <Button
            size="xs"
            bg='#C3DDFD'
            // colorScheme="#C3DDFD"
            mt="2px"
            onClick={handleEnrollClick}
            ml={'50px'}
          >
            Enroll
          </Button>
        </VStack>
    </Box>
  );
};

const CourseCards = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // const dispatch = useDispatch();
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

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) =>
          filter === "paid"
            ? course.courseFees !== "0"
            : course.courseFees === "0"
        );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "name-asc") {
      return a.courseName.localeCompare(b.courseName);
    } else if (sort === "name-desc") {
      return b.courseName.localeCompare(a.courseName);
    } else if (sort === "courseFees-asc") {
      return parseFloat(a.coursePrice) - parseFloat(b.coursePrice);
    } else if (sort === "courseFees-desc") {
      return parseFloat(b.coursePrice) - parseFloat(a.coursePrice);
    } else if (sort === "ratings-asc") {
      return parseFloat(a.courseRating) - parseFloat(b.courseRating);
    } else if (sort === "ratings-desc") {
      return parseFloat(b.courseRating) - parseFloat(a.courseRating);
    } else {
      return 0;
    }
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 430 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
    },
  };

  const carouselContainerStyle = {
    overflow: "hidden",
  };

  const CarouselContainer = chakra("div", {
    baseStyle: {
      width: "80%", 
      padding: "0 1px", 
      mr: "40px"                         
    },
  });

  return (
    <Box overflowY="scroll" id="coursebox2" >
      <HStack
        justify={isMobile ? "center" : "flex-end"} 
        p={1}
        px={2}
        borderBottom="1px"
        borderColor="gray.200"
        mb={2}
      >
        <Menu id="coursemenu1">
          <MenuButton
            as={RotatedIconButton}
            icon={<AiOutlineFilter />}
             bg='#C3DDFD'
          />
          <MenuList id="coursemenulist">
            <MenuItem onClick={() => setFilter("all")}>All</MenuItem>
            <MenuItem onClick={() => setFilter("paid")}>Paid</MenuItem>
            <MenuItem onClick={() => setFilter("unpaid")}>Unpaid</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<AiOutlineSortAscending />}
           bg='#C3DDFD'
          />
          <MenuList>
            <MenuItem onClick={() => setSort("name-asc")}>
              Asc by Name
            </MenuItem>
            <MenuItem onClick={() => setSort("name-desc")}>
              Desc by Name
            </MenuItem>
            <MenuItem onClick={() => setSort("courseFees-asc")}>
              Asc by Fees
            </MenuItem>
            <MenuItem onClick={() => setSort("courseFees-desc")}>
              Desc by Fees
            </MenuItem>
            <MenuItem onClick={() => setSort("ratings-asc")}>
              Asc by Ratings
            </MenuItem>
            <MenuItem onClick={() => setSort("ratings-desc")}>
              Desc by Ratings
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      {isMobile ? (
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          autoPlay
          autoPlaySpeed={3000}
          infinite
          keyBoardControl
          containerStyle={carouselContainerStyle}
          itemClass="carousel-item-padding-10-px"          
          mr= "40px"
          
          
        >
          {sortedCourses.map((course, index) => (
            <CarouselContainer key={index} id="carouselcontainer">
              <CourseCard
               id={course._id}
               name={course.courseName}
               ratings={course.courseRating}
               courseFees={course.coursePrice}
               author={course.author}
               image={course.courseImg}
               description={course.description}
              />
            </CarouselContainer>
          ))}
        </Carousel>
      ) : (
        <Wrap spacing={4} mt={1} justify="center" h="75vh" id="coursewrap1" >
          {sortedCourses.map((course, index) => (
            <WrapItem key={index}>
              <CourseCard
                id={course._id}
                name={course.courseName}
                ratings={course.courseRating}
                courseFees={course.coursePrice}
                author={course.author}
                image={course.courseImg}
                description={course.description}
              />
            </WrapItem> 
          ))}
        </Wrap>   

      )}
    </Box>
  );
};

export default CourseCards;
