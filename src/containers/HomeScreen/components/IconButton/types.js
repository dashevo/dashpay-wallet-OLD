/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import type { Element } from 'react';
import type { Image } from 'react-native';

export type ReactElement = Element<*>;

export type Props = {
  source: Image.propTypes.source,
  text: string,
  action: () => void
};
export type State = {};
