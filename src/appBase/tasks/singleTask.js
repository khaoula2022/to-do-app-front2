import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./singleTaskStyles.module.css";

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
        <CardActions className={styles.cardActions}></CardActions>
      </Card>
    </div>
  );
}

export default SingleTask;
