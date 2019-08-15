/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// /////////////////////////////////////////////////////////////////////////////
// This file is still in progress.                                            //
// /////////////////////////////////////////////////////////////////////////////

const ENTER = 'ENTER';
const UPDATE = 'UPDATE';
const LEAVE = 'LEAVE';

type Item = {
  key: string,
};

type Items = Array<Item>;

export function diffItems(state, nextKeys, nextItems: Items) {
  const { nextKeys: prevKeys, nextItems: prevItems } = state;

  const current = {
    ...state.current,
  };
  let deleted = [...state.deleted];

  const currentKeys = Object.keys(current);
  const currentSet = new Set(currentKeys);
  const nextSet = new Set(nextKeys);

  const added = nextKeys.filter(key => !currentSet.has(key));
  const removed = state.transitions
    .filter(item => !item.destroyed && !nextSet.has(item.key))
    .map(item => item.key);

  const updated = nextKeys.filter(item => currentSet.has(item));

  added.forEach((key) => {
    const keyIndex = nextKeys.indexOf(key);
    const item = nextItems[keyIndex];
    const status = ENTER;

    deleted = deleted.filter(t => t.key !== key);

    current[key] = {
      item,
      status,
      key,
    };
  });

  updated.forEach((key) => {
    const keyIndex = nextKeys.indexOf(key);
    const item = nextItems[keyIndex];
    const status = UPDATE;

    current[key] = {
      item,
      status,
      key,
    };
  });

  removed.forEach((key) => {
    const keyIndex = prevKeys.indexOf(key);
    const item = prevItems[keyIndex];
    const status = LEAVE;

    deleted.unshift({
      ...current[key],
      destroyed: true,
      left: prevKeys[Math.max(0, keyIndex - 1)],
      right: prevKeys[Math.min(prevKeys.length, keyIndex + 1)],
      item,
      status,
      key,
    });

    delete current[key];
  });

  let out = nextKeys.map(key => current[key]);

  deleted.forEach(({ left, right, ...item }) => {
    let pos = out.findIndex(t => t.key === left);
    if (pos !== -1) pos += 1;
    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });

  return {
    ...state,
    changed: added.length || removed.length || updated.length,
    transitions: out,
    current,
    deleted,
    nextKeys,
    nextItems,
  };
}
