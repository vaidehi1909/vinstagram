import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  useFollowRequestMutation,
  useGetSuggestionsQuery,
} from "../../../redux/follower/followerApi";
import { useNavigate } from "react-router-dom";

const Suggestions = () => {
  const { data, isLoading, isError, error } = useGetSuggestionsQuery();
  const [sendFollowRequest] = useFollowRequestMutation();
  const navigate = useNavigate();

  const sendFollowRequestHandler = async (followingId) => {
    try {
      const res = await sendFollowRequest(followingId).unwrap();
      if (res.status === 200) {
        console.log(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onItemClicked = (suggestion) => {
    console.log("clicked", suggestion);
    navigate(`/profile/${suggestion._id}`);
  };
  const loadingarray = Array.from({ length: 3 }, (_, index) => index);
  if (isLoading)
    return (
      <>
        <List>
          {loadingarray.map((suggestion, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Button variant="outlined" size="small">
                  Follow
                </Button>
              }
            >
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
              <Skeleton width="50%" style={{ marginLeft: "1rem" }}>
                <Typography>.</Typography>
              </Skeleton>
            </ListItem>
          ))}
        </List>
      </>
    );
  return (
    <List>
      {data.payload.map((suggestion) => (
        <ListItem
          key={suggestion._id}
          sx={{ cursor: "pointer" }}
          secondaryAction={
            <Button
              variant="outlined"
              size="small"
              onClick={() => sendFollowRequestHandler(suggestion._id)}
            >
              Follow
            </Button>
          }
        >
          <ListItemAvatar onClick={() => onItemClicked(suggestion)}>
            <Avatar src={suggestion.profileImage} />
          </ListItemAvatar>
          <ListItemText
            primary={suggestion.userName}
            secondary="Instagram recommended"
            onClick={() => onItemClicked(suggestion)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Suggestions;
