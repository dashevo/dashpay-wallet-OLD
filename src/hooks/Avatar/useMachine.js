/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useMemo } from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const machine = Machine({
  id: 'avatar',
  initial: 'idle',
  states: {
    idle: {
      on: {
        '': [
          {
            target: 'image',
            cond: 'hasImage',
          },
          {
            target: 'text',
            cond: 'hasDisplayName',
          },
          {
            target: 'icon',
          },
        ],
      },
    },
    image: {
      on: {
        FAILURE: [
          {
            target: 'text',
            cond: 'hasDisplayName',
          },
          {
            target: 'icon',
          },
        ],
      },
    },
    text: {
      RESET: {
        target: 'idle',
      },
    },
    icon: {
      RESET: {
        target: 'idle',
      },
    },
  },
});

// We should soon have 'createUseMachine' custom hook.
export default (props) => {
  const { user = {} } = props;
  const { imageURL = '', displayName = '' } = user;

  const memoMachine = useMemo(
    () => machine
      .withConfig({
        guards: {
          hasDisplayName: ({ letter }) => !!letter,
          hasImage: ({ imageURL }) => !!imageURL,
        },
      })
      .withContext({
        letter: displayName.charAt(0).toUpperCase(),
        imageURL,
      }),
    [imageURL, displayName],
  );

  return useMachine(memoMachine);
};
