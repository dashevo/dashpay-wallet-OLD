// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import Toggle from 'components/Toggle';
import AutoSubmit from 'components/AutoSubmit';
import ColorField from './components/ColorField';
import ImageField from './components/ImageField';
import UsernameField from './components/UsernameField';
import SendRequestButton from './components/SendRequestButton';
import defaults from './defaults';
import selector from './selectors';
import styles from './styles';
import type { State, Props } from './types';

class ProfileTab extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    const {
      initialValues,
      validationSchema,
    } = props;

    this.onSubmit = () => { throw Error('Not implemented'); };
    this.onDelete = () => { throw Error('Not implemented'); };

    this.state = {
      validationSchema,
      initialValues,
      onDelete: this.onDelete,
      onSubmit: this.onSubmit,
    };
  }

  render() {
    const {
      initialValues,
    } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Form {...this.state} {...this.props}>
          <AutoSubmit />
          <Toggle initial>
            {({
              on,
              off,
              setOn,
              setOff,
            }) => (
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
                    <UsernameField />
                  </View>
                )}
              </View>
            )}
          </Toggle>
        </Form>
        <View style={styles.row}>
          <SendRequestButton address={initialValues.address} />
        </View>
      </ScrollView>
    );
  }
}

export default connect(selector)(ProfileTab);
