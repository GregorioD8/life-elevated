// /src/components/UserPerformanceContext.js
import React, { createContext, useState } from 'react';

export const UserPerformanceContext = createContext();

export const UserPerformanceProvider = ({ children }) => {
  const [performance, setPerformance] = useState({
    score: 0,
  });

  return (
    <UserPerformanceContext.Provider value={{ performance, setPerformance }}>
      {children}
    </UserPerformanceContext.Provider>
  );
};