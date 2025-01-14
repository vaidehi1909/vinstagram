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

const MyEmptyPost = () => {
  return (
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
  );
};

const UserEmptyPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: { xs: "30px", sm: "40px" } }}>
        <svg
          aria-label="Camera"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="62"
          role="img"
          viewBox="0 0 96 96"
          width="62"
        >
          <title>Camera</title>
          <circle
            cx="48"
            cy="48"
            fill="none"
            r="47"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></circle>
          <ellipse
            cx="48.002"
            cy="49.524"
            fill="none"
            rx="10.444"
            ry="10.476"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2.095"
          ></ellipse>
          <path
            d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", sm: "28px" },
          fontWeight: "bold",
          marginBottom: 1,
        }}
      >
        No Posts Yet
      </Typography>
    </Box>
  );
};

const PostTab = ({ userId, isMobile, isCurrentUser }) => {
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
      {isCurrentUser && posts?.payload?.length === 0 && <MyEmptyPost />}
      {!isCurrentUser && posts?.payload?.length === 0 && <UserEmptyPost />}

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
