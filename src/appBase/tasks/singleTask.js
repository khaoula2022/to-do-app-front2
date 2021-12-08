import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDialog from "../confirmation/ConfirmDialog";

import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./singleTaskStyles.module.css";
import { deleteTask } from "./taskSlice";

function SingleTask({ tasks, setCurrentId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          title={tasks.label}
          subheader={tasks.createdAt}
          action={
            <IconButton aria-label="settings">
              <EditIcon onClick={() => setCurrentId(tasks._id)} />
            </IconButton>
          }
        ></CardHeader>
        <CardMedia className={styles.media} title={tasks.label}></CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {tasks.description}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setConfirmDialog({
                isOpen: true,
                title: "Are you sure to delete this task?",
                subTitle: "You can't undo this operation",
                onConfirm: () => {
                  dispatch(deleteTask(tasks._id));
                },
              });
            }}
          >
            <DeleteIcon fontSize="small" /> Delete this Task
          </Button>
        </CardActions>
        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Card>
    </div>
  );
}

export default SingleTask;
