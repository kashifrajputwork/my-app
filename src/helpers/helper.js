// In a file called "stateHelpers.js"
let state;
let setState;

export const setGlobalState = (newState) => {
  state = newState;
  console.log(state)
};

export const getGlobalState = () => {
  return state;
};

export const registerSetState = (setStateFunc) => {
  setState = setStateFunc;
};
