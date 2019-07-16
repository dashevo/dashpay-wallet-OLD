import { createSelector } from 'reselect';

export const accountSelector = ({ account }) => account;

export const balanceSelector = createSelector(
  accountSelector,
  ({ balance }) => balance,
);

export const mnemonicSelector = createSelector(
  accountSelector,
  ({ mnemonic }) => mnemonic,
);

export const usernameSelector = createSelector(
  accountSelector,
  ({ username }) => username,
);

export const currentUserSelector = createSelector(
  accountSelector,
  ({ username }) => ({
    username,
    // TODO: avatarUrl should be fetched from DAPI
    avatarUrl: `https://api.adorable.io/avatars/285/${username}.png`,
  }),
);

export const dpaIsInitializedSelector = createSelector(
  accountSelector,
  ({ dpaIsInitialized }) => dpaIsInitialized,
);
