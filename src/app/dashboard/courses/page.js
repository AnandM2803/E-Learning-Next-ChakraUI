"use client";
import React, { useState } from "react";
import {
  Box,
  Image,
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
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineFilter,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Courses from "../../../../public/courselist";

const RotatedIconButton = chakra(IconButton, {
  baseStyle: {
    transform: "rotate(90deg)",
  },
});

const CourseCard = ({
  name,
  ratings,
  courseFees,
  author,
  image,
  description,
}) => {
  const formattedFees =
    courseFees === "0"
      ? "Free"
      : Number(courseFees).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        });

  return (
    <Box
    templateColumns={{sm:'repeat(2,1fr)',
      md:'repeat(3,1fr)',lg:'repeat(4,1fr)'
    }}
      borderWidth="1px"
      borderRadius="15px"
      boxShadow="2px 2px 2px 2px"
      width="180px"
      p="1"
      height="250px"
      mr="8px"
    >
      <Image
        src={image}
        alt={name}
        maxWidth="100%"
        height="80px"
        borderRadius="md"
        ml="2px"
      />

      <VStack align="start" spacing={1} mt="2">
        <Text fontWeight="bold" fontSize="sm" isTruncated>
          {name}
        </Text>
        <Box height="2rem">
          <Text fontSize="xs" color="gray" noOfLines={2}>
            {description}
          </Text>
        </Box>
        <HStack spacing={1}>
          <Text fontSize="xs" color="gray">
            {ratings}
          </Text>
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              size="12px"
              color={i < Math.round(ratings) ? "teal" : "gray"}
            />
          ))}
        </HStack>
        <Text fontSize="xs" fontWeight="bold">
          {formattedFees}
        </Text>
        <Text fontSize="xs" color="black">
          By {author}
        </Text>
        <Button size="xs" colorScheme="teal" mt="2px">
          Enroll
        </Button>
      </VStack>
    </Box>
  );
};

const CourseCards = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState(null);

  const filteredCourses =
    filter === "all"
      ? Courses
      : Courses.filter((course) =>
          filter === "paid"
            ? course.courseFees !== "0"
            : course.courseFees === "0"
        );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sort === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sort === "courseFees-asc") {
      return parseFloat(a.courseFees) - parseFloat(b.courseFees);
    } else if (sort === "courseFees-desc") {
      return parseFloat(b.courseFees) - parseFloat(a.courseFees);
    } else if (sort === "ratings-asc") {
      return parseFloat(a.ratings) - parseFloat(b.ratings);
    } else if (sort === "ratings-desc") {
      return parseFloat(b.ratings) - parseFloat(a.ratings);
    } else {
      return 0;
    }
  });

  return (
    <Box>
      <HStack justify="flex-end" mr={4} mb={4}>
        <Menu>
          <MenuButton
            as={RotatedIconButton}
            icon={<AiOutlineFilter />}
            colorScheme="teal"
          />
          <MenuList>
            <MenuItem onClick={() => setFilter("all")}>All</MenuItem>
            <MenuItem onClick={() => setFilter("paid")}>Paid</MenuItem>
            <MenuItem onClick={() => setFilter("unpaid")}>Unpaid</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<AiOutlineSortAscending />}
            colorScheme="teal"
          />
          <MenuList>
            <MenuItem onClick={() => setSort("name-asc")}>
              Asc by CName
            </MenuItem>
            <MenuItem onClick={() => setSort("name-desc")}>
              Desc by CName
            </MenuItem>
            <MenuItem onClick={() => setSort("courseFees-asc")}>
              Asc by CFees
            </MenuItem>
            <MenuItem onClick={() => setSort("courseFees-desc")}>
              Desc by CFees
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

      <Wrap spacing={8} mt={1} justify="center" overflowX="auto" maxW="80vw">
        {sortedCourses.map((course, index) => (
          <WrapItem key={index}>
            <CourseCard
              name={course.name}
              ratings={course.ratings}
              courseFees={course.courseFees}
              author={course.author}
              image={course.image}
              description={course.description}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default CourseCards;