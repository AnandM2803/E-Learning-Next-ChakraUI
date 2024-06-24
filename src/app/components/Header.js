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
    <Box bg="#BFFDFD" color="white" p="1">
      <Flex justify="space-between" align="center">
        <Avatar boxSize="40px" position="relative" right="160px">
          <Image
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSPx5gg-QaimemINnKlX8d_otTWV3x8MCCVlqUYO2uxbpGUrEf"
            alt="logo"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }} // Adjust styles
          />
        </Avatar>
        <Flex align="center">
          <IconButton
            icon={<BellIcon w="30px" h="30px" />}
            variant="ghost"
            color="black"
            aria-label="Notification"
            mr="4"
          />
          <Avatar onClick={handleAvatarClick} ml="4">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6Q77Qq3rvUaRt-WJx3q-A26h-iiqRjlXiQH2I0ix1KSdfFvQ"
              alt="profile"
              style={{ borderRadius: "50%" }}
              width="250px"
            />
          </Avatar>
          {showLogoutButton && (
            <Button ml="4" onClick={handleLogout} colorScheme="pink">
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
