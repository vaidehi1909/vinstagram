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
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Add, Delete, Close } from "@mui/icons-material";
import { useCreatPostMutation } from "../../../redux/post/postApi";

const PostForm = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const [previewUrls, setPreviewUrls] = useState([]);

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
          {previewUrls.length === 0 ? (
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                p: 4,
                textAlign: "center",
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
            <ImageList cols={2} gap={8} sx={{ p: 2 }}>
              {previewUrls.map((preview, index) => (
                <ImageListItem key={index} sx={{ position: "relative" }}>
                  {preview.type.startsWith("video/") ? (
                    <video
                      src={preview.url}
                      controls
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <img
                      src={preview.url}
                      alt={`Preview ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                  <IconButton
                    onClick={() => removeFile(index)}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
                      color: "white",
                    }}
                  >
                    <Delete />
                  </IconButton>
                </ImageListItem>
              ))}
              <ImageListItem>
                <input
                  type="file"
                  accept="image/*,video/*"
                  hidden
                  multiple
                  id="add-more-media"
                  onChange={handleFileSelect}
                />
                <label htmlFor="add-more-media">
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      minHeight: 100,
                      border: "2px dashed #666",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    <Add />
                  </Box>
                </label>
              </ImageListItem>
            </ImageList>
          )}

          <Box sx={{ mt: 2 }}>
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

            {/* {[
            { text: "Add location", icon: <LocationOn /> },
            { text: "Add collaborators", icon: <People /> },
            { text: "Accessibility", icon: <AccessibilityNew /> },
            { text: "Advanced settings", icon: <Settings /> },
          ].map((item, index) => (
            <React.Fragment key={item.text}>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <Typography variant="body1">{item.text}</Typography>
                <IconButton size="small">{item.icon}</IconButton>
              </Box>
            </React.Fragment>
          ))} */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PostForm;
