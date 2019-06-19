/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// Internal dependencies
import DashPayFontIcon from 'assets/fonts/DashPay.json';

const FontIcon = createIconSetFromIcoMoon(DashPayFontIcon);

type Props = {
  children?: string,
  rest?: string,
};

function Icon(props: Props) {
  const { children = '', ...rest } = props;
  return <FontIcon name={children} {...rest} />;
}

export default Icon;
