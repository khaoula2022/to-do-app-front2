import { TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./signup.module.css";

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [username, setusername] = useState("");
  const [birthdate, setbirthdate] = useState(new Date());
  const [avatar, setavatar] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.page}>
      <div className={styles.signUp}>
        <h2 className={styles.title}>Sign up </h2>
        <form className={styles.form}>
          <TextField
            value={username}
            onChange={(e) => setusername(e.target.value)}
            label="Username"
            placeholder="username"
            type="text"
          />
          <TextField
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Email"
            placeholder="email"
            type="email"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
