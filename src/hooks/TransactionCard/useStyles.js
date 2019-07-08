/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

function styles() {
  return {
    card: {
      marginBottom: 15,
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderRadius: 6,
      borderStyle: 'solid',
      borderWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    header: {
      backgroundColor: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginRight: -5,
      marginLeft: -5,
    },
    col: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    // body: {
    //
    // },
    body: {
      backgroundColor: '#EAEBEC',
      borderColor: '#EAEBEC',
      borderRadius: 5,
      padding: 12,
    },
    footer: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    underlinedText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#999999',
      fontSize: 16,
    },

    footer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 16,
    },
    caption: {
      color: '#999999',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    address: {
      color: '#999999',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textAlign: 'center',
      flex: -1,
    },
    divider: {
      alignSelf: 'stretch',
      backgroundColor: '#ddd',
      marginLeft: 7.5,
      marginRight: 7.5,
      width: 1,
    },
  };
}

export default makeStyles(styles);
