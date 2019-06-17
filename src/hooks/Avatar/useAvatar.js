/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import actions from './actions';
import useStyles from './useStyles';
import useMachine from './useMachine';

function useAvatar(props) {
  const source = { uri: props.user.imageURL };

  const styles = useStyles(props);
  const [state, dispatch] = useMachine(props);

  const bind = {
    source,
    onError() {
      dispatch(actions.imageError());
    },
  };

  return {
    bind,
    state,
    styles,
  };
}

export default useAvatar;
