/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createTransition } from 'hooks/Animations/Transition';

const Transition = createTransition({
  onEnter: () => ({
    fromValue: 0,
    toValue: 240,
  }),
  onLeave: () => ({
    fromValue: 240,
    toValue: 0,
  }),
  getStyles: value => ({
    paddingTop: value,
    position: 'relative',
  }),
});

export default Transition;
