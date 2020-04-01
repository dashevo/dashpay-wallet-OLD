// @flow
import React, {
  useCallback, useMemo, useEffect, useState,
} from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RNCamera } from 'react-native-camera';
import { sampleSize } from 'lodash';
import { SCREEN_WIDTH } from 'constants';
import type { NavigationProps } from 'types/navigation';
import parseDashString from 'utils/parseDashString';
import useStyles from './useStyles';

const INITIAL_CAM_AREA_MARGIN = Math.round(SCREEN_WIDTH / 10);
const FINAL_CAM_AREA_MARGIN = Math.round(INITIAL_CAM_AREA_MARGIN / 2);
const INITIAL_CAM_AREA_HEIGHT = Math.round(SCREEN_WIDTH / 2);
const FINAL_CAM_AREA_HEIGHT = SCREEN_WIDTH - FINAL_CAM_AREA_MARGIN * 2;

const colors = sampleSize([
  '#4B4742', '#52555A', '#273234',
  '#3C473D', '#504B43', '#6B4A3A',
], 3);

const ScannerScreen = ({ navigation }: NavigationProps) => {
  const styles = useStyles();
  const [cameraVisible, setCameraVisible] = useState(false);
  const showCamera = useCallback(() => setCameraVisible(true), []);
  const containerHeight = useMemo(() => new Animated.Value(INITIAL_CAM_AREA_HEIGHT), []);
  const containerMargin = useMemo(() => new Animated.Value(INITIAL_CAM_AREA_MARGIN), []);
  const buttonOpacity = useMemo(() => new Animated.Value(1), []);
  const initLayerOpacity = useMemo(() => new Animated.Value(1), []);

  useEffect(() => {
    if (!cameraVisible) {
      return;
    }
    Animated.parallel([
      Animated.spring(containerHeight, {
        toValue: FINAL_CAM_AREA_HEIGHT,
      }),
      Animated.spring(containerMargin, {
        toValue: FINAL_CAM_AREA_MARGIN,
      }),
      Animated.spring(buttonOpacity, {
        useNativeDriver: true,
        toValue: 0,
      }),
      Animated.sequence([
        Animated.delay(500),
        Animated.spring(initLayerOpacity, {
          useNativeDriver: true,
          toValue: 0,
        }),
      ]),
    ]).start();
  }, [cameraVisible, buttonOpacity, initLayerOpacity, containerHeight, containerMargin]);

  const onBarCodeRead = useCallback(({ data }) => {
    setCameraVisible(false);
    const { address, amount } = parseDashString(data);
    navigation.replace('PayTab', { recipient: address, amount });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, { zIndex: 1, opacity: initLayerOpacity }]}>
        <LinearGradient style={styles.container} colors={colors}>
          <Animated.View style={{
            height: containerHeight,
            marginLeft: containerMargin,
            marginRight: containerMargin,
          }}
          >
            <View style={styles.fixedHeightRow}>
              <View style={styles.row}>
                <View style={[styles.cornerBox, styles.withTopBorder, styles.withLeftBorder]} />
                <View style={styles.container} />
                <View style={[styles.cornerBox, styles.withTopBorder, styles.withRightBorder]} />
              </View>
            </View>
            <Animated.View style={[
              styles.row, styles.centerItemsContainer, { opacity: buttonOpacity },
            ]}
            >
              <TouchableOpacity style={styles.button} onPress={showCamera}>
                <Text style={styles.buttonText}>TAP TO SCAN</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.fixedHeightRow}>
              <View style={[styles.cornerBox, styles.withBottomBorder, styles.withLeftBorder]} />
              <View style={styles.container} />
              <View style={[styles.cornerBox, styles.withBottomBorder, styles.withRightBorder]} />
            </View>
          </Animated.View>
        </LinearGradient>
      </Animated.View>
      {cameraVisible && (
        <RNCamera
          captureAudio={false}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={onBarCodeRead}
          style={StyleSheet.absoluteFill}
        >
          <View style={[styles.row, styles.withGreyBackground]} />
          <View style={[{ flexDirection: 'row', height: FINAL_CAM_AREA_HEIGHT }]}>
            <View style={[styles.container, styles.withGreyBackground]} />
            <View style={[{ width: FINAL_CAM_AREA_HEIGHT }]} />
            <View style={[styles.container, styles.withGreyBackground]} />
          </View>
          <View style={[styles.row, styles.withGreyBackground]} />
        </RNCamera>
      )}
    </View>
  );
};

export default ScannerScreen;
