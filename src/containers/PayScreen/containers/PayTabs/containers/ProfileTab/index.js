/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import Toggle from 'components/Toggle';
import AutoSubmit from 'components/AutoSubmit';
import ColorField from './components/ColorField';
import ImageField from './components/ImageField';
import NameField from './components/NameField';
import AddressField from './components/AddressField';
import Metadata from './components/Metadata';
import RemoveButton from './components/RemoveButton';
import SendRequestButton from './components/SendRequestButton';
import defaults from './defaults';
import selector from './selectors';
import actions from './actions';
import styles from './styles';

class ProfileTab extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    this.state = {
      validationSchema: props.validationSchema,
      initialValues: props.initialValues,
      onDelete: this._onDelete,
      onSubmit: this._onSubmit
    };
  }

  _onSubmit = values => {
    this.props.updateLocalContact(values);
  };

  _onDelete = values => {
    this.props.deleteLocalContact(values);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form {...this.state} {...this.props}>
          <AutoSubmit />
          <Toggle initial={true}>
            {({ on, off, setOn, setOff }) => (
              <View style={styles.fieldset}>
                {on && (
                  <View style={styles.row}>
                    <ImageField onPress={setOff} />
                  </View>
                )}
                {off && (
                  <View style={styles.row}>
                    <ColorField onPress={setOn} />
                  </View>
                )}
                {on && (
                  <View style={styles.row}>
                    <NameField />
                  </View>
                )}
                {on && (
                  <View style={styles.row}>
                    <AddressField />
                  </View>
                )}
                {on && (
                  <View style={styles.row}>
                    <Metadata />
                    <RemoveButton />
                  </View>
                )}
              </View>
            )}
          </Toggle>
        </Form>
        <View style={styles.row}>
          <SendRequestButton />
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  selector,
  actions,
)(ProfileTab);
