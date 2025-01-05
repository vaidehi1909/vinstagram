import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const FollowModal = ({ open, onClose, modalType = "following" }) => {
  const [search, setSearch] = useState("");

  const mockData = [
    {
      id: 1,
      username: "__.nidhee.__",
      name: "Nidhi 🌱🐼🍍",
      avatar: "/path/to/avatar1.jpg",
    },
    {
      id: 2,
      username: "pratik.palandurkar",
      name: "Pratik Palandurkar 🎭",
      avatar: "/path/to/avatar2.jpg",
    },
    {
      id: 3,
      username: "yashraj_270",
      name: "Yash Nishish Shah",
      avatar: "/path/to/avatar3.jpg",
    },
    {
      id: 4,
      username: "prachi_bhargav_modi",
      name: "ADV. PRACHI MODI 👨‍⚖️ ☺",
      avatar: "/path/to/avatar4.jpg",
    },
    {
      id: 5,
      username: "shayu_mangroliya",
      name: "Shayan Mangroliya",
      avatar: "/path/to/avatar5.jpg",
    },
  ];

  const filteredData = mockData.filter(
    (item) =>
      item.username.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          m: { xs: 0, sm: 2 },
          width: { xs: "100%", sm: "400px" },
          height: { xs: "100%", sm: "auto" },
          maxHeight: { xs: "100%", sm: "600px" },
          borderRadius: { xs: 0, sm: 1 },
          position: "relative",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #eee",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
        </Typography>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Search Bar */}
      <Box sx={{ px: 2, py: 1 }}>
        <TextField
          fullWidth
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
              "& fieldset": { border: "none" },
            },
          }}
        />
      </Box>

      {/* User List */}
      <DialogContent sx={{ p: 0, "&::-webkit-scrollbar": { display: "none" } }}>
        <List sx={{ px: 2 }}>
          {filteredData.map((user) => (
            <ListItem
              key={user.id}
              sx={{
                px: 0,
                py: 1,
                // borderBottom: "1px solid #f5f5f5",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={user.avatar}
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid #eee",
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {user.username}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "13px",
                    }}
                  >
                    {user.name}
                  </Typography>
                }
                sx={{ mr: 2 }}
              />
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  px: 2,
                  backgroundColor: "#f5f5f5",
                  borderColor: "#dbdbdb",

                  color: "#262626",
                  "&:hover": {
                    backgroundColor: "white",
                    borderColor: "#dbdbdb",
                  },
                }}
              >
                {modalType === "followers" ? "Remove" : "Following"}
              </Button>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default FollowModal;
