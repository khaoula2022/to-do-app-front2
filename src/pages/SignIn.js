import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
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
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import authService from "../appBase/user/services/auth.service";
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

  const signIn = (e) => {
    authService.login(email, password);
    dispatch(login(email, password))
      .then(() => {
        history.push("/app/tasks");
      })
      .catch(() => {});
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
                {...register("pasword")}
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
