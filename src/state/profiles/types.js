// @flow
import { PROFILE_STATE } from './constants';

export type Profile = {
  username: string,
  avatarUrl: ?string,
  state: $Values<PROFILE_STATE>
}
