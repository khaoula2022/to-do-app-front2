import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "./taskSlice";

function AddTask({ currentId, setcurrentId }) {
  const task = useSelector((state) =>
    currentId ? state.tasks.values.find((t) => t._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openN, setOpenN] = React.useState(false);

  const [taskData, setTaskData] = useState({
    label: "",
    description: "",
    deadline: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const clear = () => {
    setcurrentId(null);
    setTaskData({
      label: " ",
      description: "",
      deadline: "",
    });
  };
  const handleClose = () => {
    setOpen(false);
    clear();
  };

  const submit = (e) => {
    dispatch(createTask(taskData));

    setOpen(false);
    clear();
    handleClick();
  };

  const handleClick = () => {
    setOpenN(true);
  };

  return (
    <div>
      <div>
        <div>
          <button
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}
          >
            {" "}
            Create a new Task !
          </button>
        </div>
      </div>
      <FormControl>
        <Dialog
          fullWidth={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
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
