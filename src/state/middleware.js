// @flow
const middleware = store => next => (action) => {
  const { types } = action;
  let { asyncTask } = action;

  if (typeof asyncTask === 'undefined') {
    return next(action);
  }

  if (typeof asyncTask === 'function') {
    asyncTask = asyncTask(store.getState());
  }

  const [requestType, successType, failureType] = types;
  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.asyncTask;
    delete finalAction.types;
    return finalAction;
  };

  next(actionWith({ type: requestType }));

  const onSuccess = response => next(actionWith({ type: successType, response }));
  const onFailure = error => next(actionWith({ type: failureType, error }));

  return asyncTask.then(onSuccess, onFailure);
};

export default middleware;
