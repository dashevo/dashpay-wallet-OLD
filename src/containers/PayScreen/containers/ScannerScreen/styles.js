import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'utilities';

const overlayBaseStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.6)',
};

const cornerBaseStyle = {
  position: 'absolute',
  borderColor: '#fff',
  backgroundColor: 'transparent',
  borderWidth: 2,
  width: 10,
  height: 10,
};

const createStyles = ({ width, height }) => {
  const safeAreaHeight = height - getStatusBarHeight();
  const BOX_MARGIN = 30;
  const BOX_SIZE = width - BOX_MARGIN * 2;
  const BOX_TOP = safeAreaHeight / 2 - BOX_SIZE / 2;
  const BOX_BOTTOM = BOX_TOP + BOX_SIZE;
  const BOX_RIGHT = width - BOX_MARGIN;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    topLeftCorner: {
      ...cornerBaseStyle,
      top: BOX_TOP - 1,
      left: BOX_MARGIN - 1,
      borderBottomWidth: 0,
      borderRightWidth: 0,
    },
    topRightCorner: {
      ...cornerBaseStyle,
      top: BOX_TOP - 1,
      right: BOX_MARGIN - 1,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
    },
    bottomLeftCorner: {
      ...cornerBaseStyle,
      bottom: safeAreaHeight - BOX_BOTTOM - 1,
      left: BOX_MARGIN - 1,
      borderTopWidth: 0,
      borderRightWidth: 0,
    },
    bottomRightCorner: {
      ...cornerBaseStyle,
      bottom: safeAreaHeight - BOX_BOTTOM - 1,
      right: BOX_MARGIN - 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
    },
    topOverlay: {
      ...overlayBaseStyle,
      top: 0,
      left: 0,
      right: 0,
      bottom: safeAreaHeight - BOX_TOP,
    },
    leftOverlay: {
      ...overlayBaseStyle,
      top: BOX_TOP,
      left: 0,
      right: BOX_RIGHT,
      bottom: safeAreaHeight - BOX_BOTTOM,
    },
    rightOverlay: {
      ...overlayBaseStyle,
      top: BOX_TOP,
      left: BOX_RIGHT,
      right: 0,
      bottom: safeAreaHeight - BOX_BOTTOM,
    },
    bottomOverlay: {
      ...overlayBaseStyle,
      top: BOX_BOTTOM,
      left: 0,
      right: 0,
      bottom: 0,
    },
    header: {
      position: 'absolute',
      top: 40,
      right: 0,
      alignItems: 'flex-start',
      left: 25,
    },
    headerText: {
      color: '#fff',
      backgroundColor: 'transparent',
      fontSize: 22,
      fontWeight: '400',
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    cancelText: {
      color: '#fff',
      backgroundColor: 'transparent',
      fontSize: 17,
      fontWeight: '500',
      textAlign: 'center',
    },
  });
};

export default createStyles;
