/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  query: Yup.string().min(3)
});

export default {
  validationSchema
};
