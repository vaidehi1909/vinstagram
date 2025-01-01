import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
  Avatar,
} from "@mui/material";
import {
  Add,
  Delete,
  Close,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { useCreatPostMutation } from "../../../redux/post/postApi";

const PostForm = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const [previewUrls, setPreviewUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [creatPost, { isLoading }] = useCreatPostMutation();

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);

    // Filter for images and videos only
    const mediaFiles = files.filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );

    setSelectedFiles((prevFiles) => [...prevFiles, ...mediaFiles]);

    // Create preview URLs for the new files
    const newPreviewUrls = mediaFiles.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
      name: file.name,
    }));

    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => {
      // Revoke the URL to prevent memory leaks
      URL.revokeObjectURL(prevUrls[index].url);
      return prevUrls.filter((_, i) => i !== index);
    });
    if (currentIndex >= previewUrls.length - 1) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const onShare = async () => {
    if (selectedFiles.length === 0) return;

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append("files", file);
    });
    formData.append("caption", caption);

    try {
      const response = await creatPost(formData).unwrap();
      if (response?.status === 200) {
        // Clean up preview URLs
        previewUrls.forEach((preview) => URL.revokeObjectURL(preview.url));
        if (onClose) onClose();
      }
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % previewUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + previewUrls.length) % previewUrls.length
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          style={{ border: "none" }}
        >
          <IconButton onClick={onClose} disabled={isLoading}>
            <Close />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Create new post
          </Typography>
        </Box>
        <Button
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={onShare}
          disabled={isLoading}
        >
          Share
        </Button>
      </Box>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: 2,
              minHeight: 350,
            }}
          >
            {previewUrls.length === 0 ? (
              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                  flex: 1,
                  minHeight: 350,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  accept="image/*,video/*"
                  hidden
                  multiple
                  id="image-upload"
                  onChange={handleFileSelect}
                />
                <label htmlFor="image-upload">
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Click photo to tag people
                  </Typography>
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{ textTransform: "none" }}
                  >
                    Select from computer
                  </Button>
                </label>
              </Box>
            ) : (
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000",
                  }}
                >
                  {previewUrls[currentIndex].type.startsWith("video/") ? (
                    <video
                      src={previewUrls[currentIndex].url}
                      controls
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <img
                      src={previewUrls[currentIndex].url}
                      alt={`Preview ${currentIndex}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      position: "absolute",
                      left: 16,
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <ArrowBack />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      position: "absolute",
                      right: 16,
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <ArrowForward />
                  </IconButton>
                  <IconButton
                    onClick={() => removeFile(currentIndex)}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    gap: 1,
                  }}
                >
                  {/* {previewUrls.map((preview, index) => (
                    <img
                      key={index}
                      src={preview.url}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setCurrentIndex(index)}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                        border:
                          index === currentIndex ? "2px solid blue" : "none",
                        cursor: "pointer",
                      }}
                    />
                  ))} */}
                </Box>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    hidden
                    id="add-more-images"
                    onChange={handleFileSelect}
                    multiple
                  />
                  <label htmlFor="add-more-images">
                    <Button variant="outlined" component="span">
                      Add More Images
                    </Button>
                  </label>
                </Box>
              </Box>
            )}

            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                <Typography variant="subtitle2">username</Typography>
              </Box>

              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Write a caption..."
                variant="standard"
                onChange={(e) => setCaption(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PostForm;
