'use client'
import { Box, Tab, Tabs, TabList, TabPanel, TabPanels, Text,TabIndicator } from "@chakra-ui/react";
import ProfileDetails from "@/app/dashboard/Profile/ProfileDetails/ProfileDetails";
import PasswordReset from "@/app/dashboard/Profile/PasswordRest/PasswordRest";
import SocialMediaForm from "@/app/dashboard/Profile/SocialMedia/SocialMedia";

const ProfileTabs = () => {
  return (
    <Box
      width={'100%'}
      mt="1"
      p="1"
      boxShadow="md"
      borderRadius="md"
      bg="white"
    >
      <Tabs variant="unstyled" colorScheme="teal">
        <TabList>
          <Tab fontSize={'12px'}>Profile</Tab>
          <Tab fontSize={'12px'}>Password</Tab>
          <Tab fontSize={'12px'}>Social Media</Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
            <Box p="1">
              <ProfileDetails />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p="1">
              <PasswordReset />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p="1">
              <SocialMediaForm />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
