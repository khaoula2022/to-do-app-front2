import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
} from "@material-ui/core";
import React from "react";

function addTask() {
  return (
    <div>
      <FormControl>
        <Dialog>
          <DialogTitle>
            <DialogContent></DialogContent>
          </DialogTitle>
        </Dialog>
      </FormControl>
    </div>
  );
}

export default addTask;
