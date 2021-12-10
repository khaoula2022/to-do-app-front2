import styles from "./Tasks.module.css";
import TasksList from "./../appBase/tasks/TasksList";
import SearchTask from "./../appBase/tasks/SearchTask";

import { GetTasks, searchTaskF } from "../appBase/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
import AddTask from "./../appBase/tasks/AddTask";
import { useHistory } from "react-router-dom";
import { logout } from "./../appBase/user/actions/auth";
function Tasks() {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  var [title, setTitle] = useState("");

  const history = useHistory();
  const doLogout = (e) => {
    dispatch(logout());
    history.push("/");
    window.location.reload(false);
  };

  useEffect(() => {
    if (title !== "") {
      dispatch(searchTaskF(title));
    } else {
      dispatch(GetTasks());
    }
  }, [title, dispatch]);

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
        <SearchTask setTitle={setTitle} title={title} />
        <AddTask currentId={currentId} setcurrentId={setcurrentId}></AddTask>
        <div className={styles.Tasks}> </div>
        <TasksList setcurrentId={setcurrentId} />{" "}
      </div>
    </>
  );
}

export default Tasks;
