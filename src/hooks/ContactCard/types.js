export type Props = {
  timestamp: string,
  onAccept: Function,
  onReject: Function,
  sender: {
    displayName: string,
    imageURL: string,
  },
};
