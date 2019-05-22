import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flex: 1,
  },
  body: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'relative',
    flex: 1,
    transform: [{ translateY: 0 }],
    paddingBottom: 10,
    overflow: 'hidden',
  },
  confirmationTmp: {
    elevation: 3,
    backgroundColor: '#403C6E',
    flex: 1,
  },
  shadow: {
    elevation: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
  confirmButtonInner: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 28,
    padding: 3,
  },
  confirmButtonTmp: {
    padding: 24,
  },
  confirmation: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  triangle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderLeftWidth: 12,
    borderRightColor: 'transparent',
    borderRightWidth: 12,
    borderStyle: 'solid',
    borderTopColor: '#403C6E',
    borderTopWidth: 12,
    height: 0,
    width: 0,
    marginBottom: -10,
  },
  triangleTmp: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 2,
    zIndex: 99,
  },
  footer: {
    backgroundColor: '#211F37',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingTop: 0,
  },

  details: {
    backgroundColor: 'transparent',
    padding: 14,
  },
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  send: {
    fontSize: 28,
    color: '#E2DFFA',
  },
  amount: {
    textAlign: 'center',
    fontSize: 50,
    color: '#E2DFFA',
    lineHeight: 50,
  },
  receiver: {
    fontSize: 16,
    color: '#E2DFFA',
  },
  divider: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  dashIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 21,
    color: '#E2DFFA',
    lineHeight: 21,
  },
  tbody: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: -2,
  },
  icon: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  trow: {
    alignSelf: 'stretch',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 0.5,
    padding: 8,
    height: 56,
  },
  table: {
    overflow: 'hidden',
  },

  overlay: {
    backgroundColor: '#211F37',
    borderColor: '#211F37',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  textMuted: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.25)',
    lineHeight: 20,
  },
  iconMuted: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.25)',
    lineHeight: 20,
  },
  iconActive: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
  textActive: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
  inline: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 48,
    width: 48,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default styles;
