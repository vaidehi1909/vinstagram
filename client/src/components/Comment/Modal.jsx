import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Avatar,
  TextField,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useGetPostDetailsQuery } from "../../../redux/post/postApi";
import CommentList from "./List";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "1200px",
    maxHeight: "90vh",
    margin: "16px",
    borderRadius: "8px",
    overflow: "hidden",
  },
}));

const CommentModal = ({ open, onClose, post }) => {
  const [newComment, setNewComment] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, isLoading, isFetching, isError } = useGetPostDetailsQuery(
    post._id
  );

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  const postDetails = { ...post, ...data?.payload };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      aria-labelledby="comment-modal"
      fullScreen={isMobile}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            height: isMobile ? "100%" : "90vh",
          }}
        >
          {/* Left side - Image */}
          <Box
            sx={{
              width: isMobile ? "100%" : "60%",
              height: isMobile ? "50%" : "100%",
              bgcolor: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={postDetails?.media?.[0]?.url}
              alt={postDetails?.caption}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Right side */}
          <Box
            sx={{
              width: isMobile ? "100%" : "40%",
              height: isMobile ? "50%" : "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Avatar src={postDetails?.user?.profileImage} />
              <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600 }}>
                {postDetails?.user?.userName}
              </Typography>
              <IconButton onClick={onClose} sx={{ ml: "auto" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <CommentList postId={postDetails._id} />

            <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <IconButton size="small">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton size="small">
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton size="small">
                  <SendIcon />
                </IconButton>
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {postDetails?.likesCount || 0} likes
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmitComment}
              sx={{ p: 2, borderTop: 1, borderColor: "divider" }}
            >
              <TextField
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default CommentModal;
