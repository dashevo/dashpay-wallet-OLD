// @flow
import type Navigation from 'types/navigation';

export type Props = {
  username: string,
  isSubmitting: boolean,
  navigation: Navigation,
  registerBUser: Function,
  registerProfile: Function,
};

export type FormValues = {
  username: string,
};
