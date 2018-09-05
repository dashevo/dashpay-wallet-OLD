/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import type { Props } from './types';

const Avatar = ({ source }: Props) =>
  <Image source={{ uri:source }} style={ styles.Avatar } />;

export default Avatar;
