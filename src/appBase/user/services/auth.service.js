import axios from "axios";
import { useHistory } from "react-router-dom";
const register = (username, email, password, confirmpassword) => {
  return axios
    .post("http://localhost:4000/user/signup", {
      username,
      email,
      password,
      confirmpassword,
    })
    .then((response) => {
      console.log("local storage");
      //localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("http://localhost:4000/user/login", {
      email,
      password,
    })
    .then((response) => {
      console.log("local storage");
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      console.log(response.data.data.user);

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  console.log(" loggin out");
};

export default {
  register,
  login,
  logout,
};
