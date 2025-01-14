import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, TextField } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import SendIcon from "@mui/icons-material/Send";
import CommentList from "./List";
import { useOptimistic } from "../../hooks/useOptimistic";
import { useSelector } from "react-redux";
import { useAddCommentMutation } from "../../../redux/comment/commentApi";

const CommentLayout = (props) => {
  const { post, refetch } = props;
  const [comments, setComments] = useOptimistic(props.comments || []);
  const [newComment, setNewComment] = useState("");
  const [addComment, result] = useAddCommentMutation();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    if (props.comments?.[0]?._id !== comments?.[0]?._id) {
      setComments(() => props.comments);
    }
  }, [props.comments]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    try {
      const payload = { postId: post._id, content: newComment };
      await setComments(
        (cmnts) =>
          [
            {
              _id: Math.random().toString(36).substr(2, 9),
              post: post._id,
              likesCount: 0,
              user,
              createdAt: new Date().toISOString(),
              ...payload,
            },
          ].concat(cmnts),
        async () => {
          await addComment(payload)
            .unwrap()
            .then(() => setNewComment(""));
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      refetch(); // Refetch comments
    }
  };

  return (
    <>
      <CommentList comments={comments} />
      <Box
        component="form"
        // onSubmit={handleSubmitComment}
        sx={{ p: 2, borderTop: 1, borderColor: "divider" }}
      >
        <TextField
          fullWidth
          value={newComment}
          disabled={result?.isLoading}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmitComment(e)}
          placeholder="Add a comment..."
          variant="standard"
          sx={{
            "& .MuiInput-underline:before": { borderBottom: "none" },
          }}
        />
      </Box>
    </>
  );
};

export default CommentLayout;
