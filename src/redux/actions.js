import { ADD_TASK } from "./actionType";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title: title,
    completed: false,
  },
});
