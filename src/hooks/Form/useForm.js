/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useReducer, useEffect } from 'react';

// Internal dependencies
import reducers from './reducers';
import useMounted from './useMounted';
import yupToFormErrors from './utilities';
import {
  SET_TOUCHED,
  SET_VALUES,
  SET_ERRORS,
  SET_FOCUSED,
  VALIDATE_REQUEST,
  VALIDATE_SUCCESS,
  VALIDATE_FAILURE,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  RESET,
} from './actionTypes';

const options = {
  abortEarly: false,
  context: {},
};

function useForm(props) {
  const { initialState = {} } = props;

  const [current, dispatch] = useReducer(reducers, {
    state: props.state || {},
    values: props.values || {},
    errors: props.errors || {},
  });
  const isMounted = useMounted(false);
  const { validationSchema, updater = obj => obj } = props;

  const {
    touched = {},
    values = {},
    errors = {},
    state = {},
    focused = props.focused,
    isDirty = false,
    isSubmitting = false,
    isValid = false,
    isValidating = false,
  } = current;

  async function validate(tmp = values) {
    try {
      dispatch({
        type: VALIDATE_REQUEST,
      });

      const response = await validationSchema.validate(tmp, options);

      dispatch({
        type: VALIDATE_SUCCESS,
        payload: response,
      });

      return true;
    } catch (err) {
      dispatch({
        type: VALIDATE_FAILURE,
        payload: yupToFormErrors(err),
      });
      return false;
    }
  }

  useEffect(() => {
    if (!isSubmitting && isMounted) validate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  function setValues(data) {
    dispatch({
      type: SET_VALUES,
      payload: data,
    });
  }

  function setErrors(data) {
    dispatch({
      type: SET_ERRORS,
      payload: data,
    });
  }

  function setState(payload) {
    dispatch({
      type: 'SET_STATUS',
      payload,
    });
  }

  function setTouched(data) {
    dispatch({
      type: SET_TOUCHED,
      payload: data,
    });
  }

  function setFocused(data) {
    dispatch({
      type: SET_FOCUSED,
      payload: data,
    });
  }

  function set(payload) {
    dispatch({
      type: 'SET',
      payload: updater(payload, current),
    });
  }

  function reset(data = initialState) {
    dispatch({
      type: RESET,
      payload: data,
    });
  }

  async function submit() {
    dispatch({
      type: SUBMIT_REQUEST,
    });

    if (await validate()) {
      props.onSubmit(state.values);
      dispatch({
        type: SUBMIT_SUCCESS,
      });
    } else {
      dispatch({
        type: SUBMIT_FAILURE,
      });
    }

    return isValid;
  }

  return {
    set,
    validate,
    touched,
    values,
    errors,
    focused,
    state,
    isDirty,
    isSubmitting,
    isValid,
    isValidating,
    reset,
    setTouched,
    setValues,
    setErrors,
    setFocused,
    setState,
    submit,
  };
}

export default useForm;
