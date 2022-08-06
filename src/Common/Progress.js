import { useState, createContext } from "react";

export const Progress = createContext();

export default function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(0);

  return (
    <Progress.Provider
      value={{ progress, setProgress }}
    >
      {children}
    </Progress.Provider>
  );
}