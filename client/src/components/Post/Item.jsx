import { Box, Card, CardMedia, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React from "react";
import PostCommentModal from "../Comment/Modal";

const PostItem = ({ post }) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = React.useState(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          onClick={() => setIsCommentModalOpen(true)}
          sx={{
            position: "relative",
            paddingTop: "100%", // 1:1 Aspect ratio
            "&:hover .overlay": {
              opacity: 1,
            },
          }}
        >
          <CardMedia
            component="img"
            image={post.mainThumbnail}
            alt="Post"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              opacity: 0,
              transition: "opacity 0.2s",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FavoriteIcon /> {post.likesCount}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ChatBubbleOutlineIcon /> {post.commentCount}
            </Box>
          </Box>
        </Card>
      </Grid>
      {isCommentModalOpen && (
        <PostCommentModal
          open={isCommentModalOpen} // Correct prop name
          onClose={() => setIsCommentModalOpen(false)}
          post={post}
        />
      )}
    </>
  );
};

export default PostItem;
