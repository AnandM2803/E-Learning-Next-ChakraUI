"use client";
import { Box, Text, Button } from "@chakra-ui/react";
import { LuClock5, LuClock12 } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdOutlineTaskAlt } from "react-icons/md";


const AdminContent = [
    {
      id: '001',
      icon: GrView,
      rating: '1.5k',
      text: 'Courses view',
    },
    {
      id: '002',
      icon: LuClock5,
      rating: '2.2k',
      text: 'Enrolled Students',
    },
    {
      id: '003',
      icon: FaUserFriends,
      rating: '225',
      text: 'Average Time Spent',
    },
    {
      id: '004',
      icon: MdOutlineTaskAlt,
      rating: '120',
      text: 'Total Time Spent',
    },
    {
      id: '005',
      icon: LuClock12,
      rating: '12',
      text: 'Task Completion',
    },
  ];

  
const AdminTopCard = () => {
    return (
     <>
        <Box display={"flex"} justifyContent={"space-between"}>
          {/* text container  */}
          <Box ml={"26px"} mt={"8px"}>
            <Text><b>Overview</b></Text>
          </Box>
          {/* button containers  */}
          <Box mr={"20px"} mt={"8px"}>
            <Button mr={'5px'}  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">Week</Button>
            <Button  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)" mr={'5px'}>Month</Button>
            <Button  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)" mr={'5px'}>Quarter</Button>
            <Button  backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)">Year</Button>
          </Box>
        </Box>
  {/* sub box container  */}
        <Box 
          display={"flex"}
          justifyContent='flex-start'
          alignItems='center'
          marginTop={"20px"}
          height='120px'
        >
          {AdminContent.map(item => (
            <Box
              key={item.id}
              width={"190px"}
              height={"100px"}
              ml='22px'
              mb='20px'
              paddingLeft={"5px"}
              backgroundColor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              paddingTop={"5px"}
            >
              <Box padding={'5px'} as={item.icon} size="24px" />
              <Text padding={'5px'}><b>{item.rating}</b></Text>
              <Text fontSize={"13px"} padding={'5px'}>{item.text}</Text>
            </Box>
          ))}
        </Box>
        </>
    );
  };
  
  export default AdminTopCard;
  

