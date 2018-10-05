/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
const middleware = store => next => action => {
  let { asyncTask, types } = action;

  if (typeof asyncTask === 'undefined') {
    return next(action);
  }

  if (typeof asyncTask === 'function') {
    asyncTask = asyncTask(store.getState());
  }

  const [requestType, successType, failureType] = types;
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.asyncTask;
    delete finalAction.types;
    return finalAction;
  };

  next(
    actionWith({
      type: requestType
    })
  );

  return asyncTask.then(
    response =>
      next(
        actionWith({
          type: successType,
          response
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error
        })
      )
  );
};

export default middleware;
