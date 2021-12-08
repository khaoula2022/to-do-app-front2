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
  label: yup.string().required(" your task should have a label "),
  description: yup
    .string()
    .required(" please provide more details about your task"),
});
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
    if (currentId) setOpen(true);
  }, [currentId]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleError = () => {
    errors.label = "";
    errors.description = "";
  };
  const handleClose = () => {
    setOpen(false);
    clear();
    handleError();
  };
  const clear = () => {
    setcurrentId(null);
    setTaskData({
      label: " ",
      description: "",
    });
  };

  const submit = (e) => {
    if (currentId) {
    } else {
      dispatch(createTask(taskData));
    }

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
          <DialogTitle id="form-dialog-title">
            Create a task here
            <DialogContent>
              <TextField
                variant="outlined"
                label="label"
                fullWidth
                {...register("titlabelle")}
                value={taskData.label}
                onChange={(e) =>
                  setTaskData({ ...taskData, label: e.target.value })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <button type="submit" onClick={submit()}>
                add task{" "}
              </button>
            </DialogActions>
          </DialogTitle>
        </Dialog>
      </FormControl>
    </div>
  );
}

export default AddTask;
