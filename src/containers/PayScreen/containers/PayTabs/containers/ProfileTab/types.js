// @flow

export type State = {
  address: String,
  image: String,
  name: String,
};

export type Props = {
  navigation: {
    navigate: Function,
    goBack: Function,
  },
  initialValues: State,
  updateLocalContact: Function,
  deleteLocalContact: Function,
};
