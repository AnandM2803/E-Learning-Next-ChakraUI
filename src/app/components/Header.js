"use client";
import { useState } from "react";
import { Box, Flex, Avatar, IconButton, Button, Image } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router1 = useRouter();
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleAvatarClick = () => {
    setShowLogoutButton(true);
  };

  const handleLogout = () => {
    router1.push("/");
    setShowLogoutButton(false);
  };

  return (
    <Box bg="#BFFDFD" color="white" p={{ base: "2", md: "4" }}>
      <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }}>
        <Flex justify="center" align="center" mb={{ base: "4", md: "0" }}>
          <Avatar boxSize={{ base: "30px", md: "40px" }}>
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSPx5gg-QaimemINnKlX8d_otTWV3x8MCCVlqUYO2uxbpGUrEf"
              alt="logo"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }} 
            />
          </Avatar>
        </Flex>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6Q77Qq3rvUaRt-WJx3q-A26h-iiqRjlXiQH2I0ix1KSdfFvQ"
              alt="profile"
              style={{ borderRadius: "50%" }}
              width="100%"
              height="100%"
            />
          </Avatar>
          {showLogoutButton && (
            <Button ml={{ base: "2", md: "4" }} onClick={handleLogout} colorScheme="pink" size={{ base: "sm", md: "md" }}>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
