"use strict";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Dialog,
  DialogContent,
  Paper,
  styled,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  useUpdateProfileImageMutation,
  useRemoveProfileImageMutation,
} from "../../../redux/user/userApi";
import { addToast } from "../../../redux/toast/toastSlice";

// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: "#F8F9FA",
}));

const EditProfileImg = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRemoving, setISRemoving] = useState(false);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [updateImg] = useUpdateProfileImageMutation();
  const [removeImg] = useRemoveProfileImageMutation();

  useEffect(() => {
    if (file) {
      OnProfileImgUpdate();
    }
  }, [file]);

  const handleClose = () => {
    setOpen(false);
  };

  const onChangePhoto = () => {
    setOpen(true);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const OnProfileImgUpdate = () => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    updateImg(formData)
      .unwrap()
      .then(() => {
        setLoading(false);
        dispatch(
          addToast({ message: "Profile image updated", severity: "success" })
        );
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        const errMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errMsg, severity: "error" }));
      });
  };

  const onRemoveProfileImg = () => {
    setISRemoving(true);
    removeImg()
      .unwrap()
      .then(() => {
        setISRemoving(false);
        dispatch(
          addToast({ message: "Profile image removed", severity: "success" })
        );
        handleClose();
      })
      .catch((error) => {
        setISRemoving(false);
        const errMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errMsg, severity: "error" }));
      });
  };

  return (
    <>
      <StyledPaper elevation={0}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={user.profileImage} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              {user.userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.fullName}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={onChangePhoto}
            sx={{
              ml: "auto",
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Change photo
          </Button>
        </Box>
      </StyledPaper>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="unfollow-dialog-title"
          PaperProps={{
            style: { borderRadius: 12, padding: "16px" },
          }}
        >
          <DialogContent sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Chage Profile Photo
              </Typography>
            </Box>

            <Box sx={{ mt: 3, mb: 2 }}>
              <Divider />
              <Button
                variant="text"
                component="label"
                fullWidth
                disabled={loading || isRemoving}
                style={{ color: "dodgerblue", fontWeight: "bold" }}
              >
                {loading ? "Uploading..." : "Upload Photo"}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
              <Divider />
              <Button
                variant="text"
                fullWidth
                disabled={loading || isRemoving}
                style={{ color: "palevioletred", fontWeight: "bold" }}
                onClick={onRemoveProfileImg}
              >
                {isRemoving ? "Removing..." : "Remove Current Photo"}
              </Button>
              <Divider />
              <Button
                variant="text"
                fullWidth
                disabled={loading || isRemoving}
                style={{ color: "gray" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Divider />
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EditProfileImg;
