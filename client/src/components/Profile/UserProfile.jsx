import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../../redux/user/userApi";
import PostTab from "./PostTab";
import UserDetails from "./UserDetails";

const UserProfile = () => {
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
      <UserDetails user={user?.payload} />

      <Divider />

      {/* Tabs Section */}
      <PostTab userId={userId} />
    </Box>
  );
};

export default UserProfile;
