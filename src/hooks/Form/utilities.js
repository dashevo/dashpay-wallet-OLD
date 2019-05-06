/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

export function yupToFormErrors(yupErrors) {
  const errors = {};

  if (yupErrors.inner.length === 0) {
    return {
      [yupErrors.path]: yupErrors.message,
    };
  }

  for (const error of yupErrors.inner) {
    errors[error.path] = error.message;
  }
  return errors;
}
