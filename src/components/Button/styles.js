/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import * as variables from '../variables';

export default StyleSheet.create({
  ['box']: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#088BE2',
    borderColor: '#088BE2',
    borderRadius: 0,
    borderWidth: 0,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    height: 50,
    justifyContent: 'center'
  },
  ['row']: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center'
  },
  ['left']: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: variables.buttonHeight,
    width: variables.buttonHeight
  },
  ['body']: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  ['right']: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: variables.buttonHeight,
    width: variables.buttonHeight
  },
  ['text']: {
    fontSize: 16
  },
  ['icon']: {
    fontSize: 16
  },
  ['box__primary']: {
    backgroundColor: '#088BE2',
    borderColor: '#088BE2'
  },
  ['text__primary']: {
    color: '#fff'
  },
  ['icon__primary']: {
    color: variables.componentPrimaryColor
  },
  ['box__primary.active']: {
    backgroundColor: variables.componentPrimaryActiveBackgroundColor,
    borderColor: variables.componentPrimaryActiveBorderColor
  },
  ['text__primary.active']: {
    color: variables.componentPrimaryActiveColor,
    opacity: 0.65
  },
  ['icon__primary.active']: {
    color: variables.componentPrimaryActiveColor,
    opacity: 0.65
  },
  ['box__primary.disabled']: {
    backgroundColor: variables.componentPrimaryDisabledBackgroundColor,
    borderColor: variables.componentPrimaryDisabledBorderColor
  },
  ['text__primary.disabled']: {
    color: variables.componentPrimaryDisabledColor
  },
  ['icon__primary.disabled']: {
    color: variables.componentPrimaryDisabledColor
  },
  ['box__secondary']: {
    backgroundColor: variables.componentSecondaryBackgroundColor,
    borderColor: variables.componentSecondaryBorderColor
  },
  ['text__secondary']: {
    color: variables.componentSecondaryColor
  },
  ['icon__secondary']: {
    color: variables.componentSecondaryColor
  },
  ['box__secondary.active']: {
    backgroundColor: variables.componentSecondaryActiveBackgroundColor,
    borderColor: variables.componentSecondaryActiveBorderColor
  },
  ['text__secondary.active']: {
    color: variables.componentSecondaryActiveColor,
    opacity: 0.65
  },
  ['icon__secondary.active']: {
    color: variables.componentSecondaryActiveColor,
    opacity: 0.65
  },
  ['box__secondary.disabled']: {
    backgroundColor: variables.componentSecondaryDisabledBackgroundColor,
    borderColor: variables.componentSecondaryDisabledBorderColor
  },
  ['text__secondary.disabled']: {
    color: variables.componentSecondaryDisabledColor
  },
  ['icon__secondary.disabled']: {
    color: variables.componentSecondaryDisabledColor
  },
  // TODO: We have to talk to Chris to understand
  // if we will have success, info, failure variants?
  ['box__success']: {
    backgroundColor: '#28a745',
    borderColor: '#28a745'
  },
  ['text__success']: {
    color: 'white'
  },
  ['box__failure']: {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545'
  },
  ['text__failure']: {
    color: 'white'
  }
});
