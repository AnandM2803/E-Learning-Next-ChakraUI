"use client";
import { useState } from "react";
import { Box, Flex, Avatar, IconButton, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const InstructoreHeader = () => {
  const router = useRouter();
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)"); 

  const handleAvatarClick = () => {
    setShowLogoutButton((prev) => !prev); 
  };

  const handleLogout = () => {
    router.push("/");
    setShowLogoutButton(false);
  };
  

  return (
    <Box bg="#C3DDFD" color="white" p={{ base: "2", md: "4" }}>
      <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }}>
        {/* Logo section */}
        {!isMobile && ( 
          <Flex justify="center" align="center" mb={{ base: "4", md: "0" }}>
            <Avatar boxSize={{ base: "30px", md: "40px" }}>
              <Image
                src="/logo.png"
                alt="logo"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Avatar>
          </Flex>
        )}
        
        {/* Notification and profile section */}
        <Flex align="center">
          <IconButton
            icon={<BellIcon w={{ base: "24px", md: "30px" }} h={{ base: "24px", md: "30px" }} />}
            variant="ghost"
            color="black"
            aria-label="Notification"
            mr={{ base: "2", md: "4" }}
          />
          <Avatar onClick={handleAvatarClick} ml={{ base: "2", md: "4" }} boxSize={{ base: "30px", md: "40px" }}>
            <Image
              src="/instructor1.jpg"
              alt="profile"
              style={{ borderRadius: "50%" }}
              width="100%"
              height="100%"
            />
          </Avatar>
          {showLogoutButton && (
            <Button ml={{ base: "2", md: "4" }} onClick={handleLogout} colorScheme="blue" size={{ base: "sm", md: "md" }}>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default InstructoreHeader;
