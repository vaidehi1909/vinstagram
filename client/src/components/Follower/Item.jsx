import React from "react";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";

const FollowerItem = (props) => {
  const { user, modalType } = props;
  const onUnfollow = () => {
    props.onUnFollow(user._id);
  };
  return (
    <ListItem
      key={user._id}
      sx={{
        px: 0,
        py: 1,
        // borderBottom: "1px solid #f5f5f5",
      }}
    >
      <ListItemAvatar>
        <Avatar
          src={user.profileImage}
          sx={{
            width: 44,
            height: 44,
            border: "1px solid #eee",
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {user.userName}
          </Typography>
        }
        secondary={
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "13px",
            }}
          >
            {user.fullName}
          </Typography>
        }
        sx={{ mr: 2 }}
      />
      {user.status === "accepted" ? (
        <Button
          variant="outlined"
          size="small"
          disabled={modalType !== "followers"}
          onClick={onUnfollow}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 2,
            backgroundColor: "#f5f5f5",
            borderColor: "#dbdbdb",

            color: "#262626",
            "&:hover": {
              backgroundColor: "white",
              borderColor: "#dbdbdb",
            },
          }}
        >
          {modalType === "followers" ? "Remove" : "Following"}
        </Button>
      ) : (
        <p>Requested</p>
      )}
    </ListItem>
  );
};

export default FollowerItem;
