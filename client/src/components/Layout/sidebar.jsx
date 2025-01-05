//old side bar

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  Home,
  Search,
  Explore,
  Message,
  Notifications,
  AddBox,
  AccountCircle,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import NotificationDrawer from "../Notification/Drawer";
import CreatePostModal from "../Post/Modal";
import SearchDrawer from "../Search/SearchDrawer";

// Styled components
const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Sidebar = ({ isBottomNav }) => {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { icon: <Home />, label: "Home", path: "/", mobilepath: "/" },
    {
      icon: <Search />,
      label: "Search",
      action: "show_search",
      mobilepath: "/search",
    },
    { icon: <Explore />, label: "Explore" },
    { icon: <Message />, label: "Messages" },
    {
      icon: <Notifications />,
      label: "Notifications",
      action: "show_notification",
      mobilepath: "/notificatio ns",
    },
    { icon: <AddBox />, label: "Create", action: "create_post" },
    {
      icon: <AccountCircle />,
      label: "Profile",
      path: "/profile",
      mobilepath: "/profile",
    },
  ];

  const handleMenuItemClick = (item) => {
    if (item.action === "show_notification") {
      setIsNotificationOpen(true); // Open notifications panel
    } else if (item.action === "create_post") {
      setIsCreatePostOpen(true); // Open create post modal
    } else if (item.action === "show_search") {
      setIsSearchOpen(true); // Open create search modal
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleCloseNotification = () => {
    setIsNotificationOpen(false);
  };

  if (isBottomNav) {
    return (
      <StyledBottomNavigation showLabels>
        {menuItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            onClick={() => handleMenuItemClick(item)}
          />
        ))}
      </StyledBottomNavigation>
    );
  }

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
      >
        <Box sx={{ py: 3, px: 1 }}>
          <Typography
            variant="h5"
            align="left"
            sx={{
              paddingLeft: 2,
              mb: 4,
              fontFamily: "Grand Hotel, cursive",
            }}
          >
            Vinstagram
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                //button
                onClick={() => handleMenuItemClick(item)}
                sx={{ borderRadius: 1, mb: 2, color: "black" }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit",
                    minWidth: "2.5rem",
                    fontWeight: 300,
                    // fontSize: "3rem",
                  }}
                  className="MuiSvgIcon-root"
                  style={{ fontSize: "2.5rem" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "inherit", fontWeight: 900 }}
                  primary={item.label}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {isNotificationOpen && (
        <NotificationDrawer
          open={isNotificationOpen}
          onClose={handleCloseNotification}
        />
      )}
      {isCreatePostOpen && (
        <CreatePostModal
          open={isCreatePostOpen}
          onClose={() => setIsCreatePostOpen(false)}
        />
      )}

      {isSearchOpen && (
        <SearchDrawer
          open={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
