'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import Mentor from "../../../../../public/mentorlist";
import { useSearchParams } from "next/navigation";

const profileDetails = {
  fontWeight: 'bold',
  fontSize: '70px',
  background: 'linear-gradient(90deg, #a53a1f, #2851ac)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
  display: 'grid',
  placeItems: "center",
  h: '80vh'
};

function ProfileDetails() {
  const searchParams = useSearchParams();
  const selectedProfile = Mentor.find(
    (profile) => profile.id === searchParams.get("id")
  );

  if (!selectedProfile) {
    return <Text>Profile not found</Text>;
  }

  return (
    <Flex columnGap='10px'>
      <Box rowGap='10px' display='flex' flexDirection='column' w='100%'>
        <Text sx={profileDetails}>{selectedProfile.mentorName}</Text>
      </Box>
    </Flex>
  );
}

export default ProfileDetails;
