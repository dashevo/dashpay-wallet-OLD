/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
export { default as sequence } from './sequence';

import Driver from '../drivers';

export function isDriver(obj) {
  return obj instanceof Driver;
}
