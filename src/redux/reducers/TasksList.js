import { ADD_TASK } from "../actionType";

const defaultState = [
  { id: 1, title: "Nouvelle Tâche reducer", completed: false },
];

export const Taskslist = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};
