/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

let count = 0;

export function generatePortalKey() {
  count += 1;
  return `portal-${count}`;
}
