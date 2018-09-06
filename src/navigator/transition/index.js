/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import transitionSpec from './specifications';
import screenInterpolator from './interpolators';

const transitionConfig = () => ({
  transitionSpec,
  screenInterpolator,
  containerStyle: {
    backgroundColor: '#000'
  }
});

export default transitionConfig;
