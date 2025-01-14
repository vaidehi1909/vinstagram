import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Divider,
  useMediaQuery,
  useTheme,
  Skeleton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import FollowModal from "../Follower/Modal";
import { useNavigate } from "react-router-dom";
import PostTab from "../Post/Tab";
import { logOut } from "../../../redux/auth/authSlice";

// const ProfileSkeleton = () => {
//   return (
//     <Box
//       sx={{
//         padding: { xs: 2, sm: 5 },
//         backgroundColor: "#fff",
//         color: "#000",
//         minHeight: "100vh",
//         width: "100%",
//         justifyItems: "center",
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: { xs: 3, sm: 10 },
//           marginBottom: 3,
//           width: "80%",
//           borderBottom: "1px solid #e0e0e0",
//           paddingX: { xs: 2, sm: 10 },
//           paddingY: { xs: 2, sm: 5 },
//         }}
//       >
//         {/* Profile Picture Skeleton */}
//         <Skeleton
//           variant="circular"
//           sx={{
//             width: { xs: 80, sm: 140 },
//             height: { xs: 80, sm: 140 },
//             margin: { xs: "auto", sm: "0" },
//           }}
//         />

//         {/* User Info Skeleton */}
//         <Box sx={{ flexGrow: 1 }}>
//           {/* Username and Buttons */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: { xs: "center", sm: "flex-start" },
//               flexDirection: { xs: "column", sm: "row" },
//               gap: 4,
//             }}
//           >
//             {/* Username */}
//             <Skeleton width={150} height={32} />

//             {/* Buttons */}
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Skeleton width={100} height={36} />
//               <Skeleton width={100} height={36} />
//             </Box>
//           </Box>

//           {/* Followers and Posts Count */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: { xs: "center", sm: "flex-start" },
//               gap: { xs: 2, sm: 4 },
//               marginTop: 2,
//             }}
//           >
//             <Skeleton width={80} height={24} />
//             <Skeleton width={100} height={24} />
//             <Skeleton width={90} height={24} />
//           </Box>

//           {/* Full Name */}
//           <Skeleton
//             width={150}
//             height={24}
//             sx={{
//               marginTop: { xs: 1, sm: 2 },
//             }}
//           />
//         </Box>
//       </Box>

//       <Divider />

//       {/* Tabs Section Skeleton */}
//       <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
//         <Skeleton width={100} height={48} />
//       </Box>

//       {/* Posts Grid Skeleton */}
//       <Grid container spacing={1} sx={{ padding: 3 }}>
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item}>
//             <Skeleton
//               variant="rectangular"
//               sx={{
//                 width: "100%",
//                 paddingTop: "100%", // Creates a square aspect ratio
//                 borderRadius: 1,
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate({ relative: false });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [followModalOpen, setFollowModalOpen] = useState(false);
  const [followModalType, setFollowModalType] = useState("");

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Opens the follow modal with the given type (following or followers)
   * @param {string} type - The type of the follow modal (following or followers)
   */
  /******  ed0ebfec-290f-425a-8916-6127ee65d414  *******/
  const handleOpenModal = (type) => {
    setFollowModalType(type);
    setFollowModalOpen(true);
  };

  const handleCloseModal = () => {
    setFollowModalOpen(false);
    setFollowModalType("");
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  // if (isLoading || isFetching) {
  //   return <ProfileSkeleton />;
  // }

  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2, md: 5 },
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
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: { xs: "center", sm: "space-between" },
          gap: { xs: 2, sm: 4, md: 10 },
          marginBottom: 3,
          width: { xs: "100%", sm: "90%", md: "80%" },
          borderBottom: "1px solid #e0e0e0",
          paddingX: { xs: 1, sm: 4, md: 10 },
          paddingY: { xs: 2, sm: 3, md: 5 },
          mx: "auto",
        }}
      >
        {/* Profile Picture */}
        <Avatar
          sx={{
            width: { xs: 80, sm: 120, md: 140 },
            height: { xs: 80, sm: 120, md: 140 },
            margin: { xs: "auto", sm: "0" },
          }}
          src={user.profileImage}
          alt="Profile Picture"
        />

        {/* User Info */}
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {/* Username and Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 4 },
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                marginBottom: { xs: 1, sm: 0 },
              }}
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
                onClick={() => navigate("/profile/edit")}
              >
                Edit Profile
              </Button>

              <Button
                variant="outlined"
                size={isMobile ? "small" : "medium"}
                fullWidth={isMobile}
                onClick={handleLogout}
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
              >
                Logout
              </Button>
            </Box>
          </Box>

          {/* Followers and Posts Count */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: { xs: 3, sm: 4 },
              marginTop: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <strong>{user.postCount ?? 0}</strong> posts
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                cursor: "pointer",
                textAlign: { xs: "center", sm: "left" },
              }}
              onClick={() => handleOpenModal("followers")}
            >
              <strong>{user.followersCount ?? 0}</strong> followers
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                cursor: "pointer",
                textAlign: { xs: "center", sm: "left" },
              }}
              onClick={() => handleOpenModal("following")}
            >
              <strong>{user.followingCount ?? 0}</strong> following
            </Typography>
          </Box>

          {/* Full Name */}
          <Typography
            sx={{
              fontWeight: "bold",
              marginTop: { xs: 2, sm: 3 },
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              textAlign: { xs: "center", sm: "left" },
              width: "100%",
            }}
          >
            {user.fullName}
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Tabs Section */}
      <PostTab userId={user._id} isMobile={isMobile} isCurrentUser={true} />

      {followModalOpen && (
        <FollowModal
          open={followModalOpen}
          onClose={handleCloseModal}
          modalType={followModalType}
          isCurrentUser={true}
          // userId={user._id}
        />
      )}
    </Box>
  );
};

export default MyProfile;
