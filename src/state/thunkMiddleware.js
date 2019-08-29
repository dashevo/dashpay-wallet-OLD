import { extractStatusTypes } from './utilities';

/* eslint-disable arrow-parens */
const thunkMiddleware = () => next => action => {
  const { asyncTask } = action;
  if (typeof asyncTask !== 'function') {
    return next(action);
  }

  const {
    requestType,
    successType,
    failureType,
  } = extractStatusTypes(action.types);

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.asyncTask;
    delete finalAction.types;
    return finalAction;
  };

  next(actionWith({ type: requestType }));

  return new Promise((resolve, reject) => asyncTask().then(
    (response) => {
      next(actionWith({ type: successType, response }));
      resolve(response);
    },
    (error) => {
      next(actionWith({ type: failureType, error }));
      reject(error);
    },
  ).catch(() => (error) => {
    next(actionWith({ type: failureType, error }));
    reject(error);
  }));
};

export default thunkMiddleware;
