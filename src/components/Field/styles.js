/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import * as variables from '../variables';

export default StyleSheet.create({
  ['column']: {
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  ['row']: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ['label']: {
    flex: 1,
    paddingBottom: 5,
    paddingTop: 5
  },
  // ['input']: {
  //   // selectionColor: variables.text.color,
  //   // placeholderTextColor: changeColorAlpha(variables.text.color, 0.5),
  //   // backgroundColor: variables.paperColor,
  //   // height: 55,
  //   // paddingHorizontal: variables.mediumGutter,
  //   // paddingVertical: 18,
  //   // underlineColorAndroid: 'transparent',
  //
  //   borderRadius: 6,
  //   borderWidth: 1,
  //   color: '#888888',
  //   flex: 1,
  //   fontSize: 15,
  //   height: 55,
  //   paddingVertical: 6,
  //   paddingHorizontal: 12
  // },
  ['label__center']: {
    textAlign: 'center'
  },
  ['input__center']: {
    textAlign: 'center'
  },
  ['input__bordered']: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.12)'
  },
  ['body']: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  ['input']: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 0,
    borderBottomWidth: 1,
    textAlign: 'right',
    color: '#053273',
    flex: 1,
    fontSize: 21,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  ['feedbackBox']: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    borderRadius: 0,
    borderWidth: variables.buttonBorderWidth,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    height: 45,
    justifyContent: 'center'
  },
  ['feedbackText']: {
    fontSize: 14,
    color: '#000000'
  }
});
