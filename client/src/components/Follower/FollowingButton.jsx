import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Avatar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useUnfollowMutation } from "../../../redux/follower/followerApi";

export default function FollowingButton(props) {
  const { name, buttonProps, modalProps, user } = props;
  const [open, setOpen] = useState(false);
  const [unfollow] = useUnfollowMutation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onUnfollow = () => {
    unfollow(user._id)
      .unwrap()
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} {...buttonProps}>
        {name || "Following"}
      </Button>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="unfollow-dialog-title"
          PaperProps={{
            style: { borderRadius: 12, padding: "16px" },
          }}
          {...modalProps}
        >
          <DialogContent sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Avatar
                src={user?.profileImage}
                alt="User Avatar"
                sx={{ width: 80, height: 80 }}
              />
            </Box>
            <Typography variant="h6" gutterBottom>
              Unfollow @{user?.userName}?
            </Typography>
            <Box sx={{ mt: 3, mb: 2 }}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                sx={{ textTransform: "none", mb: 1 }}
                onClick={() => {
                  onUnfollow();
                }}
              >
                Unfollow
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{ textTransform: "none" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
