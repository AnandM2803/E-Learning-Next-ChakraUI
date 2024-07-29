'use client'
import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profilePic, setProfilePic] = useState('/MyProfilePic.jpg');

  const handleImageUpload = (imageSrc) => {
    setProfilePic(imageSrc);
  };

  return (
    <ProfileContext.Provider value={{ profilePic, handleImageUpload }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
