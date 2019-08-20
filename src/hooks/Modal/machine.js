/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { Machine, assign } from 'xstate';

// Internal dependencies
import { SHOW_INDEX, HIDE_INDEX } from './constants';

const machine = Machine(
  {
    id: 'modal',
    initial: 'hidden',
    context: {},
    states: {
      show: {
        exit: 'onShown',
        on: {
          ANIMATION_START: {
            actions: 'storeNativeEvent',
          },
          ANIMATION_END: {
            cond: 'isShowIndex',
            target: 'shown',
          },
        },
      },
      shown: {
        exit: 'onHide',
        on: {
          HIDE: {
            actions: 'hide',
            target: 'hide',
          },
          DRAG_START: {
            actions: 'storeNativeEvent',
          },
          DRAG_END: {
            actions: 'storeNativeEvent',
            cond: 'isHideIndex',
            target: 'hide',
          },
        },
      },
      hide: {
        exit: 'onHidden',
        on: {
          ANIMATION_START: {
            actions: 'storeNativeEvent',
          },
          ANIMATION_END: {
            cond: 'isHideIndex',
            target: 'hidden',
          },
        },
      },
      hidden: {
        exit: 'onShow',
        on: {
          SHOW: {
            actions: 'show',
            target: 'show',
          },
        },
      },
    },
  },
  {
    actions: {
      storeNativeEvent: assign({
        nativeEvent: (ctx, evt) => evt.nativeEvent,
      }),
      onShow: () => {},
      onHide: () => {},
      onShown: () => {},
      onHidden: () => {},
    },
    guards: {
      isShowIndex(ctx) {
        return ctx.nativeEvent.index === SHOW_INDEX;
      },
      isHideIndex(ctx, evt) {
        return evt.type === 'DRAG_END'
          ? evt.nativeEvent.index === HIDE_INDEX
          : ctx.nativeEvent.index === HIDE_INDEX;
      },
    },
  },
);

export default machine;
