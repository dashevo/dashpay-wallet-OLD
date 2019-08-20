/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import createUseInteractable from 'hooks/Animations/Interactable/createUseInteractable';

const MODAL_WIDTH = 250;

const useInteractable = createUseInteractable(send => ({
  initialPosition: { x: MODAL_WIDTH },
  snapPoints: [{ x: 0 }, { x: MODAL_WIDTH }],
  boundaries: { left: 0, bounce: 0.5, haptics: true },
  horizontalOnly: true,
  onSnap(event) {
    send('ANIMATION_START', event);
  },
  onStop(event) {
    send('ANIMATION_END', event);
  },
  onDrag(event) {
    switch (event.nativeEvent.state) {
      case 'start':
        send('DRAG_START', event);
        break;

      case 'end':
        send('DRAG_END', event);
        break;

      default:
    }
  },
}));

export default useInteractable;
