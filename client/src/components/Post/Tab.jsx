import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import { useGetUserPostsQuery } from "../../../redux/post/postApi";
import PostItem from "./Item";

const PostTab = ({ userId, isMobile }) => {
  const { data: posts, isLoading, isFetching } = useGetUserPostsQuery(userId);

  if (isLoading || isFetching) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <>
      <Tabs
        value={0}
        centered
        sx={{
          marginTop: 2,
          "& .MuiTabs-indicator": { backgroundColor: "#000" },
        }}
      >
        <Tab
          label="Posts"
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            textTransform: "none",
          }}
        />
      </Tabs>

      {/* Placeholder Content */}
      {posts?.payload?.length === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#ddd",
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              marginBottom: 2,
            }}
          >
            <Typography sx={{ fontSize: { xs: "30px", sm: "40px" } }}>
              📸
            </Typography>
          </Avatar>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            Share Photos
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            When you share photos, they will appear on your profile.
          </Typography>
          <Button
            variant="text"
            sx={{
              marginTop: 2,
              textTransform: "none",
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            Share your first photo
          </Button>
        </Box>
      )}

      {posts?.payload?.length > 0 && (
        <Grid container spacing={1} sx={{ padding: 3 }}>
          {posts.payload.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default PostTab;
