const RECEIVE = 'RECEIVE';
const SENT = 'SENT';

export function getTitle(translate, sender) {
  if (sender.displayName) {
    return sender.displayName;
  }
  if (sender.username) {
    return sender.username;
  }
  return translate('Dash Address');
}

export function getSubtitle(translate, type, receiver) {
  if (type === RECEIVE) {
    return translate('Paid Me');
  }
  if (receiver.displayName) {
    return translate('Paid {{ displayName }}', receiver);
  }
  if (receiver.username) {
    return translate('Paid {{ username }}', receiver);
  }
  return translate('Paid Dash Address');
}

export function getAddress(translate, type, rest) {
  if (type === SENT) {
    return translate('To {{ address }}', rest);
  }
  return translate('From {{ address }}', rest);
}
