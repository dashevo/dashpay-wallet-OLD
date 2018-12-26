import * as ActionsTypes from './constants';

export const addContact = contact => ({
  contact,
  type: ActionsTypes.ADD_CONTACT,
});

export const removeContact = address => ({
  address,
  type: ActionsTypes.REMOVE_CONTACT,
});

export const updateContact = contact => ({
  contact,
  type: ActionsTypes.UPDATE_CONTACT,
});

export const contactRequestSent = address => ({
  address,
  type: ActionsTypes.CONTACT_REQUEST_SENT,
});

export const contactRequestReceived = contact => ({
  contact,
  type: ActionsTypes.CONTACT_REQUEST_RECEIVED,
});

export const approveContactRequest = address => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.ACCEPT_CONTACT_REQUEST,
        ActionsTypes.ACCEPT_CONTACT_SUCCESS,
        ActionsTypes.ACCEPT_CONTACT_FAILURE
      ],
      async asyncTask(state) {
        try {
          const dashpayDap = account.getDAP('DashPayDAP');
          await dashpayDap.acceptContactRequest(address);
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};
