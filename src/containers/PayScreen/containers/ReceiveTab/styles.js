/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['card']: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 0,
    borderRadius: 6,
    marginTop: 15,
    elevation: 2
  },
  ['cardHeader']: {
    paddingBottom: 15
  },
  ['cardBody']: {
    backgroundColor: '#088BE2',
    borderColor: '#088BE2',
    borderWidth: 0,
    borderRadius: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  ['cardFooter']: {
    paddingTop: 15
  },
  ['cardImage']: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0
  },
  ['cardRow']: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  ['cardCol']: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  ['cardTmp']: {
    flex: 1,
    paddingLeft: 7.5,
    paddingRight: 7.5
  },
  ['cardTitle']: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  ['cardSubtitle']: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    opacity: 0.5
  },
  ['cardDate']: {
    color: '#000',
    fontSize: 9,
    textAlign: 'left',
    opacity: 0.25
  },

  ['cardFiat']: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left'
  },
  ['cardDash']: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    opacity: 0.5
  },
});

export default styles;
