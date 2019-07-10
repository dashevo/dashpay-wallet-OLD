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
  const { avatarUrl = '', username = '' } = user;

  const memoMachine = useMemo(
    () => machine
      .withConfig({
        guards: {
          hasDisplayName: ctx => !!ctx.letter,
          hasImage: ctx => !!ctx.avatarUrl,
        },
      })
      .withContext({
        letter: (username || '').charAt(0).toUpperCase(),
        avatarUrl,
      }),
    [avatarUrl, username],
  );

  return useMachine(memoMachine);
};
