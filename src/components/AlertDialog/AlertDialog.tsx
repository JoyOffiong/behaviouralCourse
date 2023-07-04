import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface AlertDialogProps {
  open: any;
  handleClose: any;
  severity: string;
  message: string;
}

const AlertDialog = ({
  open,
  severity,
  message,
  handleClose,
}: AlertDialogProps) => {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      open={open}
      autoHideDuration={3000}
      onClose={() => {
        handleClose();
      }}
    >
      <Alert
        onClose={() => {}}
        //@ts-ignore
        severity={severity ? severity : "success"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertDialog;
