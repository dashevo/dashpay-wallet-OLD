// External dependencies
import { isArray, isObject } from 'lodash';

export const extractStatusTypes = (types) => {
  if (!isObject(types)) {
    throw new Error('types is not an Object');
  }
  if (isArray(types)) {
    const [
      requestType,
      successType,
      failureType,
    ] = types;

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
