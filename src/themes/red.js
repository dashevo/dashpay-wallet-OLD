/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_SCALE = Dimensions.get('window').width / 375;

function normalize(size) {
  return Math.round(DEVICE_SCALE * size);
}

// Color system
//
// =============================================================================
export const white = '#fff';
export const gray100 = '#f2f2f2';
export const gray200 = '#e9ecef';
export const gray300 = '#dee2e6';
export const gray400 = '#ced4da';
export const gray500 = '#adb5bd';
export const gray600 = '#6c757d';
export const gray700 = '#495057';
export const gray800 = '#343a40';
export const gray900 = '#212529';
export const black = '#000';

export const primary = '#e65100';
export const secondary = '#555';

export const whiteAlpha50 = 'rgba(255, 255, 255, 0.5)';

// Typography
//
// =============================================================================
export const fontSizeBase = normalize(16);
export const fontSizeLg = normalize(fontSizeBase * 1.25);
export const fontSizeSm = normalize(fontSizeBase * 0.875);

export const borderWidth = StyleSheet.hairlineWidth;

// Avatar
//
// =============================================================================
export const avatarBackgroundColor = primary;
export const avatarBorderColor = primary;
export const avatarBorderRadius = normalize(60);
export const avatarBorderWidth = 0;
export const avatarColor = white;
export const avatarFontSize = normalize(64);
export const avatarSize = normalize(120);

// Avatar lg
export const avatarLgBorderRadius = normalize(60);
export const avatarLgFontSize = normalize(64);
export const avatarLgSize = normalize(120);

// Avatar sm
export const avatarSmBorderRadius = normalize(24);
export const avatarSmFontSize = normalize(20);
export const avatarSmSize = normalize(40);

// Avatar primary
export const avatarPrimaryBackgroundColor = primary;
export const avatarPrimaryBorderColor = primary;
export const avatarPrimaryColor = white;

// Avatar secondary
export const avatarSecondaryBackgroundColor = secondary;
export const avatarSecondaryBorderColor = secondary;
export const avatarSecondaryColor = white;

// Avatar Cover ***
export const avatarCoverBorderRadius = normalize(0);
export const avatarCoverFontSize = normalize(100);
export const avatarCoverHeight = normalize(375 * 0.6666666666666667);
export const avatarCoverWidth = normalize(375);

// Number Pad
//
// =============================================================================
export const numberPadBackgroundColor = primary;
export const numberPadPadding = normalize(25);

// Number Pad Button
export const numberPadButtonBorderColor = whiteAlpha50;
export const numberPadButtonBorderWidth = borderWidth;
export const numberPadButtonColor = whiteAlpha50;
export const numberPadButtonFontSize = normalize(13);
export const numberPadButtonHeight = normalize(40);

// Navbar
//
// =============================================================================
export const navbarContainerBackgroundColor = primary;
export const navbarContainerBorderColor = primary;
export const navbarContainerBorderWidth = 0;
export const navbarContainerHeight = normalize(48);

// Navbar Icon
export const navbarIconColor = white;
export const navbarIconFontSize = normalize(14);
export const navbarIconFontWeight = '300';
export const navbarIconLineHeight = normalize(18);

// Navbar Text
export const navbarTextColor = white;
export const navbarTextFontSize = normalize(12);
export const navbarTextFontWeight = '300';
export const navbarTextLineHeight = normalize(13);

// Navbar Title
export const navbarTitleColor = white;
export const navbarTitleFontSize = normalize(15);
export const navbarTitleFontWeight = '300';
export const navbarTitleLineHeight = normalize(17);

// Tabs
//
// =============================================================================

// Tab Bar
export const tabBarBackgroundColor = primary;
export const tabBarHeight = normalize(32);

// Tab Bar Item
export const tabBarItemPaddingBottom = normalize(8);
export const tabBarItemPaddingLeft = normalize(8);
export const tabBarItemPaddingRight = normalize(8);
export const tabBarItemPaddingTop = normalize(8);
export const tabBarItemFontSize = normalize(13);
export const tabBarItemColor = white;

// Tab Bar Indicator
export const tabBarIndicatorBackgroundColor = gray100;
export const tabBarIndicatorBottom = 0;
export const tabBarIndicatorHeight = normalize(2);
export const tabBarIndicatorWidth = '50%';

// Tab Container
export const tabContainerBackgroundColor = gray100;