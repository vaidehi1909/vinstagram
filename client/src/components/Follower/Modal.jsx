import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FollowersList from "./List";

const FollowModal = ({
  open,
  onClose,
  modalType = "following",
  userId,
  isCurrentUser,
}) => {
  const [search, setSearch] = useState("");

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
        <FollowersList
          userId={userId}
          modalType={modalType}
          isCurrentUser={isCurrentUser}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FollowModal;
