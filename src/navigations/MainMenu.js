/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { FormattedNumber } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

// Tmp
import ParallaxScrollView from './tmp';

// Internal dependencies
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import { Logo } from 'components';
import { selectBalance } from 'state';

function MainMenu(props: Props): React.Element<any> {
  const { balance = 0 } = props;
  const {
    dashAmount = balance,
    fiatAmount = balance * 82.45,
    dashSymbol = 'dash',
    fiatSymbol = 'usd'
  } = props;
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        renderHeader={scrollY => (
          <View style={styles.header}>
            <View style={styles.row}>
              <Logo style={styles.logo} />
            </View>
            <View style={styles.amount}>
              <View style={styles.row}>
                <Icon style={styles.dashIcon} name={dashSymbol} />
                <FormattedNumber value={dashAmount}>
                  {value => <Text style={styles.dashText}>{value}</Text>}
                </FormattedNumber>
              </View>
              <View style={styles.row}>
                <Icon style={styles.fiatIcon} name={fiatSymbol} />
                <FormattedNumber value={fiatAmount}>
                  {value => <Text style={styles.fiatText}>{value}</Text>}
                </FormattedNumber>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.hideMenu}>
              <Icon style={styles.buttonIcon} name={'times'} />
            </TouchableOpacity>
          </View>
        )}
        renderBody={scrollY => (
          <View style={styles.body}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Home'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{'Menu item'}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = {
  ['container']: {
    position: 'relative',
    backgroundColor: '#211F24',
    borderColor: '#211F24',
    flex: 1
  },
  ['contentContainerStyle']: {
    padding: 16
  },
  ['header']: {},
  ['logo']: {
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 48,
    marginBottom: 0,
    width: 210,
    height: 70
  },
  ['item']: {
    marginBottom: 0,
    marginTop: 4,
    alignItems: 'center',
    backgroundColor: '#2A282B',
    borderColor: '#2A282B',
    borderRadius: 3,
    borderWidth: 0,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
    position: 'relative'
  },
  ['itemText']: {
    color: '#666469',
    fontSize: 14
  },
  ['row']: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 0
  },
  ['amount']: {
    paddingBottom: 48,
    paddingTop: 48
  },
  ['dashIcon']: {
    color: '#EFEEF1',
    fontSize: 27,
    marginRight: 8
  },
  ['dashText']: {
    color: '#EFEEF1',
    fontSize: 27
  },
  ['fiatIcon']: {
    color: '#3C3B40',
    fontSize: 19,
    marginRight: 8
  },
  ['fiatText']: {
    color: '#3C3B40',
    fontSize: 19
  },
  ['button']: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ['buttonIcon']: {
    color: '#666469',
    fontSize: 18
  }
};

const selector = createSelector([selectBalance], balance => ({ balance }));

MainMenu = connect(selector)(MainMenu);

export default MainMenu;
