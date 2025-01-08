import { type WhyNetLogoEntry } from "./api.ts";
import { createContext, useContext, type ReactNode } from "react";

interface PageData {
  whyNetLogoData: WhyNetLogoEntry[]; // Add your WhyNetLogo data here
}

// Create a context type that includes both data and any functions to update it
interface PageDataContextType {
  data: PageData;
  // Add any functions to update the data if needed
  updateWhyNetLogoData?: (data: WhyNetLogoEntry[]) => void;
  // Add other update functions as needed
}

const PageDataContext = createContext<PageDataContextType | undefined>(
  undefined
);

// Provider component
export function PageDataProvider({
  initialData,
  children,
}: {
  initialData: PageData;
  children: ReactNode;
}) {
  // You can add state here if you need to update data
  const contextValue = {
    data: initialData,
    // Add update functions if needed
  };

  return (
    <PageDataContext.Provider value={contextValue}>
      {children}
    </PageDataContext.Provider>
  );
}

// Custom hook to use the data
export function usePageData() {
  const context = useContext(PageDataContext);
  if (context === undefined) {
    throw new Error("usePageData must be used within a PageDataProvider");
  }
  return context;
}
