import actions from './actions';
import useStyles from './useStyles';
import useMachine from './useMachine';
import { useEffect } from 'react';

function useAvatar(props) {
  const source = { uri: props.user.avatarUrl };

  const styles = useStyles(props);
  const [state, dispatch] = useMachine(props);

  const bind = {
    source,
    onError() {
      dispatch(actions.imageError());
    },
  };

  useEffect(() => dispatch(actions.reset()), [props.user.avatarUrl]);

  return {
    bind,
    state,
    styles,
  };
}

export default useAvatar;
