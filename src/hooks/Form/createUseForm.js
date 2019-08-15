/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import useForm from './useForm';

function createUseForm(config) {
  return props => useForm(config(props));
}

export default createUseForm;
