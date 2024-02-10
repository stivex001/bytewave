"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface HeaderProps {
  openContactModal: boolean;
  setOpenContactModal: Dispatch<SetStateAction<boolean>>;
}

const HeaderContext = createContext<HeaderProps | null>(null);

export const HeaderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <HeaderContext.Provider value={{ openContactModal, setOpenContactModal }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
