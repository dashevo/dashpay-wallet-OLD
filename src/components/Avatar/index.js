/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const Avatar = (props: Props): ReactElement => (
  <Image {...props} style={styles.avatar} />
);

export default Avatar;
