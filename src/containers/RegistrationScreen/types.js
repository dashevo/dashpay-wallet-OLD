// @flow
export type Props = {
  username: string,
  isSubmitting: boolean,
  navigation: {
    reset: Function,
  },
};

export type FormValues = {
  username: string,
};
