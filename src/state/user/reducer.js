/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
export const initialState = {
  network: "testnet", //todo : Should be from state
  mnemonic:
    "differ beach latin proof gorilla aisle apple brain goddess crash dolphin wine",
  transport: "insight"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
