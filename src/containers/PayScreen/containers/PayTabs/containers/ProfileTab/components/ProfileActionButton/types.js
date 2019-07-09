// @flow
import type { Profile } from 'state/profiles/types';

export type Props = Profile & {
  sendRequest: (username: string) => Promise<any>,
};
