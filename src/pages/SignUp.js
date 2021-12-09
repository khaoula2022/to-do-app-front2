import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./signup.module.css";
import { register } from "./../appBase/user/actions/auth";

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [username, setusername] = useState("");
  const [birthdate, setbirthdate] = useState(new Date());
  const [avatar, setavatar] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(avatar);

    dispatch(register(username, email, password, confirmpassword))
      .then(() => {
        console.log(username);
        console.log(email);
        console.log(password);
        history.push("/app/tasks");
        window.location.reload(false);
      })
      .catch(() => {});
  };
  return (
    <div className={styles.page}>
      <div className={styles.signUp}>
        <h2 className={styles.title}>Sign up </h2>
        <FormControl>
          <Input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            label="Username"
            placeholder="username"
            type="text"
          />
          <Input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Email"
            placeholder="email"
            type="email"
          />
          <Input
            value={password}
            label="passwrd"
            onChange={(e) => setpassword(e.target.value)}
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Input
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleRegister}
        >
          Sign Up
        </Button>{" "}
      </div>
    </div>
  );
}

export default SignUp;
