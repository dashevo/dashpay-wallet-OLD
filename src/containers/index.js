/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

// Providers
export * from './StoreProvider';
export * from './LanguageProvider';

// Screens
export { default as SplashScreen } from './SplashScreen';
export { default as ScannerScreen } from './ScannerScreen';

export { default as ReceiveScreen } from './ReceiveScreen';
export { default as SendScreen } from './SendScreen';
export { default as HomeScreen } from './HomeScreen';
export { default as NotificationsScreen } from './NotificationsScreen';
export { default as ErrorScreen } from './ErrorScreen';
export {
  default as TransactionHistoryScreen
} from './TransactionHistoryScreen';
export { default as SettingsScreen } from './SettingsScreen';
export {
  default as SettingsLanguageScreen
} from './SettingsScreen/LanguageScreen';
export {
  default as SettingsAlternativeCurrencyScreen
} from './SettingsScreen/AlternativeCurrencyScreen';
