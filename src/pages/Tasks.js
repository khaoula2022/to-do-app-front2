import styles from "./Tasks.module.css";
import TasksList from "./../appBase/tasks/TasksList";
import { GetTasks } from "../appBase/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
function Tasks() {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTasks());
  }, [dispatch]);
  return (
    <div className={styles.fluid}>
      <div className={styles.courses}>
        {" "}
        <TasksList setcurrentId={setcurrentId} />{" "}
      </div>
    </div>
  );
}

export default Tasks;
