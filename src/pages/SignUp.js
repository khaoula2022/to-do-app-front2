import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./signup.module.css";
import { registerUser } from "./../appBase/user/actions/auth";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("please provide a username"),
  email: yup
    .string()
    .required(" please provide your email ,Your email must be unique too  ")
    .email("Must be a valid and unique email"),
  password: yup
    .string()
    .required(" please provide a password   ")
    .min(6, "Must contain at least 6 characters"),
  confirmpassword: yup
    .string()
    .required(" please confirm your password ")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [username, setusername] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (e) => {
    //  e.preventDefault();

    dispatch(registerUser(username, email, password, confirmpassword))
      .then(() => {
        //  console.log(username);
        //  console.log(email);
        // console.log(password);
        history.push("/signin");
        window.location.reload(false);
      })
      .catch(() => {});
  };

  const redirectSignInPage = (e) => {
    //  e.preventDefault();

    history.push("/signin");
    window.location.reload(false);
  };
  return (
    <div className={styles.page}>
      <div className={styles.signUp}>
        <h2 className={styles.title}>Sign up </h2>
        <FormControl>
          <Input
            value={username}
            {...register("username")}
            onChange={(e) => setusername(e.target.value)}
            label="Username"
            placeholder="username"
            type="text"
          />
          <p>{errors.username?.message} </p>
          <Input
            value={email}
            {...register("email")}
            onChange={(e) => setemail(e.target.value)}
            label="Email "
            placeholder="email"
            type="email"
          />
          <p>{errors.email?.message} </p>

          <Input
            value={password}
            label="passwrd"
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

          <Input
            value={confirmpassword}
            label="confirm password"
            {...register("confirmpassword")}
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
          <p>{errors.confirmpassword?.message} </p>
          <p>{errors.passwordConfirmation?.message} </p>
        </FormControl>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          type="submit"
          onClick={handleSubmit(handleRegister)}
        >
          Sign Up
        </Button>{" "}
        <Button
          variant="outlined"
          size="small"
          color="primary"
          type="submit"
          onClick={redirectSignInPage}
        >
          Already have an account ? Sign In here
        </Button>{" "}
      </div>
    </div>
  );
}

export default SignUp;
