import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./singleTaskStyles.module.css";

function SingleTask({ tasks, setCurrentId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Card className={styles.card}>
        <CardHeader title={tasks.label}></CardHeader>
        <CardMedia className={styles.media}></CardMedia>
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
