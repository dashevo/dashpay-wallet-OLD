/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
import React from 'react';
import Icon from './Icon';

export { default as Icon } from './Icon';
export { default as DashIcon } from './DashIcon';

// Tmp
type Props = {};

export default ({ name, children, ...rest }: Props) => <Icon name={name || children} {...rest} />;
