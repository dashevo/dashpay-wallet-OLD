/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { Clipboard } from 'react-native';
import { ThemedButton } from 'components';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const CopyAddressButton = ({ address }: Props): ReactElement => {
  const copyAddress = async () => {
    await Clipboard.setString(`${address}`);
    alert('Copied');
  };
  return (
    <ThemedButton title='Copy address' onPress={copyAddress} />
  )
};

export default CopyAddressButton;
