import { createContext, useContext, useState, ReactNode } from "react";

type LeadModalContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const LeadModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <LeadModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used inside LeadModalProvider");
  return ctx;
};
