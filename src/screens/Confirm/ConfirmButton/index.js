import React, { useState } from 'react';
import { View } from 'react-native';

import useTransition from 'hooks/Transition';
import Transition from './Transition';
import ConfirmButton from './components/ConfirmButton';

import FailureMessage from './components/FailureMessage';
import SuccessMessage from './components/SuccessMessage';
import useStyles from './useStyles';

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function onEnter({ animatedValue }) {
  return {
    // Props apply for entering elements
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 50,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      right: 0,
      transform: [{ translateX: animatedValue }],
    },
  };
}

function onChange() {
  // Props apply for changing elements
  return {};
}

function onExit({ animatedValue }) {
  // Props apply for leaving elements
  return {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 50,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      right: 0,
      transform: [{ translateX: animatedValue }],
    },
  };
}

const config = {
  onChange,
  onEnter,
  onExit,
};

const successMessage = [{ key: 'qoke1', getComponet: () => SuccessMessage }];
const failureMessage = [{ key: 'qoke2', getComponet: () => FailureMessage }];

type ConfirmProps = {
  onConfirmation: Function,
  goBack: Function,
};

function Confirm(props: ConfirmProps) {
  const styles = useStyles();
  const [items, setItems] = useState(() => {
    async function handleSuccess() {
      await delay(3000);
      setItems(successMessage);
      await delay(10000);
      setItems([]);
      props.goBack();
    }

    async function handleFailure() {
      await delay(3000);
      setItems(failureMessage);
      await delay(10000);
      setItems([
        {
          key: 'glkt0FNvOH',
          getComponet: () => ConfirmButton,
          onPress: handleOnDone,
        },
      ]);
    }

    async function handleOnDone() {
      props.onConfirmation().then(handleSuccess, handleFailure);
    }

    return [
      {
        key: 'glkt0FNvOH',
        getComponet: () => ConfirmButton,
        onPress: handleOnDone,
      },
    ];
  });

  const transition = useTransition(items, config);

  return (
    <View style={styles.container}>
      {transition.items.map(({ key, ...itemProps }) => (
        <Transition key={key} {...itemProps} dispatch={transition.dispatch} />
      ))}
    </View>
  );
}

export default Confirm;
