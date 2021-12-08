import styles from "./Tasks.module.css";
import TasksList from "./../appBase/tasks/TasksList";
import { GetTasks } from "../appBase/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
import AddTask from "./../appBase/tasks/AddTask";
function Tasks() {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTasks());
  }, [dispatch]);
  return (
    <div className={styles.fluid}>
      <AddTask currentId={currentId} setcurrentId={setcurrentId}></AddTask>
      <div className={styles.courses}>
        {" "}
        <TasksList setcurrentId={setcurrentId} />{" "}
      </div>
    </div>
  );
}

export default Tasks;
