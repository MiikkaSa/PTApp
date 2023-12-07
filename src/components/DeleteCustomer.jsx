import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function DeleteCustomer({ customerData, onDelete }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch(`https://traineeapp.azurewebsites.net/api/customers/${customerData.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Error when deleting customer: " + response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("Customer deleted successfully", data);
        onDelete(); 
        handleClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Delete Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Customer</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteCustomer;

