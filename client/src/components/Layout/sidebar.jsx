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
  useMediaQuery,
  useTheme,
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
  left: 0,
  width: "100%",
  borderTop: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 1,
  "& .Mui-selected": {
    "& .MuiBottomNavigationAction-label": {
      fontWeight: 700,
      fontSize: "0.75rem",
      color: "black",
    },
    "& .MuiSvgIcon-root": {
      color: "black",
    },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    borderRight: `1px solid ${theme.palette.divider}`,
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { icon: <Home />, label: "Home", path: "/" },
    { icon: <Search />, label: "Search", action: "show_search" },
    // { icon: <Explore />, label: "Explore", path: "/explore" },
    // { icon: <Message />, label: "Messages", path: "/messages" },
    {
      icon: <Notifications />,
      label: "Notifications",
      action: "show_notification",
    },
    { icon: <AddBox />, label: "Create", action: "create_post" },
    { icon: <AccountCircle />, label: "Profile", path: "/profile" },
  ];

  const handleMenuItemClick = (item, index) => {
    setSelectedIndex(index);

    if (item.action === "show_notification") {
      setIsNotificationOpen(true);
    } else if (item.action === "create_post") {
      setIsCreatePostOpen(true);
    } else if (item.action === "show_search") {
      setIsSearchOpen(true);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleDrawerClose = () => {
    setIsNotificationOpen(false);
    setIsSearchOpen(false);
  };

  const renderDrawerContent = () => (
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
            onClick={() => handleMenuItemClick(item, index)}
            sx={{
              borderRadius: 1,
              mb: 2,
              color: selectedIndex === index ? "black" : "gray",
              backgroundColor:
                selectedIndex === index ? "rgba(0, 0, 0, 0.04)" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: "2.5rem",
                fontWeight: selectedIndex === index ? 700 : 300,
              }}
              style={{ fontSize: "2.5rem" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "inherit",
                "& .MuiTypography-root": {
                  fontWeight: selectedIndex === index ? 700 : 400,
                },
              }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <StyledDrawer variant="permanent">{renderDrawerContent()}</StyledDrawer>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <StyledBottomNavigation
          value={selectedIndex}
          onChange={(_, newValue) => {
            handleMenuItemClick(menuItems[newValue], newValue);
          }}
          showLabels
        >
          {menuItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </StyledBottomNavigation>
      )}

      {/* Modals and Drawers */}
      <NotificationDrawer
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
      <CreatePostModal
        open={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
      <SearchDrawer
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Sidebar;