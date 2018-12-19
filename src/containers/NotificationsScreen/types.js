/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import type { Element } from 'react';
export type ReactElement = Element<*>;

export type Props = {
  history: Array<Object>,
  getTransactions: Function,
};
export type State = {};
