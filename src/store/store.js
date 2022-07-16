import { createStore } from "redux";

const initialState = 0;

function stepReducer(currentState = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return [parseInt(currentState) + 1];
    }
    case "RESET": {
      return [0];
    }
    default: {
      return currentState;
    }
  }
}

export const store = createStore(stepReducer);
