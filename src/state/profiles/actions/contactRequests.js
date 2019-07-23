import {
  PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC,
  PROFILES_CONTACT_REQUEST_REJECT_ASYNC,
  PROFILES_CONTACT_REQUEST_SEND_ASYNC,
  PROFILES_GET_PENDING_REQUESTS_ASYNC,
} from 'state/action-types';

export const sendContactRequest = receiverUsername => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  username: receiverUsername,
  types: PROFILES_CONTACT_REQUEST_SEND_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    const [sender] = await dashPayDpa.profile.getByBUsername(username);
    sender.buser.own(dashPayDpa.getBUserSigningPrivateKey());
    const [receiver] = await dashPayDpa.profile.getByBUsername(receiverUsername);
    return sender.contactRequest.create({ receiver }).send();
  },
});

export const getPendingContactRequests = () => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  types: PROFILES_GET_PENDING_REQUESTS_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    try {
      const [profile] = await dashPayDpa.profile.getByBUsername(username);
      return profile.contactRequest.getAllPending();
    } catch (e) {
      if (e.name === 'BUserNotFoundError') {
        console.warn('BUserNotFound', username);
      } else {
        throw new Error(e);
      }
      return false;
    }
  },
});

export const acceptContactRequest = senderUsername => (
  dispatch, getState, { account: { dashPayDpa } },
) => dispatch({
  username: senderUsername,
  types: PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC,
  async asyncTask() {
    const { username } = getState().account;
    const [profile] = await dashPayDpa.profile.getByBUsername(username);
    profile.buser.own(dashPayDpa.getBUserSigningPrivateKey());
    const pendingContactRequests = await profile.contactRequest.getAllPending();
    const contactRequest = pendingContactRequests
      .received
      .find(({ sender: { buser } }) => buser.username === senderUsername);
    return profile.contactRequest.accept(contactRequest);
  },
});

export const rejectContactRequest = contact => dispatch => dispatch({
  contact,
  types: PROFILES_CONTACT_REQUEST_REJECT_ASYNC,
  async asyncTask() {
    // TODO: implement contact rejection
    return Promise.resolve(contact);
  },
});
