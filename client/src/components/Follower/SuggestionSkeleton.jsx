import React from "react";
import {
  List,
  ListItem,
  Avatar,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";
const SuggestionSkeleton = ({ size = 3 }) => {
  const loadingarray = Array.from({ length: size }, (_, index) => index);
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
};

export default SuggestionSkeleton;
