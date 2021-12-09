import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.signIn}>
          <h2 className={styles.title}> Sign in </h2>

          <Divider variant="middle" className={styles.divider} />

          <form className={styles.form}>
            <TextField
              value={email}
              onChange={(e) => setemail(e.target.value)}
              label="Email"
              placeholder="email"
              type="email"
            />
            <FormControl>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>

              <Input
                value={password}
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
            </FormControl>
            <Button variant="outlined" size="small" color="primary">
              Login{" "}
            </Button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
