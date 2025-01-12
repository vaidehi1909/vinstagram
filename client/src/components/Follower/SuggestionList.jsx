import React, { useCallback } from "react";
import { List } from "@mui/material";
import {
  useGetSuggestionsQuery,
  useFollowRequestMutation,
} from "../../../redux/follower/followerApi";
import SuggestionItem from "./SuggestionItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SuggestionSkeleton from "./SuggestionSkeleton";
import { addToast } from "../../../redux/toast/toastSlice";

const SuggestionsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isFetching } = useGetSuggestionsQuery();
  const [sendFollowRequest] = useFollowRequestMutation();

  const onSendFollowRequest = useCallback((followingId) => {
    sendFollowRequest(followingId)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            addToast({
              message: "Follow request sent successfully",
              severity: "success",
            })
          );
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
  }, []);

  const onItemClicked = useCallback((followingId) => {
    navigate(`/profile/${followingId}`);
  }, []);

  if (isLoading || isFetching) return <SuggestionSkeleton />;

  return (
    <List>
      {data?.payload?.map((suggestion) => (
        <SuggestionItem
          key={suggestion._id}
          user={suggestion}
          onSendFollowRequest={onSendFollowRequest}
          onItemClicked={onItemClicked}
        />
      ))}
    </List>
  );
};

export default SuggestionsList;
