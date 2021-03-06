import React from "react";
import { useState } from "react";
import { Alert } from "@material-ui/lab";

import { useHistory } from "react-router";
import styles from "./signup.module.css";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
//import authService from "../appBase/user/services/auth.service";
import { login } from "../appBase/user/actions/auth";
const schema = yup.object().shape({
  email: yup
    .string()
    .required(" please provide your email ")
    .email("Must be a valid email"),
  password: yup.string().required(" please provide a password "),
});
function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [logsucc, setlogsucc] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const erroralert = (e) => {
    if (logsucc) {
      console.log(logsucc);
      return <div></div>;
    } else
      return (
        <div>
          <Snackbar>
            <Alert variant="outlined" severity="error">
              Email or password wrong!
            </Alert>
          </Snackbar>
        </div>
      );
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signIn = (e) => {
    // e.preventDefault();
    console.log(setlogsucc(true));

    dispatch(login(email, password))
      .then(() => {
        history.push("/app/tasks");
      })
      .catch(() => {
        setlogsucc(false);
        console.log(setlogsucc(false));
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className={styles.page}>
        <div className={styles.signIn}>
          <h2 className={styles.title}> Sign in </h2>

          <Divider variant="middle" className={styles.divider} />
          {erroralert()}
          <form className={styles.form}>
            <TextField
              value={email}
              {...register("email")}
              onChange={(e) => setemail(e.target.value)}
              label="Email"
              placeholder="email"
              type="email"
            />
            <p>{errors.email?.message} </p>
            <FormControl>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>

              <Input
                value={password}
                {...register("password")}
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
              <p>{errors.password?.message} </p>
            </FormControl>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleSubmit(signIn)}
            >
              Login{" "}
            </Button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
