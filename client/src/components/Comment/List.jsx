import React from "react";
import { Box, Typography } from "@mui/material";
import CommentItem from "./Item";

const CommentList = ({ comments }) => {
  return (
    <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
      {/* Comments here */}
      {comments?.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </Box>
  );
};

export default CommentList;
