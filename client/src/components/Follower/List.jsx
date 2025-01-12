import React, { useCallback } from "react";
import { Typography, List, Box } from "@mui/material";
import {
  useListQuery,
  useRejectMutation,
} from "../../../redux/follower/followerApi";
import FollowerItem from "./Item";

const EmptyList = () => {
  return (
    <Box
      sx={{
        minHeight: "200px", // Set minimum height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #ccc", // Optional: for visual clarity
        borderRadius: "8px", // Optional: rounded corners
        padding: "16px", // Optional: padding inside the box
      }}
    >
      <Typography variant="body1" color="textSecondary" align="center">
        No data available.
      </Typography>
    </Box>
  );
};
const FollowersList = ({ userId, modalType }) => {
  const { data, isLoading, isFetching, isError } = useListQuery({
    userId,
    type: modalType,
  });
  const [unFollow] = useRejectMutation();

  const onUnFollow = useCallback((followingId) => {
    unFollow(followingId)
      .unwrap()
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (data?.payload?.length === 0) return <EmptyList />;
  return (
    <List sx={{ px: 2 }}>
      {data?.payload?.map((user) => (
        <FollowerItem
          key={user._id}
          user={user}
          modalType={modalType}
          onUnFollow={onUnFollow}
        />
      ))}
    </List>
  );
};

export default FollowersList;
