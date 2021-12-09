import axios from "axios";
import { useHistory } from "react-router-dom";
const register = (
  username,
  email,
  password,
  confirmpassword,

  avatar
) => {
  return axios
    .post("http://localhost:4000/user/signup", {
      username,
      email,
      password,
      confirmpassword,
      avatar,
    })
    .then((response) => {
      console.log("local storage");
      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

export default {
  register,
};
