import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";

const SuggestionItem = (props) => {
  const { user, onSendFollowRequest } = props;
  const onFollow = () => {
    onSendFollowRequest(user._id);
  };

  const onItemClicked = () => {
    props.onItemClicked(user._id);
  };
  return (
    <ListItem
      key={user._id}
      sx={{ cursor: "pointer" }}
      secondaryAction={
        <Button variant="outlined" size="small" onClick={onFollow}>
          Follow
        </Button>
      }
    >
      <ListItemAvatar onClick={onItemClicked}>
        <Avatar src={user.profileImage} />
      </ListItemAvatar>
      <ListItemText
        primary={user.userName}
        secondary="Vinstagram recommended"
        onClick={onItemClicked}
      />
    </ListItem>
  );
};

export default SuggestionItem;
