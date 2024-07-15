'use client';
import React, { useState } from "react";
import { Box, VStack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

import { MdSpaceDashboard } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { PiExamFill } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { PiSubtitlesFill } from "react-icons/pi";
import { FaDiscourse } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdIncompleteCircle } from "react-icons/md";
import styles from "./Sidebar.module.css";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const boxcontainer = {
    w: isVisible && !isMobile ? "220px" : "80px",
    bg: "#C3DDFD",
    color: "black",
    height:'100vh',
    
  };

  const hamburgerStyles = {
    cursor: "pointer",
    fontSize: "30px",
    width:'20%',
    transition: "color 0.3s ease, transform 0.3s ease",
    _hover: {
      transform: "scale(1)",
      color: "#4A90E2"
    }
  };

  return (
    <Box sx={boxcontainer} id="maincontainer">
      <Box 
        color="black" 
        position="relative" 
        left="8px" 
        top="80px" 
        onClick={toggleVisibility}
        sx={hamburgerStyles}
      >
       <RxHamburgerMenu size={'25px'}/>
      </Box>
      <VStack align="start" fontSize="17px" className={styles.sidelink} mt="100px" id="vstackcontainer">
        <Box ml="9px" display="flex" flexDirection="column" rowGap="10px">
          <Box display="flex" alignItems="center" justifyContent="start" columnGap="5px">
            <Link href="/dashboard" display='flex'>
              <MdSpaceDashboard size="17"  />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard">Dashboard</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/dashboard/courses">
            <SiCoursera />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/courses">Courses</Link>
              </Box>
            )}
          </Box>
   
          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/dashboard/exams">
            <PiExamFill />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/exams">Exams</Link>
              </Box>
            )}
          </Box>
       

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/dashboard/training">
            <MdModelTraining />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/training">Training</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/dashboard/mycourses">
            <FaDiscourse />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/mycourses">My Courses</Link>
              </Box>
            )}
          </Box>

        </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start" ml='6px'>
            <Link href="/dashboard/myprogress">
            <GiProgression />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/myprogress">My Progress</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start" ml='6px'>
            <Link href="/dashboard/C_Completed">
            <MdIncompleteCircle />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/C_Completed">C Completed</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start" ml='6px'>
            <Link href="/dashboard/getcertificate">
            <PiCertificateFill />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/getcertificate">Get Certificate</Link>
              </Box>
            )}
          </Box>  

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start" ml='6px'>
            <Link href="/dashboard/subscription">
            <PiSubtitlesFill />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/subscription">Subscription</Link>
              </Box>
            )}
          </Box>

         

        <Box ml="9px" display="flex" flexDirection="column" rowGap="10px">
          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/dashboard/Profile">
              <ImProfile />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/dashboard/Profile">Profile</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="#">
              <IoMdLogOut />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="#">Logout</Link>
              </Box>
            )}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default SideBar;
