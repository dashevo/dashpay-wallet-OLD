/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { debounce } from 'lodash';
import { isEqual } from 'lodash';

// Internal dependencies
import connect from './connect';

class AutoSubmit extends React.Component<any> {
  static defaultProps = {
    debounce: 300
  };

  constructor(props) {
    super(props);
    (this: any).submitForm = debounce(
      this.submitForm.bind(this),
      this.props.debounce
    );
  }

  submitForm(prevValues, nextValues) {
    this.props.form.submitForm();
    if (this.props.onSubmit) {
      this.props.onSubmit(prevValues, nextValues);
    }
  }

  componentDidUpdate(prevProps) {
    const { values: prevValues } = prevProps.form;
    const { values: nextValues } = this.props.form;

    if (!isEqual(prevValues, nextValues)) {
      this.submitForm(prevValues, nextValues);
    }
  }

  render(): React.Element<any> {
    return null;
  }
}

export default connect(AutoSubmit);
