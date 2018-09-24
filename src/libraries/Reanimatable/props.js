/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { TimingDriver } from './drivers';

function driver(configs) {
  return new TimingDriver(configs);
}

export default {
  animations: {},
  toValue: 1,
  driver
};
