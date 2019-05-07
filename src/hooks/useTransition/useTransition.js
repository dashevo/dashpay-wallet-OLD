import { useReducer, useEffect, useMemo } from 'react';
import reducers from './reducers';

function useTransition(items, config) {
  const [state, dispatch] = useReducer(reducers, {
    items
  });

  useEffect(
    () => {
      dispatch({
        type: 'UPDATE',
        payload: items
      });
    },
    [items]
  );

  function onLeave(item) {
    dispatch({
      type: 'LEAVE',
      payload: item
    });
  }

  return {
    ...state,
    onLeave,
  };
}

export default useTransition;
