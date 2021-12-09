import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/tasksApi";

export const createTask = createAsyncThunk(
  "tasks/addTask",
  async (tasks, thunkAPI) => {
    const response = await api.CreateTask(tasks);
    return response.data;
  }
);

let initialState = {
  values: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    gettasks: (state, action) => {
      state.values = action.payload;
    },

    UpdateTask: (state, action) => {
      const payload = action.payload._id;
      state.values = state.values.map((task) =>
        task._id === payload ? action.payload : task
      );
      console.log(action.payload);
    },
    deleteTaskReducer: (state, action) => {
      const payload = action.payload;

      state.values = state.values.filter((task) => task._id !== payload);
    },
    searchAction: (state, action) => {
      state.values = action.payload;
    },
  },

  extraReducers: {
    [createTask.fulfilled]: (state, action) => {
      state.values.push(action.payload.data);
    },
  },
});
export const { gettasks, UpdateTask, deleteTaskReducer, searchAction } =
  taskSlice.actions;
//thunk
export const update = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.UpdateTaskApi(id, task);
    dispatch(UpdateTask(data.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const GetTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();

    dispatch(gettasks(data.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTaskApi(id);
    dispatch(deleteTaskReducer(id));
  } catch {}
};
export const searchTaskF = (search) => async (dispatch) => {
  try {
    const { data } = await api.searchTaskByCode(search);

    dispatch(searchAction(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const selectTasks = (state) => state.tasks.values;

export default taskSlice.reducer;
