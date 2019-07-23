// @flow
import type { NavigationProps } from 'types/navigation';

export type Props = NavigationProps & {
  getPendingContactRequests: Function,
  acceptContactRequest: Function,
  rejectContactRequest: Function,
  activity: Array,
}
