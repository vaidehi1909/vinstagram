import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeToast } from "../../../redux/toast/toastSlice";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toast);

  const handleClose = (id) => {
    dispatch(removeToast({ id }));
  };

  return (
    <>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={true}
          autoHideDuration={3000} // Toast automatically disappears
          onClose={() => handleClose(toast.id)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => handleClose(toast.id)}
            severity={toast.severity}
            variant="filled"
          >
            {toast.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default ToastMessage;
