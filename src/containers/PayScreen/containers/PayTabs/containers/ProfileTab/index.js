// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import AutoSubmit from 'components/AutoSubmit';
import CoverPhoto from './components/CoverPhoto';
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

    const { initialValues, validationSchema } = props;

    this.onSubmit = () => {
      throw Error('Not implemented');
    };
    this.onDelete = () => {
      throw Error('Not implemented');
    };

    this.state = {
      validationSchema,
      initialValues,
      onDelete: this.onDelete,
      onSubmit: this.onSubmit,
    };
  }

  render() {
    const { initialValues, user } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Form {...this.state} {...this.props}>
          <AutoSubmit />
          <View style={styles.fieldset}>
            <View style={styles.row}>
              <CoverPhoto user={user} />
            </View>
            <View style={styles.row}>
              <UsernameField />
            </View>
          </View>
        </Form>
        <View style={styles.row}>
          <SendRequestButton address={initialValues.address} />
        </View>
      </ScrollView>
    );
  }
}

export default connect(selector)(ProfileTab);
