/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
const FAILURE = 'FAILURE';

const actions = {
  imageError(payload) {
    return {
      type: FAILURE,
      payload,
    };
  },
};

export default actions;
