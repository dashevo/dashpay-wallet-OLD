// @flow
import type Navigation from 'types/navigation';

export type State = {
  username: string,
  avatarUrl: string,
};

export type Props = {
  navigation: Navigation,
  initialValues: State,
};
