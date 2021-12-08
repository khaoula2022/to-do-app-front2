import {
  Button,
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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  label: yup.string().required(" your task should have a name "),
  description: yup
    .string()
    .required(" please provide more details about your task"),
});
function AddTask({ currentId, setcurrentId }) {
  const task = useSelector((state) =>
    currentId ? state.tasks.values.find((t) => t._id === currentId) : null
  );
  console.log("test");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [taskData, setTaskData] = useState({
    label: "",
    description: "",
  });

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openN, setOpenN] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleError = () => {
    errors.label = "";
    errors.description = "";
  };
  const handleClose = () => {
    setOpen(false);
    clear();
    handleError();
  };

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const clear = () => {
    setcurrentId(null);
    setTaskData({
      label: " ",
      description: "",
    });
  };
  useEffect(() => {
    if (currentId) setOpen(true);
  }, [currentId]);

  const submit = (e) => {
    dispatch(createTask(taskData));

    setOpen(false);
    clear();
    handleClick();
  };

  const handleClick = () => {
    setOpenN(true);
  };

  const handleCloseNotif = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenN(false);
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
          <DialogTitle id="form-dialog-title">
            Create a task here
            <DialogContent>
              <TextField
                variant="outlined"
                label="label"
                fullWidth
                {...register("label")}
                value={taskData.label}
                onChange={(e) =>
                  setTaskData({ ...taskData, label: e.target.value })
                }
              />
              <p>{errors.label?.message} </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <button type="submit" onClick={handleSubmit(submit)}>
                submit{" "}
              </button>
            </DialogActions>
          </DialogTitle>
        </Dialog>
      </FormControl>
    </div>
  );
}

export default AddTask;
