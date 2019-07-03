import actions from './actions';
import useStyles from './useStyles';
import useMachine from './useMachine';

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

  return {
    bind,
    state,
    styles,
  };
}

export default useAvatar;
