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
  const chapter = searchparams.get("chapter");
  const course = Courses.find((course) => course.id === courseId);

  const selectedLecture =
    course.chapterVideoLinks[Number(chapter) - 1] || course.videoUrl;

  // If no lecture is selected or available, display text
  // if (!selectedLecture) {
  //   return <Text>No video selected or available.</Text>;
  // }

  // Render ReactPlayer with selected lecture URL
  return (
    <ReactPlayer
      url={selectedLecture}
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
