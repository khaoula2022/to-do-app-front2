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
  },

  extraReducers: {
    [createTask.fulfilled]: (state, action) => {
      state.values.push(action.payload.data);
    },
  },
});
export const { gettasks } = taskSlice.actions;
//thunk
export const GetTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();

    dispatch(gettasks(data.data));
  } catch (error) {
    console.log(error.message);
  }
};
export const selectTasks = (state) => state.tasks.values;

export default taskSlice.reducer;
