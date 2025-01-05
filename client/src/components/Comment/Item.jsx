import React from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CommentItem = ({ comment }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 2,
      }}
    >
      <Avatar
        src={comment.user.profileImage}
        sx={{ width: 32, height: 32, mr: 1 }}
      />
      <Box sx={{ flex: 1, width: "80%" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          {comment.user.userName}{" "}
          <span style={{ fontWeight: 400 }}>{comment.text}</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.75rem" }}
            >
              {comment.hours}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.75rem" }}
            >
              {comment.likes} likes
            </Typography>
          </Box>
        </Box>
      </Box>
      <IconButton size="small" sx={{ p: 2 }}>
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CommentItem;
