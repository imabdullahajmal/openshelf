import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const DevNotification = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (_, reason) => {
    if (reason !== "clickaway") {
      setOpen(false);
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
        🚧 This site is under development!
      </Alert>
    </Snackbar>
  );
};

export default DevNotification;
