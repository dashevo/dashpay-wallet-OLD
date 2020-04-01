import {
  TRANSACTIONS_GET_TRANSACTIONS_ASYNC,
} from 'state/action-types';

export const initialState = {
  history: [],
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_GET_TRANSACTIONS_ASYNC.SUCCESS:
      return {
        ...state,
        history: action.response,
      };

    default:
      return {
        ...state,
      };
  }
};

export default transactions;
