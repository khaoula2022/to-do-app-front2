import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  reducers: {},

  extraReducers: {},
});

export default taskSlice.reducer;
