/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import {
  StackViewTransitionConfigs,
  NavigationTransitionProps,
  TransitionConfig
} from 'react-navigation';

const SlideFromRight = StackViewTransitionConfigs.SlideFromRightIOS;
const SlideFromBottom = StackViewTransitionConfigs.ModalSlideFromBottomIOS;

function transitionConfig(
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: ?NavigationTransitionProps,
  isModal: boolean
): TransitionConfig {
  return isModal ? SlideFromBottom : SlideFromRight;
}

const config = {
  headerMode: 'none',
  transitionConfig
};

export default config;
