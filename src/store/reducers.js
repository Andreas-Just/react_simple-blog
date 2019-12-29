import { ACTION_TYPE } from "./actions";

const initialState = {
  selectedIndex: 1,

};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SELECT_AUTHOR:
      return {
        ...state,
        selectedIndex: state.selectedIndex + action.selectedIndex
      };
    default:
      return state;
  }
}