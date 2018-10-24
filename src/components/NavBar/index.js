/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import * as React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Icon } from 'components';
import { IconButton } from 'components';
import { Animation } from 'components';
import { SwipeableRow } from 'components';
import styles from './styles';
const settingIconFile = require('../../assets/images/icon-settings.png');

class NavBar extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
    // let val = account.getBalance() = 694987737;
    // account.events.on('balance_changed', () => {})
    this.state = {
      width: 200,
      text: "This is a test",
      index: 0,
      count: 2,
      items: [
        {
          icon: "dash-D-blue",
          amount: {
            part1: "11,23",
            part2: "468676"
          }
        },
        {
          icon: "dollar",
          amount: {
            part1: "4,800",
            part2: ".64"
          }
        }
      ]
    };
    this._onPress = this._onPress.bind(this);
    this.onSettingsPressed = this.onSettingsPressed.bind(this);
    this.animation = React.createRef();
    this.swipeableRow = React.createRef();
  }

  componentDidMount() {
    if (this.props.walletLib && this.props.walletLib.account) {
      this.updateBalance(this.props.walletLib.account.getBalance());
      this.subscribeToBalance();
    }
  }
  subscribeToBalance() {
    const account = this.props.walletLib.account;
    const self = this;
    this.balanceListener = account.events.on("balance_changed", () =>
      self.updateBalance(account.getBalance())
    );
  }
  componentWillUnmount() {
    if (this.balanceListener) {
      this.balanceListener.remove();
    }
  }
  updateBalance(satoshis) {
    function curCurrencyParts(val) {
      let str = val.toString();
      let splitted = str.split(".");

      var nf = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      const curPart1 = nf.format(splitted[0]);

      const curPart2 =
        splitted.length > 1
          ? splitted[1].slice(0, 2).padEnd(2, "0")
          : splitted[0].slice(0, 2).padEnd(2, "0");
      return { curPart1, curPart2 };
    }
    function cutSatoshiParts(val) {
      let str = val.toString();
      let len = str.length;

      const part1 =
        len > 6
          ? str.slice(0, -8).padStart(1, "0") +
            "," +
            str.slice(-9, -7).padStart(2, "0")
          : "0,00";

      const part2 = len > 6 ? str.slice(-6) : str.padStart(6, "0");

      return { part1, part2 };
    }
    function callToRatesService(satoshis, curr = "USD") {
      //FIXME
      const pricePerSatoshis = 0.0000019;
      const currBalance = satoshis * pricePerSatoshis;
      return currBalance;
    }
    let { items } = this.state;
    const { part1, part2 } = cutSatoshiParts(satoshis);
    items[0].amount.part1 = part1;
    items[0].amount.part2 = part2;

    const currencyBalance = callToRatesService(satoshis);
    const { curPart1, curPart2 } = curCurrencyParts(currencyBalance);
    items[1].amount.part1 = curPart1;
    items[1].amount.part2 = curPart2;

    this.setState({ items });
  }
  _getMaxSwipeDistance(info: Object): number {
    return this.state.width;
  }

  _onOpen() {}

  _onClose() {}

  _setListViewScrollableTo(value: boolean) {
    if (this._flatListRef) {
      this._flatListRef.setNativeProps({
        scrollEnabled: value
      });
    }
  }

  _setListViewScrollable = () => {
    this._setListViewScrollableTo(true);
  };

  _setListViewNotScrollable = () => {
    this._setListViewScrollableTo(false);
  };

  onLayout(event) {
    const {
      nativeEvent: {
        layout: { x, y, width, height }
      }
    } = event;
    this.setState({ width });
  }

  async _onPress() {
    await this.animation.current.scaleOut();
    this.setState(
      ({ index, count }) => ({
        index: (index + 1) % count
      }),
      async () => {
        await this.animation.current.scaleIn();
        if (this.state.index === 0) {
          this.swipeableRow.current._animateTo(0);
        }
        if (this.state.index === 2) {
          this.swipeableRow.current._animateTo(-this.state.width);
        }
      }
    );
  }

  render() {
    const {
      icon,
      amount: { part1, part2 }
    } = this.state.items[this.state.index];
    const iconButton = (
      <Animation ref={this.animation}>
        <Icon style={styles.icon} name={icon} />
      </Animation>
    );
    // return null;
    return (
      <View style={styles.navbar}>
        <SwipeableRow
          slideoutView={iconButton}
          ref={this.swipeableRow}
          isOpen={false}
          maxSwipeDistance={this._getMaxSwipeDistance()}
          onOpen={() => this._onOpen()}
          onClose={() => this._onClose()}
          shouldBounceOnMount={false}
          onSwipeEnd={this._setListViewScrollable}
          onSwipeStart={this._setListViewNotScrollable}
        >
          <TouchableWithoutFeedback style={styles.icon} onPress={this._onPress}>
            <View style={styles.row}>
              <View style={styles.inline} onLayout={this.onLayout}>
                <Text style={styles.part1} numberOfLines={1}>
                  {part1}
                </Text>
                <Text style={styles.part2} numberOfLines={1}>
                  {part2}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SwipeableRow>
        <View style={styles.settingsIcon}>
          <IconButton
            source={settingIconFile}
            action={() => this.onSettingsPressed()}
          />
        </View>
      </View>
    );
  }

  onSettingsPressed() {
    return this.props.navigation.push("SettingsScreen");
  }
}

export default NavBar;
