import React, { useCallback } from "react";
import { Typography, List, Box } from "@mui/material";
import {
  useListQuery,
  useFollowRequestMutation,
  useRejectMutation,
  useUnfollowMutation,
} from "../../../redux/follower/followerApi";
import FollowerItem, { UserAction, MyUserAction } from "./Item";
import { addToast } from "../../../redux/toast/toastSlice";
import { useDispatch, useSelector } from "react-redux";

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
const FollowersList = ({ userId, modalType, isCurrentUser }) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth?.user?._id);
  const { data, isLoading, isFetching, isError } = useListQuery({
    userId,
    type: modalType,
  });
  const [removeFollower] = useRejectMutation();
  const [unfollow] = useUnfollowMutation();
  const [followRequest] = useFollowRequestMutation();

  const onRemove = useCallback((followerId) => {
    removeFollower(followerId)
      .unwrap()
      .catch((error) => {
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
  }, []);

  const onUnFollow = useCallback((followingId) => {
    unfollow(followingId)
      .unwrap()
      .catch((error) => {
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
  }, []);

  const onFollow = useCallback((userId) => {
    followRequest(userId)
      .unwrap()
      .catch((error) => {
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
  }, []);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (data?.payload?.length === 0) return <EmptyList />;
  if (isCurrentUser) {
    return (
      <List sx={{ px: 2 }}>
        {data?.payload?.map((user) => (
          <FollowerItem key={user._id} user={user} modalType={modalType}>
            <MyUserAction onUnfollow={onUnFollow} onRemove={onRemove} />
          </FollowerItem>
        ))}
      </List>
    );
  }
  return (
    <List sx={{ px: 2 }}>
      {data?.payload?.map((user) => (
        <FollowerItem key={user._id} user={user} modalType={modalType}>
          <UserAction
            currentUserId={currentUserId}
            onFollow={onFollow}
            onUnfollow={onUnFollow}
          />
        </FollowerItem>
      ))}
    </List>
  );
};

export default FollowersList;
