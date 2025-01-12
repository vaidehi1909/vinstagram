import React from "react";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../../redux/user/userApi";
import PostTab from "../Post/Tab";
import UserDetails from "./UserDetails";

const UserProfile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { userId } = useParams(); // Extract the 'id' parameter from the URL
  const { data: user, isLoading, isFetching } = useGetUserDetailsQuery(userId);

  if (isLoading || isFetching) {
    return <Typography>Loading...</Typography>;
  }

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
      <UserDetails user={user?.payload} isMobile={isMobile} />

      <Divider />

      {/* Tabs Section */}
      <PostTab userId={userId} isMobile={isMobile} />
    </Box>
  );
};

export default UserProfile;
