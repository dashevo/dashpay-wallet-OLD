import React, { useRef, useEffect } from 'react';
import {
  TouchableOpacity, StyleSheet, Text, View,
} from 'react-native';
import { FormattedNumber } from 'react-intl';
import { DashIcon, Icon } from 'hooks/Icon';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';
import ConfirmButton from './ConfirmButton';
import actions from './actions';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  interpolate,
} = Animated;

export const DURATION = 500;

function useValue(initValue) {
  const value = useRef(null);
  if (value.current === null) {
    value.current = new Value(initValue);
  }
  return value.current;
}

function useAnimation(callback) {
  const value = useRef(null);
  if (value.current === null) {
    value.current = callback();
  }
  return value.current;
}

function useClock() {
  const value = useRef(null);
  if (value.current === null) {
    value.current = new Clock();
  }
  return value.current;
}

function Confirm(props) {
  const { params } = props.navigation.state;
  const {
    dashAmount, fiatAmount, onConfirmation, displayName = 'Anonymous',
  } = params;

  const dashFee = 0.00002;
  const total = dashAmount + dashFee;

  const _transY = useValue(0);
  const anim1 = useAnimation(() => timing(_transY, {
    duration: DURATION,
    toValue: 1,
    easing: Easing.inOut(Easing.ease),
  }));

  const anim2 = useAnimation(() => timing(_transY, {
    duration: DURATION,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  }));

  useEffect(() => {
    anim1.start();
  }, []);

  function goBack() {
    anim2.start(({ finished }) => {
      if (finished) {
        props.navigation.goBack();
      }
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: interpolate(_transY, {
              inputRange: [0, 0.75],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          styles.body,
          {
            transform: [
              {
                translateY: interpolate(_transY, {
                  inputRange: [0, 1],
                  outputRange: [-500, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.confirmationTmp}>
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <Icon style={styles.icon} name="chevron-left" />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <View style={styles.confirmation}>
              <View style={styles.details}>
                <View style={styles.row}>
                  <Text style={styles.send}>Send</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                  <DashIcon style={styles.dashIcon} />
                  <FormattedNumber value={dashAmount}>
                    {number => <Text style={styles.amount}>{number}</Text>}
                  </FormattedNumber>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                  <Text style={styles.receiver}>
                    {'To: '}
                    {displayName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.confirmButtonTmp}>
            <View style={styles.confirmButtonInner}>
              <ConfirmButton onConfirmation={onConfirmation} goBack={goBack} />
            </View>
          </View>
          <View style={styles.triangle} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.footer,
          {
            transform: [
              {
                translateY: interpolate(_transY, {
                  inputRange: [0, 1],
                  outputRange: [500, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={[styles.tcol]}>
              <View style={styles.trow}>
                <Text style={styles.textMuted}>Dash</Text>
                <Text style={styles.textMuted}>USD</Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.textMuted}>Fee</Text>
                <Text style={styles.textActive}>Total</Text>
              </View>
            </View>
            <View style={[styles.tcol, { flex: 1 }]}>
              <View style={[styles.trow, { flex: 1 }]}>
                <View style={styles.inline}>
                  <View style={styles.square}>
                    <Icon style={styles.iconMuted} name="dash" />
                  </View>
                  <FormattedNumber value={dashAmount}>
                    {number => <Text style={styles.textMuted}>{number}</Text>}
                  </FormattedNumber>
                </View>
                <View style={styles.inline}>
                  <View style={styles.square}>
                    <Icon style={styles.iconMuted} name="usd" />
                  </View>
                  <FormattedNumber value={fiatAmount}>
                    {number => <Text style={styles.textMuted}>{number}</Text>}
                  </FormattedNumber>
                </View>
              </View>
              <View style={[styles.trow, { flex: 1 }]}>
                <View style={styles.inline}>
                  <View style={styles.square}>
                    <Icon style={styles.iconMuted} name="dash" />
                  </View>
                  <FormattedNumber
                    value={dashFee}
                    minimumFractionDigits={5}
                    maximumFractionDigits={5}
                  >
                    {number => <Text style={styles.textMuted}>{number}</Text>}
                  </FormattedNumber>
                </View>
                <View style={styles.inline}>
                  <View style={styles.square}>
                    <Icon style={styles.iconActive} name="dash" />
                  </View>
                  <FormattedNumber
                    value={total}
                    minimumFractionDigits={5}
                    maximumFractionDigits={5}
                  >
                    {number => <Text style={styles.textActive}>{number}</Text>}
                  </FormattedNumber>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

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
  icon: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
});

Confirm = connect(
  null,
  actions,
)(Confirm);

export default Confirm;
