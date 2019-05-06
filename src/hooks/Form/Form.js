/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import React from 'react';

// Internal dependencies
import FormProvider from './FormProvider';
import useForm from './useForm';

function Form(props) {
  const { children, ...rest } = props;
  const form = useForm(rest);

  return <FormProvider value={form}>{children}</FormProvider>;
}

export default Form;
