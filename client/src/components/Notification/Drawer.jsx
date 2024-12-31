import React, { useEffect, useState } from "react";

import { Dialog, DialogContent } from "@mui/material";
import NotificationList from "./List";
import FollowRequestList from "./FollowRequestList";
import { useGetRequestListQuery } from "../../../redux/follower/followerApi";
import {
  useGetNotificationQuery,
  useMarkAsReadMutation,
} from "../../../redux/notification/notificationApi";

const NotificationDrawer = (props) => {
  const [isFollowRequestOpen, setIsFollowRequestOpen] = useState(false);
  const [markAsRead] = useMarkAsReadMutation();
  useEffect(() => {
    markAsRead();
  }, []);
  const {
    data: requestList,
    isLoading,
    isError,
    error,
  } = useGetRequestListQuery();

  const {
    data: notificationList,
    isLoading: isNotificationLoading,
    isError: isNotificationError,
    error: notificationError,
  } = useGetNotificationQuery();

  const onToggle = (item) => {
    if (item.action === "follow_requests") {
      setIsFollowRequestOpen(!!item.value);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          width: 400,
          // maxWidth: "100%",
          m: 0,
          position: "fixed",
          right: 0,
          height: "100%",
          borderRadius: 0,
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {isFollowRequestOpen ? (
          <FollowRequestList
            onClose={() =>
              onToggle({ action: "follow_requests", value: false })
            }
          />
        ) : (
          <NotificationList onToggle={onToggle} />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default NotificationDrawer;
