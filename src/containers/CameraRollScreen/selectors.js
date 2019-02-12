/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from "reselect";
import { selectCameraRoll } from "state/cameraRoll/selectors";

const cameraRollSelector = createSelector(
  selectCameraRoll,
  cameraRoll => cameraRoll
);

export default cameraRollSelector;
