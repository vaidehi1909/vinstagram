import React, { useState } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const PostDetails = ({ post, isMobile }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
        height: isMobile ? "50%" : "100%",
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Skeleton Placeholder */}
      {(!isLoaded || !post) && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "grey.800",
          }}
        />
      )}

      {/* Image */}
      <img
        src={post?.media?.[0]?.url}
        alt={post?.caption || "Image"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: isLoaded ? "block" : "none",
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // Handle error by removing the skeleton
      />
    </Box>
  );
};

export default PostDetails;
