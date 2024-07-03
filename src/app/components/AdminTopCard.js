'use client'
import React, { useState } from "react";
import { Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { LuClock5, LuClock12 } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineTaskAlt } from "react-icons/md";
import AdminCourseChart from "./AdminCourseChart";
import AdminTaskChart from "./AdminTaskChart";

const data = {
  Week: [
    { id: "001", icon: GrFormView, rating: "1.5k", text: "Courses view" },
    { id: "002", icon: LuClock5, rating: "2.2k", text: "Enrolled Students" },
    { id: "003", icon: FaUserFriends, rating: "225", text: "Average Time Spent" },
    { id: "004", icon: MdOutlineTaskAlt, rating: "120", text: "Total Time Spent" },
    { id: "005", icon: LuClock12, rating: "12", text: "Task Completion" },
  ],
  Month: [
    { id: "001", icon: GrFormView, rating: "2.5k", text: "Courses view" },
    { id: "002", icon: LuClock5, rating: "2.3k", text: "Enrolled Students" },
    { id: "003", icon: FaUserFriends, rating: "230", text: "Average Time Spent" },
    { id: "004", icon: MdOutlineTaskAlt, rating: "125", text: "Total Time Spent" },
    { id: "005", icon: LuClock12, rating: "14", text: "Task Completion" },
  ],
  Quarter: [
    { id: "001", icon: GrFormView, rating: "1.8k", text: "Courses view" },
    { id: "002", icon: LuClock5, rating: "2.6k", text: "Enrolled Students" },
    { id: "003", icon: FaUserFriends, rating: "241", text: "Average Time Spent" },
    { id: "004", icon: MdOutlineTaskAlt, rating: "132", text: "Total Time Spent" },
    { id: "005", icon: LuClock12, rating: "16", text: "Task Completion" },
  ],
  Year: [
    { id: "001", icon: GrFormView, rating: "1.9k", text: "Courses view" },
    { id: "002", icon: LuClock5, rating: "2.1k", text: "Enrolled Students" },
    { id: "003", icon: FaUserFriends, rating: "290", text: "Average Time Spent" },
    { id: "004", icon: MdOutlineTaskAlt, rating: "120", text: "Total Time Spent" },
    { id: "005", icon: LuClock12, rating: "10", text: "Task Completion" },
  ],
};

const AdminTopCard = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [currentView, setCurrentView] = useState("Week");

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems={isSmallerThan768 ? "center" : "flex-start"}>
        <Box mt={isSmallerThan768 ? '8px' : '3px'} mb={isSmallerThan768 ? '10px':'0'}>
          <Text fontSize={isSmallerThan768 ? 'xl' : 'lg'}><b>Overview</b></Text>
        </Box>
        <Box mt={isSmallerThan768 ? '8px' : '2px'} display="flex" flexWrap="wrap" justifyContent={isSmallerThan768 ? "center" : "flex-start"}>        
          <Button
            mr={'5px'}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            onClick={() => handleButtonClick("Week")}
          >{isSmallerThan768 ? "W" : "Week"}</Button>
          <Button
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            mr={'5px'}
            onClick={() => handleButtonClick("Month")}
          >
            {isSmallerThan768 ? "M" : "Month"}
          </Button>
          <Button
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            mr={'5px'}
            onClick={() => handleButtonClick("Quarter")}
          >
            {isSmallerThan768 ? "Q" : "Quarter"}
          </Button>
          <Button
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            mb={2}
            onClick={() => handleButtonClick("Year")}
          >
            {isSmallerThan768 ? "Y" : "Year"}
          </Button>
        </Box>
      </Box>
      {/* sub box container */}
      <Box
        display={"flex"}
        flexDirection={isSmallerThan768 ? "column" : "row"}
        flexWrap={isSmallerThan768 ? "nowrap" : "wrap"}
        justifyContent="flex-start"
        alignItems="center"
        marginTop={"20px"}
        height={isSmallerThan768 ? 'auto' : '120px'}
        overflowY={isSmallerThan768 ? 'auto' : 'hidden'}
        maxH={isSmallerThan768 ? '240px' : 'none'}
      >
        {data[currentView].map((item) => (
          <Box
            key={item.id}
            width={"190px"}
            height={"100px"}
            ml={isSmallerThan768 ? '0' : '22px'}
            mb={isSmallerThan768 ? '10px' : '20px'}
            paddingLeft={"5px"}
            backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            paddingTop={"5px"}
            textAlign={isSmallerThan768 ? 'center' : 'left'}
          >
            <Box padding={'5px'} as={item.icon} size="24px" />
            <Text padding={'5px'}><b>{item.rating}</b></Text>
            <Text fontSize={"13px"} padding={'5px'}>{item.text}</Text>
          </Box>
        ))}
      </Box>
      {/* Bar Chart container */}
      <Box
        display="flex"
        flexDirection={isSmallerThan768 ? "column" : "row"}
        alignItems="center"
        justifyContent="space-around"
        gap="10px"
        p="12px"
        overflowX={isSmallerThan768 ? "scroll" : "hidden"}
        width="100%"
      >
        <Box minWidth={isSmallerThan768 ? "300px" : "auto"} mb={isSmallerThan768 ? "10px" : "0"}>
          <AdminCourseChart chartType={currentView} />
        </Box>
        <Box minWidth={isSmallerThan768 ? "300px" : "auto"}>
          <AdminTaskChart chartType={currentView} />
        </Box>
      </Box>
    </>
  );
};

export default AdminTopCard;
