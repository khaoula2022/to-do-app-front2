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
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [taskData, settaskData] = useState({
    label: "",
    description: "",
    deadline: "",
  });
  return (
    <div>
      <div>
        <div>
          <button> Create a new Task !</button>
        </div>
      </div>
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
