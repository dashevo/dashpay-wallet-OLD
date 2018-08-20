/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
'use strict';

export const CALL_API = 'Call API';

export const middleware = store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { asyncTask } = callAPI;
  const { types } = callAPI;

  if (typeof asyncTask === 'function') {
    asyncTask = asyncTask(store.getState());
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const [requestType, successType, failureType] = types;
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
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
