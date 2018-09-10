/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import * as Animatable from 'react-native-animatable';

export default React.forwardRef((props, ref) => (
  <Animatable.View {...props} ref={ref} style={{ opacity: 0 }} />
));
