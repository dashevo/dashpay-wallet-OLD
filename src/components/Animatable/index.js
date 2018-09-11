/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import defaultProps from './props';

// This library has great API, but inside is mess.
// JS thread in some cases suffers much from this library.
// We have to create our tiny library based on these APIs.
const Animatable = createAnimatableComponent(View);

Animatable.defaultProps = defaultProps;

export default Animatable;
