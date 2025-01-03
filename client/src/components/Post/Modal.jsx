import React from "react";
import { Box, Modal } from "@mui/material";
import PostForm from "./Form";

const PostModal = ({ open, onClose }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

  return (
    <Modal
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose();
        }
      }}
      aria-labelledby="instagram-post-modal"
    >
      <Box sx={modalStyle}>
        <PostForm onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default PostModal;