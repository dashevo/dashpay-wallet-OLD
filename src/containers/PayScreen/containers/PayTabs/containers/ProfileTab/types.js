// @flow
import type Navigation from 'types/navigation';

export type State = {
  address: string,
  image: string,
  name: string,
};

export type Props = {
  navigation: Navigation,
  initialValues: State,
};
