import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import React from "react";

function addTask() {
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

export default addTask;
