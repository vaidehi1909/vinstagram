import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import withAuth from "../../../redux/ProtectedRoute";
import Sidebar from "./sidebar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import NotificationDrawer from "../Notification/Drawer";

// Styled components

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  padding: "2px 8px",
  flex: 1,
  margin: "0 16px",
}));

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 1100,
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Box
            sx={{
              fontFamily: "'Instagram Sans Script', cursive",
              fontSize: "24px",
              flex: 1,
            }}
          >
            Vinstagram
          </Box>
          {/* <SearchBox>
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase placeholder="Search" sx={{ flex: 1 }} />
          </SearchBox> */}
          <IconButton onClick={() => setIsNotificationOpen(true)}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>
      {isNotificationOpen && (
        <NotificationDrawer
          open={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)}
        />
      )}
    </>
  );
};

const SideBarLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Header />
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
