/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import * as React from "react";

// Internal dependencies
import Avatar from "hooks/Avatar";
import useStyles from "./useStyles";

type Props = {
  user: Object
};

function CoverPhoto(props: Props) {
  const styles = useStyles();
  const { user } = props;
  return <Avatar user={user} styles={styles} />;
}

export default CoverPhoto;
