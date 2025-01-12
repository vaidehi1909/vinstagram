import React from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useOptimistic } from "../../hooks/useOptimistic";
import {
  useLikeCommentMutation,
  useUnlikeCommentMutation,
} from "../../../redux/comment/commentApi";

const CommentItem = ({ comment }) => {
  const [isliked, setIsLiked] = useOptimistic(!!comment?.isLiked);
  const [likesCount, setLikesCount] = useOptimistic(comment?.likesCount || 0);
  const [likeComment] = useLikeCommentMutation();
  const [unlikeComment] = useUnlikeCommentMutation();
  const onCommentLikeToggle = () => {
    setIsLiked(
      (prev) => !prev,
      async () => {
        if (isliked) {
          await unlikeComment(comment._id)
            .unwrap()
            .then(() => {
              setLikesCount((prev) => prev - 1);
            });
        } else {
          await likeComment(comment._id)
            .unwrap()
            .then(() => {
              setLikesCount((prev) => prev + 1);
            });
        }
      }
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 2,
      }}
    >
      <Avatar
        src={comment.user.profileImage}
        sx={{ width: 32, height: 32, mr: 1 }}
      />
      <Box sx={{ flex: 1, width: "80%" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          {comment.user.userName}{" "}
          <span style={{ fontWeight: 400 }}>{comment.content}</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.75rem" }}
            >
              {comment.hours}
            </Typography> */}
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.75rem" }}
            >
              {likesCount} likes
            </Typography>
          </Box>
        </Box>
      </Box>
      <IconButton size="small" sx={{ p: 2 }} onClick={onCommentLikeToggle}>
        {isliked ? (
          <FavoriteBorderIcon color="secondary" fontSize="small" />
        ) : (
          <FavoriteBorderIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};

export default CommentItem;
