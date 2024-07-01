'use client'
import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import { Text, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Courses from "../../../../../public/courselist";
import { useSearchParams } from "next/navigation";

const VideoPlayer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)"); 

  const searchparams = useSearchParams();
  const courseId = searchparams.get("id");
  const chapter = searchparams.get("chapter");
  const course = Courses.find((course) => course.id === courseId);

  const selectedCard =
    course.chapterVideoLinks[Number(chapter) - 1] || course.videoUrl;

  return (
    <ReactPlayer
      url={selectedCard}
      width={isMobile ? "100%" : "auto"} 
      height={isMobile ? "auto" : "100%"} 
      controls={true}
      style={{ borderRadius: "8px" }}
    />
  );
};

const VideoPlayerWithSuspense = () => (
  <Suspense fallback={<Text>Loading...</Text>}>
    <VideoPlayer />
  </Suspense>
);

export default dynamic(() => Promise.resolve(VideoPlayerWithSuspense), {
  ssr: false,
});
