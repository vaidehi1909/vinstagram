import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const StoryBar = () => {
  const stories = [
    { name: "kritisanon", img: "https://via.placeholder.com/50" },
    { name: "janvhi", img: "https://via.placeholder.com/50" },
    { name: "john", img: "https://via.placeholder.com/50" },
    { name: "mike", img: "https://via.placeholder.com/50" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        paddingBottom: 1,
        // borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
      }}
    >
      {stories.map((story, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Avatar
            src={story.img}
            sx={{
              width: 56,
              height: 56,
              border: "2px solid #e91e63",
            }}
          />
          <Typography
            variant="caption"
            sx={{ marginTop: 1, textAlign: "center" }}
          >
            {story.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StoryBar;
