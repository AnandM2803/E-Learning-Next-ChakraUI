'use client';
import React, { useState } from "react";
import { Box, VStack, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

import { RiAdminFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineGroups3 } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Sidebar.module.css";

const InstructorSideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const boxcontainer = {
    w: isVisible && !isMobile ? "220px" : "80px",
    bg: "#C3DDFD",
    color: "black",
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
            <Link href="/instructor" display='flex' title="Dashboard">
              <RiAdminFill size="17"  />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/instructor">InstructorDash</Link>
              </Box>
            )}
          </Box>

          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/instructor/courses" title="Courses">
            <SiCoursera />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/instructor/courses">Courses</Link>
              </Box>
            )}
          </Box>
   
          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="/instructor/mentors" title="Mentors">
            <FaUsers />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="/instructor/mentors">Mentors</Link>
              </Box>
            )}
          </Box>

        </Box>
        <Box ml="9px" display="flex" flexDirection="column" rowGap="10px">
          <Box display="flex" columnGap="5px" alignItems="center" justifyContent="start">
            <Link href="#">
              <ImProfile />
            </Link>
            {isVisible && !isMobile && (
              <Box>
                <Link href="#">Profile</Link>
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

export default InstructorSideBar;
