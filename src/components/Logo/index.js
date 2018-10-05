/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { Image } from 'react-native';

// SVG Should be implemented.
const Logo = props => (
  <Image source={require('assets/images/logo.png')} style={props.style} />
);

export default Logo;
