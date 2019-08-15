/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// /////////////////////////////////////////////////////////////////////////////
// This file is still in progress.                                            //
// /////////////////////////////////////////////////////////////////////////////

// External dependencies
import {
  useEffect, useState, useRef, useCallback,
} from 'react';

// Internal dependencies
import Controller from './Controller';
import { diffItems } from './helper';

function emptyFunction() {}

export function useForceUpdate() {
  const [, f] = useState(false);
  const forceUpdate = useCallback(() => f(v => !v), []);
  return forceUpdate;
}

/* eslint no-param-reassign: "error" */
function cleanUp(state, key) {
  const filter = t => t.key !== key;
  state.current.instances.delete(key);
  state.current.transitions = state.current.transitions.filter(filter);
  state.current.deleted = state.current.deleted.filter(filter);
  state.current.forceUpdate();
}

function useTransition(config, items) {
  const forceUpdate = useForceUpdate();
  const state = useRef(null);
  const {
    onInIt = emptyFunction,
    onEnter = emptyFunction,
    onLeave = emptyFunction,
    onChange = emptyFunction,
    getStyles = emptyFunction,
  } = config;

  if (state.current === null) {
    state.current = {
      deleted: [],
      current: {},
      transitions: [],
      instances: new Map(),
      forceUpdate,
      nextKeys: [],
      nextItems: [],
    };
  }

  const { length } = state.current.transitions.length;

  useEffect(
    () => () => {
      Array.from(state.current.instances).map(([, c]) => c.destroy());
      state.current.instances.clear();
    },
    [],
  );

  if (Object.is(state.current.nextItems, items)) {
    return {
      items: state.current.transitions.map(({ item, status, key }, index) => ({
        length,
        getStyles,
        item,
        status,
        key,
        index,
        value: state.current.instances.get(key).getValue(),
      })),
    };
  }

  const keys = items.map(item => item.key);

  state.current = diffItems(state.current, keys, items);

  if (state.current.changed) {
    state.current.transitions.forEach((transition, index) => {
      const { key } = transition;

      const info = state.current.transitions.reduce((acc, item) => {
        acc[item.key] = item.status;
        return acc;
      }, {});

      if (!state.current.instances.has(key)) {
        state.current.instances.set(key, new Controller(onInIt(transition, index, info)));
      }

      const ctrl = state.current.instances.get(key);

      if (transition.status === 'ENTER') {
        ctrl.update({
          ...onEnter(transition, index, info),
          onEnd: () => {},
          status: 'ENTER',
          key,
        });
      }

      if (transition.status === 'UPDATE') {
        ctrl.update({
          ...onChange(transition, index, info),
          onEnd: () => {},
          status: 'UPDATE',
          key,
        });
      }

      if (transition.status === 'LEAVE') {
        ctrl.update({
          ...onLeave(transition, index, info),
          onEnd: () => cleanUp(state, key),
          status: 'LEAVE',
          key,
        });
      }
    });
  }

  return {
    items: state.current.transitions.map(({ item, status, key }, index) => ({
      length,
      getStyles,
      item,
      status,
      key,
      index,
      value: state.current.instances.get(key).getValue(),
    })),
  };
}


export default useTransition;
