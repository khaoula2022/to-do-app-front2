import { Axios } from "../appBase/axiosfile";

const url = "/tasks";
export const fetchTasks = () => Axios().get(url);
