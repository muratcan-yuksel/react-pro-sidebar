import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "./App.css";
function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app">
      <Sidebar id="sidebar" style={{ height: "100%" }}>
        <Menu>
          <div>lorem</div>
          <MenuItem>sth Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default Layout;
