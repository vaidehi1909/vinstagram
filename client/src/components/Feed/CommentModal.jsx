import React, { useState } from "react";
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

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  const comments = post?.comments || [
    {
      user: {
        userName: "_rushii_56",
        profileImage: "https://via.placeholder.com/32",
      },
      text: "Itne me gaan fat gaya 😂",
      likes: 2,
      hours: "2h",
    },
    {
      user: {
        userName: "its_vishal_023",
        profileImage: "https://via.placeholder.com/32",
      },
      text: "Ek pune Infosys me bhi bhejdo..humko bhi wfh chahiye 😂",
      likes: 5,
      hours: "3h",
    },
    {
      user: {
        userName: "rupp_the_rookie",
        profileImage: "https://via.placeholder.com/32",
      },
      text: "Happy new year bolne aya hga",
      likes: 1,
      hours: "4h",
    },
    {
      user: {
        userName: "t.h.e.s.a.u.r.a.b.h",
        profileImage: "https://via.placeholder.com/32",
      },
      text: "Next time backbenchers will be seen wearing leopard costumes at night",
      likes: 3,
      hours: "5h",
    },
    {
      user: {
        userName: "suhasshidore8",
        profileImage: "https://via.placeholder.com/32",
      },
      text: "@ritu_chaudhari_97 Ai replace humans ❌ Animal replace humans ✅",
      likes: 0,
      hours: "6h",
    },
  ];

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
              src={post?.media?.[0]?.url}
              alt={post?.caption}
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
              <Avatar src={post?.user?.profileImage} />
              <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600 }}>
                {post?.user?.userName}
              </Typography>
              <IconButton onClick={onClose} sx={{ ml: "auto" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
              {/* Comments here */}
              {comments.map((comment, index) => (
                <Box
                  key={index}
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
                      <span style={{ fontWeight: 400 }}>{comment.text}</span>
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 0.5,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                        >
                          {comment.hours}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                        >
                          {comment.likes} likes
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton size="small" sx={{ p: 2 }}>
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>

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
                {post?.likesCount || 0} likes
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
