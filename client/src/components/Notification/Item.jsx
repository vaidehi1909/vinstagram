//old side bar

import React from "react";

import { ListItem, Typography, Avatar, Button, Box } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const NotificationItem = ({ item }) => {
  const isLikeNotification = item.type === "like";

  if (item.type === "request" && item.request?.status === "rejected") return;

  return (
    <ListItem
      sx={{
        py: 1,
        px: 2,
        "&:hover": { bgcolor: "action.hover" },
      }}
    >
      <Avatar
        src={item.avatar}
        alt={item?.actor?.userName}
        sx={{ width: 40, height: 40 }}
      >
        {item?.actor?.userName[0]}
      </Avatar>

      {item.type === "request" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item?.actor?.userName}
              </Box>{" "}
              requested to follow you
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.createdAt}
            </Typography>
          </Box>
          {item.request?.status === "requested" && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "none", bgcolor: "#0095F6" }}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: "none" }}
              >
                Delete
              </Button>
            </Box>
          )}

          {item.request?.status === "accepted" && (
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none", marginLeft: 2 }}
            >
              Following
            </Button>
          )}
        </>
      )}

      {item.type === "follow" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item?.actor?.userName}
              </Box>{" "}
              started following you
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.createdAt}
            </Typography>
          </Box>
        </>
      )}

      {item.type === "follow_requests" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item.title}
              </Box>{" "}
              {item.subtitle}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.time}
            </Typography>
          </Box>
          {item.type === "follow_requests" && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#0095F6",
                }}
              />
              <ChevronRight color="action" />
            </Box>
          )}
        </>
      )}

      {item.type === "like" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item.actor?.userName}
              </Box>{" "}
              {`liked your ${
                item.post._id ? "post" : item.story._id ? "story" : "comment"
              }`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.time}
            </Typography>
          </Box>
          <Box
            component="img"
            src={item.postImage}
            alt="Post thumbnail"
            sx={{
              width: 44,
              height: 44,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </>
      )}

      {item.type === "comment" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item.actor?.userName}
              </Box>{" "}
              {`commented on your post`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.time}
            </Typography>
          </Box>

          <Box
            component="img"
            src={item.postImage}
            alt="Post thumbnail"
            sx={{
              width: 44,
              height: 44,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </>
      )}

      {item.type === "reply" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item.actor?.userName}
              </Box>{" "}
              {`replied to your comment`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.time}
            </Typography>
          </Box>

          <Box
            component="img"
            src={item.postImage}
            alt="Post thumbnail"
            sx={{
              width: 44,
              height: 44,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </>
      )}

      {item.type === "mention" && (
        <>
          <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600 }}
                className="long-word"
              >
                {item.actor?.userName}
              </Box>{" "}
              {` mentioned you in a ${
                item.post._id ? "post" : item.story._id ? "story" : "comment"
              }`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.time}
            </Typography>
          </Box>

          <Box
            component="img"
            src={item.postImage}
            alt="Post thumbnail"
            sx={{
              width: 44,
              height: 44,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </>
      )}

      {/* <Box sx={{ ml: 2, flex: 1, gap: 2 }}>
        <Typography variant="body2">
          <Box component="span" sx={{ fontWeight: 600 }} className="long-word">
            {item.title}
          </Box>{" "}
          {item.subtitle}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {item.time}
        </Typography>
      </Box>

      {item.type === "follow_requests" && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#0095F6",
            }}
          />
          <ChevronRight color="action" />
        </Box>
      )}

      {item.actions?.includes("Confirm") && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#0095F6" }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Delete
          </Button>
        </Box>
      )}

      {item.actions?.includes("Following") && (
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: "none", marginLeft: 2 }}
        >
          Following
        </Button>
      )}

      {isLikeNotification && item.postImage && (
        <Box
          component="img"
          src={item.postImage}
          alt="Post thumbnail"
          sx={{
            width: 44,
            height: 44,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
      )} */}
    </ListItem>
  );
};

export default NotificationItem;
