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
        () => ({ isSidebarCollapsed, toggleSidebar }),
        [isSidebarCollapsed, toggleSidebar]
      )}
    >
      <Layout className="min-h-screen">{children}</Layout>
    </LayoutContext.Provider>
  );
};

// === HOOKS === //

export const useSidebarCollapse = () => {
  const { isSidebarCollapsed, toggleSidebar } = React.useContext(LayoutContext);

  return { isSidebarCollapsed, toggleSidebar };
};

export default LayoutProvider;
