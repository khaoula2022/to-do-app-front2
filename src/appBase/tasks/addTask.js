import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddTask() {
  return (
    <div>
      <FormControl>
        <Dialog>
          <DialogTitle>
            <DialogContent>
              <TextField></TextField>
            </DialogContent>
            <DialogActions></DialogActions>
          </DialogTitle>
        </Dialog>
      </FormControl>
    </div>
  );
}

export default AddTask;
