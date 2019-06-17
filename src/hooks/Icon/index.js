/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
import React from 'react';
import Icon from './Icon';

// export { default as Icon } from './Icon';
export { default as DashIcon } from './DashIcon';

// Tmp
type Props = {
  children?: string,
  name?: string,
};

function TmpIcon({ children, ...rest }: Props) {
  return <Icon name={children} {...rest} />;
}

TmpIcon.defaultProps = {
  children: null,
  name: null,
};

export default TmpIcon;
