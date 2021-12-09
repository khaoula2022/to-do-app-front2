import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import SingleTask from "./SingleTask";
import { Grid } from "@material-ui/core";
import useStyles from "./tasksListStyles";

function TasksList({ setcurrentId }) {
  const tasks = useSelector(selectTasks);
 
  const classes = useStyles;
  return (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {tasks.map((task) => (
          <Grid key={task?._id} item xs={12} sm={6} md={2}>
            <SingleTask tasks={task} setCurrentId={setcurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TasksList;
