import styles from "./Tasks.module.css";
import TasksList from "./../appBase/tasks/TasksList";
import { GetTasks } from "../appBase/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
import AddTask from "./../appBase/tasks/AddTask";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { logout } from "./../appBase/user/actions/auth";
function Tasks() {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  const history = useHistory();
  const doLogout = (e) => {
    dispatch(logout());
    history.push("/");
    window.location.reload(false);
  };

  useEffect(() => {
    dispatch(GetTasks());
  }, [dispatch]);
  return (
    <div className={styles.fluid}>
      <Button
        onClick={() => {
          doLogout();
        }}
      >
        {" "}
        Logout
      </Button>
      <AddTask currentId={currentId} setcurrentId={setcurrentId}></AddTask>
      <div className={styles.Tasks}>
        {" "}
        <TasksList setcurrentId={setcurrentId} />{" "}
      </div>
    </div>
  );
}

export default Tasks;
