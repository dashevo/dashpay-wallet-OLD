/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import type { Element } from 'react';

export type ReactElement = Element<*>;
export type Props = {
  value?: string,
  onChangeRecipient: Function,
};