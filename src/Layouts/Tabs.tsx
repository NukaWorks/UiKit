import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import styled from "styled-components";
import { Button } from "../Base/Button";

// Types and Interfaces
interface TabsContextType {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

interface TabsProps {
  children: ReactNode;
  defaultTab?: number;
  className?: string;
}

interface TabProps {
  children: ReactNode;
  index: number;
  disabled?: boolean;
  className?: string;
}

interface TabPanelProps {
  children: ReactNode;
  index: number;
  className?: string;
}

// Styled Components
const TabsContainer = styled.div`
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const TabPanelContainer = styled.div`
  padding: 1rem 0;
`;

// Context
const TabsContext = createContext<TabsContextType | undefined>(undefined);

// Hook
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
};

// Components
export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultTab = 0,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);

  return (
    <TabsContext.Provider value={value}>
      <TabsContainer className={className}>{children}</TabsContainer>
    </TabsContext.Provider>
  );
};

export const Tab: React.FC<TabProps> = ({
  children,
  index,
  disabled = false,
  className,
}) => {
  const { activeTab, setActiveTab } = useTabs();

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(index);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      className={className}
      color={activeTab === index ? "TabButtonActive" : "TabButton"}
      size="Small"
      {...{
        "data-tab": true,
        "aria-selected": activeTab === index,
        "aria-disabled": disabled,
        role: "tab",
      }}
    >
      {children}
    </Button>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  className,
}) => {
  const { activeTab } = useTabs();

  if (activeTab !== index) {
    return null;
  }

  return (
    <TabPanelContainer
      className={className}
      role="tabpanel"
      aria-hidden={activeTab !== index}
    >
      {children}
    </TabPanelContainer>
  );
};

export { TabList };
