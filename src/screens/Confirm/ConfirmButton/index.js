import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import useTransition from 'hooks/Transition';
import Transition from './Transition';
import ConfirmButton from './components/ConfirmButton';

import FailureMessage from './components/FailureMessage';
import SuccessMessage from './components/SuccessMessage';

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

function onChange(props) {
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

function Confirm(props) {
  const [items, setItems] = useState(() => {
    async function handleOnDone(e) {
      props.onConfirmation().then(handleSuccess, handleFailure);
    }

    async function handleSuccess() {
      console.log('__handleSuccess__');
      await delay(3000);
      setItems(successMessage);
      await delay(10000);
      setItems([]);
      props.goBack();
    }

    async function handleFailure() {
      console.log('__handleFailure__');
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

    return [
      {
        key: 'glkt0FNvOH',
        getComponet: () => ConfirmButton,
        onPress: handleOnDone,
      },
    ];
  });

  const transition = useTransition(items, config);

  console.log('transition.items', transition.items);

  return (
    <View style={styles.container}>
      {transition.items.map(({ key, ...itemProps }) => (
        <Transition key={key} {...itemProps} dispatch={transition.dispatch} />
      ))}
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
    position: 'relative',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 25,
  },
};

export default Confirm;
