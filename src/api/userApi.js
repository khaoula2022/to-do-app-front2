import axios from "axios";
const urlsignup = "/user/signup";
export const CreateUser = (newUser) => axios.post(urlsignup, newUser);
