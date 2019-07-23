// @flow
import type { NavigationProps } from 'types/navigation';

export type ProfileForm = {
  username: string,
  bio: string,
  avatarUrl: string,
}

export type Props = NavigationProps & {
  username: string,
  registerBUser: (username: string) => Promise<any>,
  registerProfile: (profile: ProfileForm) => Promise<any>,
};

export type FormValues = {
  username: string,
};
