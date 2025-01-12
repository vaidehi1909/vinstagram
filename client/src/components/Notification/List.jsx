import React from "react";

import { Typography, Box, Divider } from "@mui/material";
import NotificationItem from "./Item";
import { useSelector } from "react-redux";
import {
  isThisMonth,
  isThisWeek,
  isToday,
} from "../../../helper/checkDateRange";
const NotificationList = ({ onToggle }) => {
  const { notification } = useSelector((state) => state.notification);

  // Group notifications
  const groupNotifications = (notifications) => {
    const todayNotifications = [];
    const thisWeekNotifications = [];
    const thisMonthNotifications = [];
    const olderNotifications = [];

    notifications.forEach((notification) => {
      const createdAt = new Date(notification.createdAt);

      if (isToday(createdAt)) {
        todayNotifications.push(notification);
      } else if (isThisWeek(createdAt)) {
        thisWeekNotifications.push(notification);
      } else if (isThisMonth(createdAt)) {
        thisMonthNotifications.push(notification);
      } else {
        olderNotifications.push(notification);
      }
    });

    return {
      today: todayNotifications,
      thisWeek: thisWeekNotifications,
      thisMonth: thisMonthNotifications,
      older: olderNotifications,
    };
  };

  const groupedNotifications = groupNotifications(notification);

  const { requestList } = useSelector((state) => state.follower);
  return (
    <>
      <Box sx={{ px: 2, py: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Notifications
        </Typography>
      </Box>

      {requestList?.length > 0 && (
        <Box
          onClick={() => onToggle({ action: "follow_requests", value: true })}
        >
          {/* {notificationItems.slice(0, 2).map((item, index) => ( */}
          <NotificationItem
            key={1}
            item={{
              type: "follow_requests",
              title: "Follow requests",
              subtitle: `${requestList?.[0]?.follower?.userName} ${
                requestList?.length - 1 === 0 ? "" : "and +"
              }  ${
                requestList?.length - 1 === 0 ? "" : requestList?.length - 1
              } requests`,
              avatar: "/api/placeholder/32/32",
              time: "",
            }}
          />
          {/* ))} */}

          <Divider />
        </Box>
      )}

      <Box>
        {groupedNotifications.today.length > 0 && (
          <>
            <Typography
              variant="subtitle1"
              sx={{ px: 2, py: 1, fontWeight: 600 }}
            >
              Today
            </Typography>
            {groupedNotifications.today.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}

            <Divider />
          </>
        )}

        {groupedNotifications.thisWeek.length > 0 && (
          <>
            {" "}
            <Typography
              variant="subtitle1"
              sx={{ px: 2, py: 1, mt: 2, fontWeight: 600 }}
            >
              This week
            </Typography>
            {groupedNotifications.thisWeek.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
            <Divider />
          </>
        )}

        {groupedNotifications.thisMonth.length > 0 && (
          <>
            {" "}
            <Typography
              variant="subtitle1"
              sx={{ px: 2, py: 1, mt: 2, fontWeight: 600 }}
            >
              This week
            </Typography>
            {groupedNotifications.thisMonth.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
            <Divider />
          </>
        )}

        {groupedNotifications.older.length > 0 && (
          <>
            {" "}
            <Typography
              variant="subtitle1"
              sx={{ px: 2, py: 1, mt: 2, fontWeight: 600 }}
            >
              This week
            </Typography>
            {groupedNotifications.older.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
            <Divider />
          </>
        )}
      </Box>
    </>
  );
};

export default NotificationList;
