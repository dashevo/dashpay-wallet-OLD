// @flow
import type { NavigationProps } from 'types/navigation';

export type Props = NavigationProps & {
  acceptContactRequest: Function,
  rejectContactRequest: Function,
  activity: Array,
}
