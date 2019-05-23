export type Props = {
  getPendingContactRequests: Function,
  acceptBlockchainContact: Function,
  rejectBlockchainContact: Function,
  activity: Array,
  navigation: {
    navigate: Function,
  },
}
