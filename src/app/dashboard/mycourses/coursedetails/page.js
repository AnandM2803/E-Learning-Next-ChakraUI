"use client";
import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import { Text, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const VideoPlayer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [courses, setCourses] = useState([]);
  

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/course/getall");
        const data = await response.json();
        console.log("Fetched courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } 
    };

    fetchCourses();
  }, []);

  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");
  const chapter = searchParams.get("chapter");
  const course = courses.find((course) => course._id === courseId);


  if (!course) {
    return <div>No course found</div>;
  }

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
