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

const Avatar = ({ source }: Props): ReactElement => (
  <Image source={source} style={styles.avatar} />
);

export default Avatar;
