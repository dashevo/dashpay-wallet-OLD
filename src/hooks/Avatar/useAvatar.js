/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useState, useCallback, useMemo } from 'react';

// Internal dependencies
import { useImage } from 'hooks/Image';
import useStyles from './useStyles';

function useAvatar(props) {
  const styles = useStyles(props);
  const { bind, showImage } = useImage({
    imageURL: props.user.imageURL,
  });

  const showFirstInitial = !!props.user.displayName;
  const firstInitial = showFirstInitial ? props.user.displayName.charAt(0).toUpperCase() : '';

  return {
    bind,
    hasImage: showImage,
    hasDisplayName: showFirstInitial,
    firstInitial,
    styles,
  };
}

export default useAvatar;
