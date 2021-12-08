import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/tasksApi";

export const createCourseActivities = createAsyncThunk(
  "tasks/addTask",
  async (tasks, thunkAPI) => {}
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

  extraReducers: {},
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
