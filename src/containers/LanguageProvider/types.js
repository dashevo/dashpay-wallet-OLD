/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import type { Element } from 'react';
export type ReactElement = Element<*>;

export type Props = {
  locale: string,
  translations: {
    [string]: Object
  }
};
