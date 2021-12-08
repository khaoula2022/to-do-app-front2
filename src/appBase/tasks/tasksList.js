import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import SingleTask from "./SingleTask";
import { Grid } from "@material-ui/core";

function TasksList({ setcurrentId }) {
  const tasks = useSelector(selectTasks);

  return (
    <Grid>
      {tasks.map((task) => (
        <Grid key={task?._id}>
          <SingleTask tasks={task} setCurrentId={setcurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TasksList;
