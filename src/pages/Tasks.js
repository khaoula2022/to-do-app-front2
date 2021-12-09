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
import { searchTask } from "./../appBase/tasks/taskSlice";
function Tasks() {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();
  var [code, setcode] = useState("");

  const history = useHistory();
  const doLogout = (e) => {
    dispatch(logout());
    history.push("/");
    window.location.reload(false);
  };

  useEffect(() => {
    if (code !== "") {
      dispatch(searchTask);
    } else {
      dispatch(GetTasks());
    }
  }, [code, dispatch]);

  return (
    <>
      <div className={styles.fluid}>
        <button
          onClick={() => {
            doLogout();
          }}
        >
          {" "}
          Logout
        </button>
        <AddTask currentId={currentId} setcurrentId={setcurrentId}></AddTask>
        <div className={styles.Tasks}> </div>
        <TasksList setcurrentId={setcurrentId} />{" "}
      </div>
    </>
  );
}

export default Tasks;
