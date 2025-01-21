import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  AppBar,
  Toolbar,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  useAcceptMutation,
  useRejectMutation,
} from "../../../redux/follower/followerApi";

const FollowRequestItem = ({ user }) => {
  const [requestReject, { isLoading }] = useRejectMutation();
  const [requestAccept] = useAcceptMutation();

  const handleReject = () => {
    requestReject(user?.follower?._id);
  };
  const handleAccept = () => {
    requestAccept({ followerId: user?.follower?._id });
  };
  return (
    <ListItem
      sx={{
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={user?.follower?.profileImage}
        sx={{
          width: 40,
          height: 40,
          border: "2px solid #E8E8E8",
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600 }}
          className="long-word"
        >
          {user?.follower?.userName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "13px" }}
        >
          {user?.follower?.fullName}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#0095F6",
            textTransform: "none",
            px: 2,
            "&:hover": {
              bgcolor: "#1877F2",
            },
          }}
          onClick={handleAccept}
        >
          Confirm
        </Button>
        <Button
          variant="text"
          size="small"
          sx={{
            color: "text.primary",
            bgcolor: "#F0F0F0",
            textTransform: "none",
            px: 2,
            "&:hover": {
              bgcolor: "#E8E8E8",
            },
          }}
          onClick={handleReject}
        >
          Delete
        </Button>
      </Box>
    </ListItem>
  );
};

const FollowRequestList = ({ onClose }) => {
  const { requestList: followRequests } = useSelector(
    (state) => state.follower
  );

  return (
    <Box sx={{ height: "100vh", bgcolor: "background.paper" }}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar>
          <IconButton edge="start" onClick={onClose} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Follow requests
          </Typography>
        </Toolbar>
      </AppBar>

      <List sx={{ pt: 0 }}>
        {followRequests.map((user, index) => (
          <FollowRequestItem key={index} user={user} />
        ))}
      </List>
    </Box>
  );
};

export default FollowRequestList;
