import React, { useState } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import FollowModal from "../Follower/Modal";
import { useFollowRequestMutation } from "../../../redux/follower/followerApi";
import { useDispatch } from "react-redux";
import { addToast } from "../../../redux/toast/toastSlice";

const UserDetails = ({ user, isMobile }) => {
  const [followModalOpen, setFollowModalOpen] = useState(false);
  const [followModalType, setFollowModalType] = useState(""); // "followers" or "following"

  const dispatch = useDispatch();
  const [sendFollowRequest] = useFollowRequestMutation();

  const handleOpenModal = (type) => {
    setFollowModalType(type);
    setFollowModalOpen(true);
  };

  const handleCloseModal = () => {
    setFollowModalOpen(false);
    setFollowModalType("");
  };

  const onUserFollow = () => {
    sendFollowRequest(user._id)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            addToast({
              message: "Follow request sent successfully",
              severity: "success",
            })
          );
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
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
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              variant="outlined"
              size={isMobile ? "small" : "medium"}
              fullWidth={isMobile}
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                backgroundColor: "#f5f5f5",
                borderColor: "#dbdbdb",
                color: "#262626",
                "&:hover": {
                  backgroundColor: "white",
                  borderColor: "#dbdbdb",
                },
                minWidth: { xs: "100%", sm: "120px" },
              }}
              onClick={onUserFollow}
            >
              Follow
            </Button>
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
          userId={user._id}
        />
      )}
    </Box>
  );
};

export default UserDetails;
