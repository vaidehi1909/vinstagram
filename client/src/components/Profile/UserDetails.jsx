import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FollowModal from "./FollowModal";

const UserDetails = ({ user }) => {
  const [followModalOpen, setFollowModalOpen] = useState(false);
  const [followModalType, setFollowModalType] = useState(""); // "followers" or "following"

  const handleOpenModal = (type) => {
    setFollowModalType(type);
    setFollowModalOpen(true);
  };

  const handleCloseModal = () => {
    setFollowModalOpen(false);
    setFollowModalType("");
  };
  return (
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
          width: { xs: 80, sm: 140 },
          height: { xs: 80, sm: 140 },
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
            <strong>{user.postCount ?? 0}</strong> posts
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            onClick={() => handleOpenModal("followers")}
          >
            <strong>{user.followersCount ?? 0}</strong> followers
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            onClick={() => handleOpenModal("following")}
          >
            <strong>{user.followingCount ?? 0}</strong> following
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
      {followModalOpen && (
        <FollowModal
          open={followModalOpen}
          onClose={handleCloseModal}
          modalType={followModalType}
        />
      )}
    </Box>
  );
};

export default UserDetails;
