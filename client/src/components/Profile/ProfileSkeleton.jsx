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
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ProfileSkeleton = () => {
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
        {/* Profile Picture Skeleton */}
        <Skeleton
          variant="circular"
          sx={{
            width: { xs: 80, sm: 140 },
            height: { xs: 80, sm: 140 },
            margin: { xs: "auto", sm: "0" },
          }}
        />

        {/* User Info Skeleton */}
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
            {/* Username */}
            <Skeleton width={150} height={32} />

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Skeleton width={100} height={36} />
              <Skeleton width={100} height={36} />
            </Box>
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
            <Skeleton width={80} height={24} />
            <Skeleton width={100} height={24} />
            <Skeleton width={90} height={24} />
          </Box>

          {/* Full Name */}
          <Skeleton
            width={150}
            height={24}
            sx={{
              marginTop: { xs: 1, sm: 2 },
            }}
          />
        </Box>
      </Box>

      <Divider />

      {/* Tabs Section Skeleton */}
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <Skeleton width={100} height={48} />
      </Box>

      {/* Posts Grid Skeleton */}
      <Grid container spacing={1} sx={{ padding: 3 }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Skeleton
              variant="rectangular"
              sx={{
                width: "100%",
                paddingTop: "100%", // Creates a square aspect ratio
                borderRadius: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfileSkeleton;
