/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export const COLORS = {
  blue: '#088BE2',
  blueDim: '#012060',
  blueDark: '#0B0F3B',
  white: '#FFFFFF',
  gray: '#787878',
  black: '#111921'
};

export const THEMES = {
  light: {
    foreground: COLORS.black,
    background: COLORS.white
  },
  vivid: {
    foreground: COLORS.white,
    background: COLORS.blue
  },
  dim: {
    foreground: COLORS.white,
    background: COLORS.blueDim
  },
  dark: {
    foreground: COLORS.white,
    background: COLORS.blueDark
  }
};

export type Theme = {
  foreground: string,
  background: string
}
