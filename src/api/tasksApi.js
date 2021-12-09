import { Axios } from "../appBase/axiosfile";

const url = "/tasks";
const url1 = "/tasks";

export const fetchTasks = () => Axios().get(url);
export const CreateTask = (newTask) => Axios().post(url, newTask);
export const UpdateTaskApi = (id, updatedTask) =>
  Axios().patch(`${url}/${id}`, updatedTask);
export const deleteTaskApi = (id) => Axios().delete(`${url}/${id}`);
export const searchTaskByCode = (search) => Axios().get(`${url1}/${search}`);
