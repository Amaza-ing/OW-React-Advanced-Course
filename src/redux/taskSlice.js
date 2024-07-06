import { createSlice } from "@reduxjs/toolkit";

const initState = {
  tasks: [
    {
      id: "1",
      title: "Comprar la cena",
      completed: false,
    },
    {
      id: "2",
      title: "Cocinar",
      completed: false,
    },
    {
      id: "3",
      title: "Cenar",
      completed: false,
    },
    {
      id: "4",
      title: "Lavar los platos",
      completed: false,
    },
  ],
  hasLoaded: true,
  hasError: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initState,
  reducers: {
    createTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    updateTask: (state, action) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      const taskIndex = state.tasks.indexOf(taskToUpdate);
      state.tasks[taskIndex] = action.payload;
    },
  },
});

export const { createTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
