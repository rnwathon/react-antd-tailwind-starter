import React from 'react';
import { Layout } from 'antd';

const LayoutContext = React.createContext();

const LayoutProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarCollapsed((prevState) => !prevState);
  }, [setIsSidebarCollapsed]);

  return (
    <LayoutContext.Provider
      value={React.useMemo(
        () => ({ isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar }),
        [isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar]
      )}
    >
      <Layout className="min-h-screen">{children}</Layout>
    </LayoutContext.Provider>
  );
};

// === HOOKS === //

export const useSidebarCollapse = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar } =
    React.useContext(LayoutContext);

  return { isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar };
};

export default LayoutProvider;
