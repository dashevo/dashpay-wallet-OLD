/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { selectCamera } from 'state/camera/selectors';

const cameraSelector = createSelector(selectCamera, camera => camera);

export default cameraSelector;
