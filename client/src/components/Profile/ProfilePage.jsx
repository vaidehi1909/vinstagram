import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Divider,
  Tabs,
  Tab,
  Card,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useGetUserPostsQuery } from "../../../redux/post/postApi";

import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: posts, isLoading, error, isFetching } = useGetUserPostsQuery();

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 5 },
        backgroundColor: "#fff",
        color: "#000",
        minHeight: "100vh",
        width: "100%",
        justifyItems: "center",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 3, sm: 10 },
          marginBottom: 3,
          width: "80%",
          borderBottom: "1px solid #e0e0e0",
          paddingX: { xs: 2, sm: 10 },
          paddingY: { xs: 2, sm: 5 },
        }}
      >
        {/* Profile Picture */}
        <Avatar
          sx={{
            width: { xs: 80, sm: 120 },
            height: { xs: 80, sm: 120 },
            margin: { xs: "auto", sm: "0" },
          }}
          src={user.profileImage}
          alt="Profile Picture"
        />

        {/* User Info */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Username and Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "18px", sm: "24px" } }}
            >
              {user.userName}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                fontSize: { xs: "12px", sm: "14px" },
                padding: { xs: "4px 8px", sm: "6px 12px" },
              }}
            >
              Edit Profile
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                fontSize: { xs: "12px", sm: "14px" },
                padding: { xs: "4px 8px", sm: "6px 12px" },
              }}
            >
              View Archive
            </Button>
          </Box>

          {/* Followers and Posts Count */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: { xs: 2, sm: 4 },
              marginTop: 2,
            }}
          >
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              <strong>0</strong> posts
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              <strong>0</strong> followers
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              <strong>2</strong> following
            </Typography>
          </Box>

          {/* Full Name */}
          <Typography
            sx={{
              fontWeight: "bold",
              marginTop: { xs: 1, sm: 2 },
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {user.fullName}
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Tabs Section */}
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
        {/* <Tab
          label="Saved"
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            textTransform: "none",
          }}
        />
        <Tab
          label="Tagged"
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            textTransform: "none",
          }}
        /> */}
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
            <Grid item xs={12} sm={6} md={3} key={post.id}>
              <Card
                sx={{
                  position: "relative",
                  paddingTop: "100%", // 1:1 Aspect ratio
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={post.mainThumbnail}
                  alt="Post"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    opacity: 0,
                    transition: "opacity 0.2s",
                    color: "white",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FavoriteIcon /> {post.likesCount}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ChatBubbleOutlineIcon /> {post.commentCount}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProfilePage;
