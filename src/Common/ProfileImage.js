import { useState, createContext } from "react";

export const ProfileImage = createContext();

export default function ProfileImageProvider({ children }) {
  const [image, setImage] = useState("");

  return (
    <ProfileImage.Provider
      value={{ image, setImage }}
    >
      {children}
    </ProfileImage.Provider>
  );
}