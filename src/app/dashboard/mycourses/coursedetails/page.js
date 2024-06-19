// Import necessary modules
"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Courses from "../../../../../public/courselist";
import { useSearchParams } from "next/navigation";

// Define interface for props
const VideoPlayer = () => {
  const searchparams = useSearchParams();
  const courseId = searchparams.get("id");
  const course = Courses.find((course) => course.id === courseId);

  // Array of video links
  const videoLinks = [
    "https://www.youtube.com/watch?v=qz0aGYrrlhU",
    "https://www.youtube.com/watch?v=HD13eq_Pmp8",
    "https://www.youtube.com/watch?v=FQdaUv95mR8",
  ];

  // Select the lecture based on search params or default to course link
  // const selectedLecture =
  //   videoLinks[Number(searchParams.lecture) - 1] || course?.courseLink;

  // If no lecture is selected or available, display text
  // if (!selectedLecture) {
  //   return <Text>No video selected or available.</Text>;
  // }

  // Render ReactPlayer with selected lecture URL
  return (
    <ReactPlayer
      url={course.videoUrl}
      width={"100%"}
      height={"100%"}
      controls={true}
      style={{ borderRadius: "8px" }}
    />
  );
};

// Export VideoPlayer as a dynamically imported component
export default dynamic(() => Promise.resolve(VideoPlayer), {
  ssr: false,
});
