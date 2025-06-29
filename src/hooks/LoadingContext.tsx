// context/LoadingContext.tsx
'use client';

import { createContext, useState, useContext } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
