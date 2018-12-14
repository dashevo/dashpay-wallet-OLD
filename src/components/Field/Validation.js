/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { getIn } from './utilities';
import { isFunction } from './utilities';
import connect from './connect';

// TODO:
// 1. next feature - jump to next input.
// 2. the code should be properly organized and cleaned

class FastFieldInner extends React.Component {
  static defaultProps = {
    onSubmitEditing: () => {}
  };
  input = null;

  constructor(props: Props) {
    super(props);
    this.input = React.createRef();

    (this: any).handleSubmitEditing = this.handleSubmitEditing.bind(this);
    (this: any).handleChangeText = this.handleChangeText.bind(this);
    (this: any).handleFocus = this.handleFocus.bind(this);
    (this: any).handleBlur = this.handleBlur.bind(this);
    (this: any).focus = this.focus.bind(this);
    (this: any).blur = this.blur.bind(this);
    (this: any).getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    this.input = ref;
  }

  componentDidMount() {
    const { name } = this.props;
    this.props.form.registerField(name, this);
  }

  componentWillUnmount() {
    const { name } = this.props;
    this.props.form.unregisterField(name);
  }

  focus() {
    if (this.input) {
      this.input.focus();
    }
  }

  blur() {
    if (this.input) {
      this.input.blur();
    }
  }

  handleChangeText(value: string) {
    const { name } = this.props;
    this.props.form.setFieldTouched(name);
    this.props.form.setFieldValue(name, value);
  }

  handleFocus(event: Object) {
    const { name } = this.props;
    this.props.form.setFieldFocused(name, true);
  }

  handleBlur(event: Object) {
    const { name } = this.props;
    this.props.form.setFieldFocused(name, false);
  }

  handleSubmitEditing(event: Object) {
    if (this.props.next) {
      this.props.form.setFieldFocus(this.props.next);
    }
  }

  render() {
    const { component, name, render, children, form, ...rest } = this.props;
    const value = form.values[name];

    const field = {
      numberOfLines: rest.numberOfLines,
      onBlur: this.handleBlur,
      onChangeText: this.handleChangeText,
      onFocus: this.handleFocus,
      placeholder: rest.placeholder,
      returnKeyType: rest.returnKeyType,
      blurOnSubmit: rest.blurOnSubmit,
      placeholderTextColor: rest.placeholderTextColor,
      onSubmitEditing: this.handleSubmitEditing,
      getRef: this.getRef,
      value,
      name
    };

    const props = { field, form };

    return component
      ? React.createElement(component, {
          ...props,
          ...rest,
          children
        })
      : isFunction(children)
        ? children(props)
        : children;
  }
}

export default connect(FastFieldInner);
