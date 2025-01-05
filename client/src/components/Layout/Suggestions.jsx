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

const Suggestions = () => {
  const { data, isLoading, isError, error } = useGetSuggestionsQuery();
  const [sendFollowRequest] = useFollowRequestMutation();

  const sendFollowRequestHandler = async (followingId) => {
    try {
      const res = await sendFollowRequest({ followingId }).unwrap();
      if (res.status === 200) {
        console.log(res.message);
      }
    } catch (error) {
      console.error(error);
    }
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
          <ListItemAvatar>
            <Avatar src={suggestion.profileImage} />
          </ListItemAvatar>
          <ListItemText
            primary={suggestion.userName}
            secondary="Instagram recommended"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Suggestions;
