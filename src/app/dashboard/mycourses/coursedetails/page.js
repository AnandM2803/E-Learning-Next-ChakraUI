"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Courses from "../../../../../public/courselist";
import { useSearchParams } from "next/navigation";


const VideoPlayer = () => {
  const searchparams = useSearchParams();
  const courseId = searchparams.get("id");
  const chapter = searchparams.get("chapter");
  const course = Courses.find((course) => course.id === courseId);

  const selectedCard =
    course.chapterVideoLinks[Number(chapter) - 1] || course.videoUrl;

  return (
    <ReactPlayer
      url={selectedCard}
      width={"100%"}
      height={"100%"}
      controls={true}
      style={{ borderRadius: "8px" }}
    />
  );
};

export default dynamic(() => Promise.resolve(VideoPlayer), {
  ssr: false,
});
