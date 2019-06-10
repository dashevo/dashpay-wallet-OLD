// @flow
import type Navigation from 'types/navigation';

export type Props = {
  getPendingRequests: Function,
  acceptRequest: Function,
  rejectRequest: Function,
  activity: Array,
  navigation: Navigation,
}
