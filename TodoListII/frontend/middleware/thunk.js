const thunk = ({dispatch, getState}) => next => action => {
  // debugger;
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};
// debugger
export default thunk;
