import React from "react";
import { Box } from "@mui/material";
import withAuth from "../../../redux/ProtectedRoute";
import Sidebar from "./sidebar";

const SideBarLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar for Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "240px",
          borderRight: "1px solid #ddd",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      {children}

      {/* Mobile Navigation */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          width: "100%",
          justifyContent: "space-around",
          borderTop: "1px solid #ddd",
          backgroundColor: "#fff",
          padding: 1,
        }}
      >
        <Sidebar isBottomNav />
      </Box>
    </Box>
  );
};

const Layout = ({ children }) => {
  return <SideBarLayout>{children}</SideBarLayout>;
};

export default withAuth(Layout);
