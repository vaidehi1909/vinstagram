import React from "react";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";
import FollowingButton from "./FollowingButton";

const buttonProps = {
  variant: "outlined",
  size: "small",
  sx: {
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
  },
};

const ActionButton = (props) => {
  const { actionName, ...restProps } = props;
  return (
    <Button {...buttonProps} {...restProps}>
      {actionName}
    </Button>
  );
};

export const MyUserAction = (props) => {
  const { user, modalType } = props;
  const onRemove = () => {
    props.onRemove(user._id);
  };

  if (modalType === "followers")
    return <ActionButton actionName="Remove" onClick={onRemove} />;
  return <FollowingButton user={user} buttonProps={buttonProps} />;
};

export const UserAction = (props) => {
  const { user, currentUserId } = props;
  const onFollow = () => {
    props.onFollow(user._id);
  };
  if (user._id === currentUserId) return null; // dont show action for current user
  if (user.isFollowing)
    return <FollowingButton user={user} buttonProps={buttonProps} />;
  return <ActionButton actionName="Follow" onClick={onFollow} />;
};

const FollowerItem = (props) => {
  const { children, ...parentProps } = props;
  const { user } = parentProps;
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
      {React.Children.map(children, (child) =>
        React.cloneElement(child, parentProps)
      )}
    </ListItem>
  );
};

export default FollowerItem;
