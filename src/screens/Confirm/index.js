import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FormattedNumber } from 'react-intl';
import { DashIcon, Icon } from 'hooks/Icon';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';
import ConfirmButton from './ConfirmButton';
import actions from './actions';
import styles from './styles';

const { Value, timing, interpolate } = Animated;

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

type ConfirmProps = {
  navigation: Object,
};

function Confirm(props: ConfirmProps) {
  const { navigation } = props;
  const { params } = navigation.state;
  const {
    dashAmount, fiatAmount, onConfirmation, displayName = 'Anonymous',
  } = params;

  const dashFee = 0.00002;
  const total = dashAmount + dashFee;

  const transY = useValue(0);
  const anim1 = useAnimation(() => timing(transY, {
    duration: DURATION,
    toValue: 1,
    easing: Easing.inOut(Easing.ease),
  }));

  const anim2 = useAnimation(() => timing(transY, {
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
            opacity: interpolate(transY, {
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
                translateY: interpolate(transY, {
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
                translateY: interpolate(transY, {
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

export default connect(
  null,
  actions,
)(Confirm);
