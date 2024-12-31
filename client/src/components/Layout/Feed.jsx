import React from "react";
import { Grid, Card, Box, Avatar, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";

const Feed = () => {
  const posts = [
    {
      id: 1,
      user: "janhvikapoor",
      userAvatar: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/600",
      caption: "Sunset vibes!",
    },
    {
      id: 2,
      user: "kritisanon",
      userAvatar: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/600",
      caption: "Chill day.",
    },
    {
      id: 3,
      user: "kritisanon",
      userAvatar: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/600",
      caption: "Chill day.",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ padding: { xs: 2, md: 4 } }}>
      {posts.map((post) => (
        <Grid item xs={12} key={post.id}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            {/* Post Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                borderBottom: "1px solid #ddd",
              }}
            >
              <Avatar
                src={post.userAvatar}
                alt={post.user}
                sx={{ width: 40, height: 40, marginRight: 2 }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {post.user}
              </Typography>
            </Box>

            {/* Post Image */}
            <Box sx={{ maxHeight: "500px", overflow: "hidden" }}>
              <img
                src={post.image}
                alt={post.caption}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Box>

            {/* Post Actions */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "8px 16px",
              }}
            >
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Box>

            {/* Caption */}
            <Box sx={{ padding: "0 16px 16px" }}>
              <Typography variant="body1" fontWeight="bold">
                {post.user}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.caption}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
