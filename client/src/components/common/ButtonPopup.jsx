import React, { useState } from "react";
import { Popover, Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ButtonPopup(props) {
  const { name, isMobile, buttonProps, popupProps, children, onClose } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) {
      onClose();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "button-popup" : undefined;

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        size={isMobile ? "small" : "medium"}
        fullWidth={isMobile}
        sx={{
          borderRadius: "10px",
          textTransform: "none",
          backgroundColor: "#f5f5f5",
          borderColor: "#dbdbdb",
          color: "#262626",
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#dbdbdb",
          },
          minWidth: { xs: "100%", sm: "120px" },
        }}
      >
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        {...popupProps}
      >
        <Box sx={{ width: 300, p: 2, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Popover>
    </>
  );
}
