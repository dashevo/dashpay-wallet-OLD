/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
