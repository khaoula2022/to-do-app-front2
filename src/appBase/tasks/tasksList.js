import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import SingleTask from "./SingleTask";
import { Grid } from "@material-ui/core";
import useStyles from "./tasksListStyles";
function TasksList({ setcurrentId }) {
  const tasks = useSelector(selectTasks);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.username);
  //const user = useSelector((state) => state.user);
  const classes = useStyles;
  return (
    <>
      <p> welcome {user.username} !</p>
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
