/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

// This component needs to be expanded with variants of size ('sm', 'md', 'lg'),
// variants of color, initials when image is missing...
const Avatar = (props: Props): ReactElement => (
  <Image {...props} style={styles.avatar} />
);

export default Avatar;
