import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Box,
  Avatar,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useOptimistic } from "../../hooks/useOptimistic";
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from "../../../redux/post/postApi";

// Custom styled component for heart animation
const AnimatedHeart = styled(Box)`
  @keyframes scaleHeart {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3);
    }
    15% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.2);
    }
    30% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(0.95);
    }
    45%,
    80% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px; // Base container size
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleHeart 2s ease-out forwards;
  z-index: 10;

  // Make the heart icon fill most of the container
  & .MuiSvgIcon-root {
    width: 90%;
    height: 90%;
    color: white;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  }
`;

const CarouselButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`;

const FeedItem = ({ post }) => {
  const [likes, updateLikes] = useOptimistic(post.likesCount);
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likePostApi] = useLikePostMutation();
  const [unlikePostApi] = useUnlikePostMutation();

  const handleLike = async () => {
    try {
      setIsLiked(!isLiked);
      setShowHeartAnimation(true);
      setTimeout(() => {
        setShowHeartAnimation(false);
      }, 2000);
      await updateLikes(
        (currentLikes) => currentLikes + 1 * (isLiked ? -1 : 1),
        async () => {
          if (!isLiked) await likePostApi(post._id).unwrap();
          else await unlikePostApi(post._id).unwrap();
        }
      );
    } catch (error) {
      console.error("Failed to update post:", error);
      setIsLiked(isLiked);
    }
  };

  //   useEffect(() => {
  //     setIsLiked(post?.likes?.includes(post?.user?._id));
  //   }, [post?.likes, post?.user?._id]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === post?.media?.length ? 1 : prevSlide + 1
    );
  };

  return (
    <Grid item xs={12} key={post._id}>
      <Card
        sx={{
          borderRadius: 0,
          boxShadow: 0,
          border: "1px solid #dbdbdb",
        }}
      >
        {/* Post Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2,
            // borderBottom: "1px solid #dbdbdb",
          }}
        >
          <Avatar
            src={post?.user?.profileImage}
            alt={post?.user?.userName || "User"}
            sx={{ width: 32, height: 32, marginRight: 1 }}
          />
          <Typography variant="subtitle2" fontWeight="600">
            {post?.user?.userName}
          </Typography>
        </Box>

        {/* Post Image with Heart Animation and Carousel */}
        <Box
          sx={{
            position: "relative",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            overflow: "hidden",
          }}
          onDoubleClick={() => handleLike()}
        >
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.3s ease",
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {post.media.map((media, index) => (
              <img
                key={index}
                src={media.url}
                alt={`${post.caption} ${index + 1}`}
                style={{
                  width: "100%",
                  flexShrink: 0,
                  display: "block",
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>

          {isLiked && showHeartAnimation && (
            <AnimatedHeart>
              <FavoriteIcon style={{ fontSize: "90%" }} />{" "}
              {/* Use percentage for better scaling */}
            </AnimatedHeart>
          )}

          {/* Carousel Navigation */}
          {post.media.length > 1 && (
            <>
              {currentSlide > 0 && (
                <CarouselButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
                  }}
                  sx={{ left: 8 }}
                >
                  <ChevronLeftIcon />
                </CarouselButton>
              )}
              {currentSlide < post.media.length - 1 && (
                <CarouselButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide();
                  }}
                  sx={{ right: 8 }}
                >
                  <ChevronRightIcon />
                </CarouselButton>
              )}
              {/* Carousel Indicators */}
              {/* <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {post.media.map((_, index) => (
                        <CircleIcon
                          key={index}
                          sx={{
                            fontSize: 8,
                            color:
                              index === currentSlide
                                ? "#0095f6"
                                : "#ffffff",
                          }}
                        />
                      ))}
                    </Box> */}
            </>
          )}
        </Box>

        {/* Post Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "6px 12px",
          }}
        >
          <IconButton
            onClick={() => handleLike()}
            sx={{
              padding: "8px",
              marginRight: "6px",
              "& .MuiSvgIcon-root": {
                transition: "color 0.2s ease",
                color: isLiked ? "#ed4956" : "inherit",
              },
            }}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ fontSize: 24 }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: 24 }} />
            )}
          </IconButton>
          <IconButton sx={{ padding: "8px", marginRight: "6px" }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton sx={{ padding: "8px" }}>
            <SendIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        {/* Likes and Caption */}
        <Box sx={{ padding: "0 16px 16px" }}>
          <Typography variant="subtitle2" fontWeight="600" sx={{ mb: 1 }}>
            {likes} likes
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Typography variant="subtitle2" fontWeight="600" sx={{ mr: 1 }}>
              {post?.user?.userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.caption}
            </Typography>
          </Box>
          {post.commentCount > 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, cursor: "pointer" }}
            >
              View all {post.commentCount} comments
            </Typography>
          )}
        </Box>
      </Card>
    </Grid>
  );
};

export default FeedItem;
