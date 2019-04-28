// @flow
export type Props = {
  username: string,
  isSubmitting: boolean,
  navigation: {
    goBack: Function,
  },
};

export type FormValues = {
  username: string,
};
