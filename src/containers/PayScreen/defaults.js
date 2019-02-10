/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as Yup from 'yup';

// Tmp: currencies is missing in state.
const currencies = ['DASH', 'USD'];
const conversions = {
  ['DASH']: {
    code: 'DASH',
    name: 'Dash ',
    rates: {
      USD: 70.08
    }
  },
  ['USD']: {
    code: 'USD',
    name: 'US Dollar',
    rates: {
      DASH: 1 / 70.08
    }
  }
};

const validationSchema = Yup.object().shape({
  // amount: Yup.string().required('The recipient field is required.'),
  // recipient: Yup.string().required('The recipient field is required.')
});

export default {
  currencies,
  conversions,
  validationSchema,
  initialValues: {
    amount: '',
    recipient: ''
  }
};
