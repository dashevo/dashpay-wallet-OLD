/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// TMP: This is temporary until we are able to use react-intl with hooks.

function useTranslate() {
  return (str = '', data = {}) => {
    const keys = Object.keys(data);
    const { length } = keys;

    if (!length) {
      return str;
    }

    for (let i = 0; i < length; i++) {
      str = str.replace(
        new RegExp(`{{ ${String(keys[i])} }}`, 'g'),
        (match, behind) => (match ? String(data[keys[i]]) : ''),
      );
    }

    return str;
  };
}

export default useTranslate;
