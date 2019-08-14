const createAsyncStatusConstants = baseConstant => ({
  REQUEST: `${baseConstant}_REQUEST`,
  SUCCESS: `${baseConstant}_SUCCESS`,
  FAILURE: `${baseConstant}_FAILURE`,
});

export const FETCH_CURRENT_USER_ASYNC = createAsyncStatusConstants('FETCH_CURRENT_USER_ASYNC');
export const ACCOUNTS_SET_DPA_INITIALIZED = 'ACCOUNTS_SET_DPA_INITIALIZED';
export const ACCOUNTS_ACCOUNT_CREATED = 'ACCOUNTS_ACCOUNT_CREATED';
export const ACCOUNTS_RECEIVE_BALANCE = 'ACCOUNTS_RECEIVE_BALANCE';
export const ACCOUNTS_REGISTER_BUSER_ASYNC = createAsyncStatusConstants('ACCOUNTS_REGISTER_BUSER_ASYNC');
export const ACCOUNTS_GET_UNUSED_ADDRESS = 'ACCOUNTS_GET_UNUSED_ADDRESS';
export const ACCOUNTS_CHANGE_NETWORK_ASYNC = createAsyncStatusConstants('ACCOUNTS_CHANGE_NETWORK_ASYNC');
export const ACCOUNTS_SET_MNEMONIC = 'SET_MNEMONIC';
export const ACCOUNTS_SET_USERNAME = 'SET_USERNAME';

export const CREATE_SEND_PAYMENT_TRANSACTION_REQUEST = 'CREATE_SEND_PAYMENT_TRANSACTION_REQUEST';
export const CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS = 'CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS';
export const CREATE_SEND_PAYMENT_TRANSACTION_FAILURE = 'CREATE_SEND_PAYMENT_TRANSACTION_FAILURE';
export const BROADCAST_SEND_PAYMENT_TRANSACTION_REQUEST = 'BROADCAST_SEND_PAYMENT_TRANSACTION_REQUEST';
export const BROADCAST_SEND_PAYMENT_TRANSACTION_SUCCESS = 'BROADCAST_SEND_PAYMENT_TRANSACTION_SUCCESS';
export const BROADCAST_SEND_PAYMENT_TRANSACTION_FAILURE = 'BROADCAST_SEND_PAYMENT_TRANSACTION_FAILURE';

export const PROFILES_SET_FILTER = 'PROFILES_SET_FILTER';
export const PROFILES_CLEAR_FILTER = 'PROFILES_CLEAR_FILTER';
export const PROFILES_GET_CONTACTS_ASYNC = createAsyncStatusConstants('PROFILES_GET_CONTACTS_ASYNC');
export const PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC = createAsyncStatusConstants('PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC');
export const PROFILES_CONTACT_REQUEST_REJECT_ASYNC = createAsyncStatusConstants('PROFILES_CONTACT_REQUEST_REJECT_ASYNC');
export const PROFILES_CONTACT_REQUEST_SEND_ASYNC = createAsyncStatusConstants('PROFILES_CONTACT_REQUEST_SEND_ASYNC');
export const PROFILES_GET_PENDING_REQUESTS_ASYNC = createAsyncStatusConstants('PROFILES_GET_PENDING_REQUESTS_ASYNC');
export const PROFILES_REGISTER_ASYNC = createAsyncStatusConstants('PROFILES_REGISTER_ASYNC');
export const PROFILES_SEARCH_ASYNC = createAsyncStatusConstants('PROFILES_SEARCH_ASYNC');
export const PROFILES_GET_BY_BUSERNAME_ASYNC = createAsyncStatusConstants('PROFILES_GET_BY_BUSERNAME');

export const TRANSACTIONS_CREATE_TRANSACTION_ASYNC = createAsyncStatusConstants('TRANSACTIONS_CREATE_TRANSACTION_ASYNC');
export const TRANSACTIONS_BROADCAST_TRANSACTION_ASYNC = createAsyncStatusConstants('TRANSACTIONS_BROADCAST_TRANSACTION_ASYNC');
export const TRANSACTIONS_GET_TRANSACTIONS_ASYNC = createAsyncStatusConstants('TRANSACTIONS_GET_TRANSACTIONS_ASYNC');
