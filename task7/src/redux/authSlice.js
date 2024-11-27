import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1);
    },
    markTaskCompleted: (state, action) => {
      state[action.payload].completed = true;
    },
  },
});

export const { addTask, deleteTask, markTaskCompleted } = authSlice.actions;
export default authSlice.reducer;
