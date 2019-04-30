/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useState, useCallback } from 'react';

function useImage(props) {
  const { imageURL } = props;
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleError = useCallback(() => setIsImageLoaded(false), [imageURL]);

  return {
    isImageLoaded: isImageLoaded,
    showImage: !!imageURL && isImageLoaded,
    bind: {
      onError: handleError,
      source: { uri: imageURL }
    }
  };
}

export default useImage;
