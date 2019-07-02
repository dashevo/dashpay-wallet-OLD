import {
  CONTACTS_SET_FILTER,
  CONTACTS_CLEAR_FILTER,
  CONTACTS_GET_CONTACTS_ASYNC,
  CONTACTS_ACCEPT_REQUEST_ASYNC,
  CONTACTS_REJECT_REQUEST_ASYNC,
  CONTACTS_SEND_REQUEST_ASYNC,
  CONTACTS_GET_PENDING_REQUESTS_ASYNC,
} from 'state/action-types';

const getProfileAndBUserByUsername = async (dashPayDap, username) => {
  const [profile] = await dashPayDap.profile.getByBUsername(username);
  const regTxId = profile.$meta.userId;
  const bUser = await dashPayDap.buser.get(regTxId);
  await bUser.synchronize();
  profile.setOwner(bUser);
  return profile;
};

export const setFilter = filterParams => ({
  type: CONTACTS_SET_FILTER,
  filterParams,
});

export const clearFilter = () => ({
  type: CONTACTS_CLEAR_FILTER,
});

export const sendRequest = address => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  address,
  types: CONTACTS_SEND_REQUEST_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    const sender = await getProfileAndBUserByUsername(dashPayDap, username);
    sender.buser.own(dashPayDap.getBUserSigningPrivateKey());
    const receiver = await getProfileAndBUserByUsername(dashPayDap, address);
    return sender.contactRequest.create({ receiver }).send();
  },
});

export const getPendingRequests = () => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  types: CONTACTS_GET_PENDING_REQUESTS_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    const profile = await getProfileAndBUserByUsername(dashPayDap, username);
    return profile.contactRequest.getAllPending();
  },
});

export const getContacts = () => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  types: CONTACTS_GET_CONTACTS_ASYNC,
  asyncTask: async () => {
    const { username } = getState().account;
    const profile = await getProfileAndBUserByUsername(dashPayDap, username);
    return profile.contact.getAll();
  },
});

export const acceptRequest = senderUserId => (
  dispatch, getState, { account: { dashPayDap } },
) => dispatch({
  userId: senderUserId,
  types: CONTACTS_ACCEPT_REQUEST_ASYNC,
  async asyncTask() {
    const { username } = getState().account;
    const profile = await getProfileAndBUserByUsername(dashPayDap, username);
    profile.buser.own(dashPayDap.getBUserSigningPrivateKey());
    const pendingContactRequests = await profile.contactRequest.getAllPending();
    const contactRequest = pendingContactRequests
      .received
      .find(({ sender: { $meta: { userId } } }) => userId === senderUserId);
    return profile.contactRequest.accept(contactRequest);
  },
});

export const rejectRequest = contact => dispatch => dispatch({
  contact,
  types: CONTACTS_REJECT_REQUEST_ASYNC,
  async asyncTask() {
    // TODO: implement contact rejection
    return Promise.resolve(contact);
  },
});
