import { isArray, isObject } from 'lodash';

const extractStatusTypes = (types) => {
  if (!isObject(types)) {
    throw new Error('types is not an Object');
  }
  if (isArray(types)) {
    const [requestType, successType, failureType] = types;
    return {
      requestType,
      successType,
      failureType,
    };
  }
  return {
    requestType: types.REQUEST,
    successType: types.SUCCESS,
    failureType: types.FAILURE,
  };
};

const middleware = store => next => (action) => {
  const { types } = action;
  let { asyncTask } = action;
  if (typeof asyncTask === 'undefined') {
    return next(action);
  }

  if (typeof asyncTask === 'function') {
    asyncTask = asyncTask(store.getState());
  }

  const {
    requestType,
    successType,
    failureType,
  } = extractStatusTypes(types);

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.asyncTask;
    delete finalAction.types;
    return finalAction;
  };

  next(actionWith({ type: requestType }));

  return new Promise((resolve, reject) => asyncTask.then(
    (response) => {
      next(actionWith({ type: successType, response }));
      resolve(response);
    },
    (error) => {
      next(actionWith({ type: failureType, error }));
      reject(error);
    },
  ));
};

export default middleware;
