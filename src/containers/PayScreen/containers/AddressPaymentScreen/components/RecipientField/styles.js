// @flow

const styles = (theme: Object): Object => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.fieldInputBackgroundColor,
    borderColor: theme.fieldInputBorderColor,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  right: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 24,
    borderWidth: 0,
    color: theme.fieldInputColor,
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    height: 50,
    lineHeight: 24,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 12,
    textAlign: 'center',
  },
});

export default styles;
