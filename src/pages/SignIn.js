import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
  return <div></div>;
}

export default SignIn;
