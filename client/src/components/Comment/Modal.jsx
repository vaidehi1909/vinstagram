import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Avatar,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  useGetPostDetailsQuery,
  useGetPostCommentsQuery,
} from "../../../redux/post/postApi";
import PostDetails from "../Post/PostDetails";
import CommentLayout from "./Layout";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: postData } = useGetPostDetailsQuery(post._id);
  const { data: commentsData, ...commentsQuery } = useGetPostCommentsQuery(
    post._id
  );

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
          <PostDetails post={postData?.payload} isMobile={isMobile} />

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
              <Avatar src={postData?.payload?.user?.profileImage} />
              <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600 }}>
                {postData?.payload?.user?.userName}
              </Typography>
              <IconButton onClick={onClose} sx={{ ml: "auto" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Comments */}
            {commentsQuery.isLoading ? (
              <Typography>Loading comments...</Typography>
            ) : (
              <CommentLayout
                post={post}
                comments={commentsData?.payload}
                refetch={commentsQuery.refetch}
              />
            )}
          </Box>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default CommentModal;
